import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navLinks } from "@/lib/portfolio-data";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 pt-5 md:pt-[55px]">
      <Container>
        <nav className="flex h-[72px] items-center justify-between rounded-[40px] bg-white px-6 shadow-pill md:h-[115px] md:px-[58px]">
          <Link
            href="/"
            className="text-xl font-medium tracking-tight md:text-[32px]"
          >
            Wince Larcen
          </Link>
          <ul className="flex items-center gap-5 text-sm md:gap-[50px] md:text-[24px]">
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
