import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { socials, contactEmail } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="bg-accent-surface">
      <Container className="pt-12 pb-8 md:pt-[74px] md:pb-[34px]">
        <h2 className="text-[clamp(1.75rem,3.2vw,40px)] leading-[1.2] font-medium">
          Thanks for stopping by!
        </h2>

        <div className="mt-6 flex flex-col justify-between gap-8 md:mt-[22px] md:flex-row">
          {/* Left: socials */}
          <ul className="flex flex-col gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2.5 text-[clamp(0.95rem,1.3vw,18px)] leading-none font-medium transition-[opacity,scale] hover:opacity-70 active:scale-[0.96]"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-5 object-contain"
                  />
                  <span>{social.label}</span>
                  <ArrowUpRight className="size-4 opacity-70" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right: contact */}
          <div className="md:text-right">
            <p className="max-w-[380px] text-[clamp(1rem,1.5vw,20px)] leading-snug font-medium text-pretty text-muted-ink md:ml-auto">
              For work, collabs, &amp; everything else, reach me at
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 inline-flex items-center gap-2 text-[clamp(0.95rem,1.3vw,18px)] font-medium transition-[opacity,scale] hover:opacity-70 active:scale-[0.96] md:justify-end"
            >
              <Mail className="size-5" aria-hidden="true" />
              <span>{contactEmail}</span>
            </a>
          </div>
        </div>

        <p className="mt-7 text-center text-base leading-none text-ink">
          © Wince Larcen Rivano 2026. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
