import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { socials, contactEmail } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="bg-white">
      <Container className="py-14 md:py-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Left: heading + socials */}
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,40px)] font-medium">
              Thanks for stopping by!
            </h2>
            <ul className="mt-6 flex flex-col gap-3 md:mt-10">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[clamp(1rem,1.4vw,20px)] font-medium transition-opacity hover:opacity-70"
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 object-contain"
                    />
                    <span>{social.label}</span>
                    <ArrowUpRight className="size-[18px] opacity-70" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: contact */}
          <div className="md:text-right">
            <p className="max-w-[320px] text-[clamp(1rem,1.4vw,24px)] font-medium text-black/50 md:ml-auto">
              For work, collabs, &amp; everything else, reach me at
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 inline-flex items-center gap-2 text-[clamp(1rem,1.3vw,20px)] font-medium transition-opacity hover:opacity-70 md:justify-end"
            >
              <Mail className="size-6" aria-hidden="true" />
              <span>{contactEmail}</span>
            </a>
          </div>
        </div>

        <p className="mt-12 text-center text-base text-black/70 md:mt-16">
          © Wince Larcen Rivano 2026. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
