import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AwardPhotos } from "@/components/awards/AwardPhotos";
import { awards } from "@/lib/awards";

export function AwardsIndex() {
  return (
    <>
      <ScrollReveal>
        <h1 className="text-center text-[clamp(2.5rem,6vw,64px)] font-medium text-balance">
          Awards
        </h1>
      </ScrollReveal>

      <div className="mt-10 border-b border-black/8 md:mt-12">
        {awards.map((award, index) => (
          <ScrollReveal key={award.id} delay={index * 0.08} y={20}>
            <article className="flex flex-col gap-3 border-t border-black/8 py-10 lg:flex-row lg:items-stretch lg:gap-12">
              <p className="shrink-0 font-serif lg:pt-1.5 text-[21px] italic text-muted-ink lg:w-[124px]">
                {award.when}
              </p>
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-8">
                <div className="flex flex-col gap-2.5">
                  <h2 className="text-[clamp(1.5rem,3vw,34px)] font-medium leading-[1.12] tracking-[-0.34px] text-ink">
                    {award.event}
                  </h2>
                  <p className="font-serif text-[clamp(1.25rem,2vw,28px)] italic leading-[1.2] text-ink">
                    {award.place}
                  </p>
                </div>
                {award.blurb ? (
                  <p className="max-w-[440px] text-[17px] leading-[1.5] text-muted-ink">
                    {award.blurb}
                  </p>
                ) : null}
              </div>
              <AwardPhotos event={award.event} photos={award.photos} />
            </article>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
