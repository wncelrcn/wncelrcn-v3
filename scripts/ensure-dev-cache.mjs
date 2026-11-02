import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distNamePattern = /^\.next[A-Za-z0-9._-]*$/;

export function shouldResetDevCache(recorded, cacheExists, root) {
  if (!cacheExists) return false;
  return recorded !== root;
}

export async function ensureDevCache(root, distName = ".next") {
  if (!distNamePattern.test(distName)) {
    throw new Error(
      `dist directory must be a single .next* name, not '${distName}'`,
    );
  }

  const devDir = path.join(root, distName, "dev");
  const markerPath = path.join(devDir, "project-root");
  const cacheDir = path.join(devDir, "cache", "turbopack");
  const cacheExists = existsSync(cacheDir);

  let recorded = null;
  if (existsSync(markerPath)) {
    recorded = (await readFile(markerPath, "utf8")).trim();
  }

  if (shouldResetDevCache(recorded, cacheExists, root)) {
    await rm(devDir, { recursive: true, force: true });
    const previous = recorded ?? "an unknown directory";
    console.log(
      `Removed ${distName}/dev. Its Turbopack cache was written for ${previous}.`,
    );
  }

  await mkdir(devDir, { recursive: true });
  await writeFile(markerPath, `${root}\n`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const distName = process.env.VERIFY_DIST_DIR ?? ".next";
  await ensureDevCache(process.cwd(), distName);
}
