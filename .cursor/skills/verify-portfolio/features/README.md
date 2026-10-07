# Portfolio verification map

This directory is the maintained source for verifying the visitor-facing behavior of the wncelrcn-v3 portfolio. Read this index, then use the matching feature file as the recipe.

## Baseline preconditions

- Launch with `.cursor/skills/verify-portfolio/scripts/verify.sh launch` and require `doctor` to print `ok` plus the URL, pid, process group, and listener.
- Open that URL. Do not drive port 3000 or any server this run did not start.
- Desktop recipes use a 1280×800 viewport. The mobile nav recipe uses 390×844.
- The site has no login and no editable data. Reloading restores the same content.
- A second instance needs its own `VERIFY_PORT`, `VERIFY_RUN_DIR`, and `VERIFY_DIST_DIR`. Do not stop the dev server on port 3000.

## Driving conventions

- Start every recipe from the baseline unless its preconditions say otherwise.
- Prefer accessible names over CSS selectors or screen position.
- Treat link and button names in the feature files as exact.
- Run browser actions with the Cursor IDE browser tools named in `../SKILL.md`.
- Run process checks with `scripts/verify.sh`. Do not start or stop Next yourself.
- External `href`s are observed, not opened.
- Do not delete `artifacts/` during cleanup.

## Proof and skip reporting

- Record the feature id and the entry point in `action.txt`.
- Save an accessibility snapshot and a screenshot of the resulting state.
- Report an unreachable path with the command you ran and the precondition that failed.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 and one paragraph, then these four H2 sections in order: `Sub-features`, `How to get to it (user POV)`, `Driving it with verify-portfolio`, and `Gotchas`.

## Features

- [Site navigation](./navigation.md) covers the brand link, desktop nav, mobile menu, and the Awards placeholder.
- [About tabs](./about.md) covers About Me, Work Experience, and Education on the homepage.
- [Project modal](./project-modal.md) covers opening a highlight and a listing on `/projects`, and closing the dialog.
- [Certifications](./certifications.md) covers the credential grid and the external view link.
- [Footer](./footer.md) covers social links, the email link, and the copyright line.
