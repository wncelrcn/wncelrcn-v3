"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { navLinks } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 pt-4 md:pt-6">
      <Container>
        <nav className="flex h-14 items-center justify-between rounded-full bg-white px-5 shadow-pill md:h-16 md:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="inline-block text-lg font-medium tracking-tight transition-[opacity,scale] hover:opacity-70 active:scale-[0.96] md:text-2xl"
          >
            Wince Larcen
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-4 text-base md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex items-center px-3 py-2.5 transition-[opacity,scale] hover:opacity-60 active:scale-[0.96]",
                    pathname === link.href && "font-medium",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-1 flex size-10 items-center justify-center transition-transform active:scale-[0.9] md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-3xl bg-white p-2 shadow-pill md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-base transition-colors hover:bg-black/5",
                      pathname === link.href && "font-medium",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
