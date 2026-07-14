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
            className="text-lg font-medium tracking-tight md:text-2xl"
          >
            Wince Larcen
          </Link>
          <ul className="flex items-center gap-4 text-sm md:gap-8 md:text-base">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-opacity hover:opacity-60"
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
