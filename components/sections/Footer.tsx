import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { socials, contactEmail } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="bg-white">
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
                  className="flex w-fit items-center gap-2.5 text-[clamp(1rem,1.5vw,20px)] leading-none font-medium transition-[opacity,scale] hover:opacity-70 active:scale-[0.96]"
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

          {/* Right: contact */}
          <div className="md:text-right">
            <p className="max-w-[320px] text-[clamp(1.125rem,1.9vw,24px)] font-medium text-muted-ink md:ml-auto">
              For work, collabs, &amp; everything else, reach me at
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 inline-flex items-center gap-2 text-[clamp(1rem,1.5vw,20px)] font-medium transition-[opacity,scale] hover:opacity-70 active:scale-[0.96] md:justify-end"
            >
              <Mail className="size-6" aria-hidden="true" />
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
