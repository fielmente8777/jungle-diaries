import type { Metadata } from "next";
import { NextPage, PageHero } from "@/components/blocks";
import { Button, Container, Eyebrow, H2, Lead, Note, Section, TextLink } from "@/components/ui";
import { ZonesTable } from "@/components/zones-table";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corbett Safari Zones & Seasons",
  description:
    "Dhela and Jhirna are open all year; Bijrani and Durga Devi from 15 October; Dhikala from 15 November. Plan your Jim Corbett safari with Jungle Diaries' naturalist-led team.",
  alternates: { canonical: "/safaris" },
};

const EXPERIENCES = [
  { title: "Jungle safaris", text: "Wildlife tours and safaris in Corbett, matched to the zone, season and the time you have." },
  { title: "Birdwatching", text: "Birdwatching and nature experiences, planned by a team led by an ornithologist." },
  { title: "Photography", text: "Wildlife and nature photography experiences for those who come with a camera." },
];

export default function SafarisPage() {
  return (
    <>
      <PageHero
        crumb="Safaris"
        eyebrow="Safaris in Corbett Tiger Reserve"
        title="Know your zone before you book"
        intro="Corbett is visited zone by zone. Each has its own gate, permits and season, so the zone you pick shapes the whole trip."
        note="Our stays are on Dhela Road, a short drive from the Dhela gate."
        wordmark="Dhela"
      />

      <Section aria-labelledby="zones-title">
        <Container className="grid items-start gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Eyebrow>Zones and seasons</Eyebrow>
            <H2 id="zones-title" className="mb-[22px]">
              Two zones stay open all year
            </H2>
            <Lead>
              Dhela and Jhirna remain open through the year. Bijrani and Durga Devi reopen in mid-October, and Dhikala in
              mid-November.
            </Lead>
            <Lead className="mt-3.5">The rooms at Amaltas Villa take their names from these forests.</Lead>
            <div className="mt-[30px] rounded-card bg-paper-2 px-6 py-[22px]">
              <b className="mb-1.5 block font-display text-[1.35rem] font-normal">Plan it with a naturalist</b>
              <p className="text-small text-ink-soft">
                Kiran Sagar, our Cluster GM and Head of Operations, is a naturalist and ornithologist with deep knowledge
                of Corbett&apos;s wildlife and birds. Tell us your dates and the team will suggest the zone that fits.
              </p>
            </div>
          </div>
          <div>
            <ZonesTable />
            <div className="mt-[22px] flex flex-wrap items-baseline justify-between gap-x-7 gap-y-3">
              <Note className="max-w-[44ch] text-[1.1rem]">
                Seasons are set by Corbett Tiger Reserve and depend on weather. We check them for your dates.
              </Note>
              <TextLink href={LINKS.permitPortal} external>
                Official permit portal
              </TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="deep" aria-labelledby="exp-title">
        <Container>
          <Eyebrow>Wildlife experiences</Eyebrow>
          <H2 id="exp-title" className="mb-[clamp(32px,4vw,48px)]">
            Three ways into the forest
          </H2>
          <div className="grid gap-[clamp(16px,2.4vw,28px)] md:grid-cols-3">
            {EXPERIENCES.map((e) => (
              <div key={e.title} className="flex min-w-0 flex-col gap-2.5 border-t-[1.5px] border-sand pt-[18px]">
                <h3 className="text-[1.6rem]">{e.title}</h3>
                <p className="text-small text-sand-soft">{e.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="resp-title">
        <Container className="grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div>
            <Eyebrow>Wildlife with responsibility</Eyebrow>
            <H2 id="resp-title">The forest comes first</H2>
          </div>
          <div>
            <Lead>We promote wildlife tourism that respects animals, forests, local communities and the rules of the protected area.</Lead>
            <Lead className="mt-3.5">
              Around the safari, we coordinate the rest: where you stay, transport, sightseeing, meals and any special
              arrangements.
            </Lead>
            <div className="mt-8">
              <Button href="/plan-a-trip#safari">Plan a safari</Button>
            </div>
          </div>
        </Container>
      </Section>

      <NextPage href="/journeys" title="Journeys across Uttarakhand" sub="Tours, family holidays, events and weddings" />
    </>
  );
}
