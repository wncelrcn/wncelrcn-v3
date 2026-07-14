import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navLinks } from "@/lib/portfolio-data";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 pt-4 md:pt-6">
      <Container>
        <nav className="flex h-14 items-center justify-between rounded-full bg-white px-5 shadow-pill md:h-16 md:px-8">
          <Link
            href="/"
            className="inline-block text-lg font-medium tracking-tight transition-[opacity,scale] hover:opacity-70 active:scale-[0.96] md:text-2xl"
          >
            Wince Larcen
          </Link>
          <ul className="flex items-center gap-1 text-sm md:gap-4 md:text-base">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex items-center px-3 py-2.5 transition-[opacity,scale] hover:opacity-60 active:scale-[0.96]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
