import type { Metadata } from "next";
import { GalleryView } from "@/components/gallery-view";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery — A Visual Journey | Jungle Diaries Corbett",
  description:
    "A glimpse of the comfort, beauty, and memories that await at Amaltas Villa and Destinn Dhela Retreat. Every photo tells the story of your perfect Jim Corbett stay.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      {/* Gallery Header Section */}
      <section className="tone-paper border-b border-line bg-paper px-(--gutter) pt-[clamp(44px,7vw,84px)] pb-[clamp(32px,5vw,56px)] text-center">
        <Container>
          {/* Main Title & Script Subtitle (matching reference) */}
          <h1 className="font-display text-[clamp(2.5rem,2rem+3vw,4.4rem)] font-normal tracking-[0.14em] text-ink uppercase">
            GALLERY
          </h1>

          <p className="mt-1 font-hand text-[clamp(1.8rem,1.4rem+1.8vw,2.7rem)] -rotate-1 text-marigold">
            A Visual Journey
          </p>

          <p className="mx-auto mt-4 max-w-[56ch] text-small sm:text-body text-ink-soft">
            A glimpse of the comfort, beauty, and memories that await. Every photo tells the story of your perfect stay.
          </p>

          {/* Decorative diamond line divider */}
          <div className="mt-7 flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-20 sm:w-28 bg-line" />
            <div className="size-1.5 rotate-45 bg-marigold" />
            <div className="h-px w-20 sm:w-28 bg-line" />
          </div>
        </Container>
      </section>

      {/* Gallery Grid & Filter Section */}
      <Section tone="paper" tight className="pt-10 sm:pt-14">
        <Container>
          <GalleryView />
        </Container>
      </Section>
    </>
  );
}

