import type { Metadata } from "next";
import { NextPage, PageHero } from "@/components/blocks";
import { CopyLine } from "@/components/copy-line";
import { TripPlanner } from "@/components/trip-planner";
import { Container, Section, TextLink } from "@/components/ui";
import { AMALTAS_EMAIL, PHONES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan a Trip",
  description:
    "Tell Jungle Diaries your dates, group and interests. We'll reply on WhatsApp with stays, safari availability and rates for Jim Corbett and Uttarakhand.",
  alternates: { canonical: "/plan-a-trip" },
};

const blockTitle = "mb-2 font-sans text-label font-semibold tracking-[0.14em] text-sand-soft uppercase";

export default function PlanATripPage() {
  return (
    <>
      <PageHero
        crumb="Plan a trip"
        eyebrow="Plan a trip"
        title="Tell us about your trip"
        intro="Fill in what you know. We'll reply on WhatsApp with options, rates and safari availability for your dates."
      />

      <Section tone="forest" aria-label="Trip planner and contact details">
        <Container className="grid items-start gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <TripPlanner />

          <aside aria-label="Contact details" className="grid gap-[26px] rounded-card border border-sand-line bg-forest-deep p-[clamp(22px,3vw,32px)]">
            <h2 className="text-[1.6rem]">Reservations</h2>
            <div>
              <h3 className={blockTitle}>Call or WhatsApp</h3>
              {PHONES.map((p) => (
                <CopyLine key={p} value={p} />
              ))}
            </div>
            <div>
              <h3 className={blockTitle}>Email · Amaltas</h3>
              <CopyLine
                value={AMALTAS_EMAIL}
                small
                display={
                  <>
                    amaltasbythejunglediaries
                    <wbr />
                    @gmail.com
                  </>
                }
              />
            </div>
            <div>
              <h3 className={blockTitle}>Amaltas Villa</h3>
              <address className="leading-normal text-sand-soft not-italic">
                Himmatpur Dotiyal, Dhela Road,
                <br />
                Ramnagar, Uttarakhand
              </address>
              <TextLink href="/amaltas-villa" className="mt-2 inline-block">
                About the villa
              </TextLink>
            </div>
            <div>
              <h3 className={blockTitle}>Destinn Dhela Retreat</h3>
              <address className="leading-normal text-sand-soft not-italic">
                Dhela Road, Ramnagar, Uttarakhand
                <br />
                About 4 km from Ramnagar Railway Station
              </address>
              <TextLink href="/destinn-dhela-retreat" className="mt-2 inline-block">
                About the retreat
              </TextLink>
            </div>
          </aside>
        </Container>
      </Section>

      <NextPage href="/" title="Back to the start" sub="Jungle Diaries home" />
    </>
  );
}
