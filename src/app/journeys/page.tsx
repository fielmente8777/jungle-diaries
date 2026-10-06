import type { Metadata } from "next";
import { CtaBand, NextPage, PageHero } from "@/components/blocks";
import { JourneysMap } from "@/components/journeys-map";
import { Container, Eyebrow, H2, Section, cx } from "@/components/ui";

export const metadata: Metadata = {
  title: "Journeys across Uttarakhand",
  description:
    "Customised Uttarakhand tours, family holidays, MICE, destination weddings and school trips from Jim Corbett to Nainital, Mukteshwar, Ranikhet, Kausani, Rishikesh, Haridwar and Mussoorie.",
  alternates: { canonical: "/journeys" },
};

const OFFERS = [
  { title: "In the forest", items: ["Wildlife tours and jungle safaris", "Birdwatching and nature experiences", "Wildlife and nature photography"] },
  { title: "Holidays", items: ["Customised family holidays", "Customised Uttarakhand tours", "Hotel and resort bookings"] },
  {
    title: "Groups and occasions",
    items: ["MICE: meetings, incentives, conferences and events", "Destination weddings and celebrations", "School and educational group tours"],
  },
  { title: "Getting around", items: ["Transportation, sightseeing and itinerary coordination"] },
];

const DESTINATIONS = ["Nainital", "Bhimtal", "Mussoorie", "Ranikhet", "Rishikesh", "Haridwar", "Mukteshwar", "Kausani"];

const AUDIENCE = [
  { title: "Families", text: "Holidays built around children, grandparents and everyone's pace." },
  { title: "Couples", text: "Quiet stays and unhurried days in the forest." },
  { title: "Wildlife enthusiasts", text: "Safaris, birding and photography planned around zones and seasons." },
  { title: "Leisure travellers", text: "A short break or a longer loop through the hills." },
  { title: "Small groups", text: "Friends travelling together, with stays that feel like your own." },
  { title: "Corporate groups", text: "Meetings, incentives, conferences and offsites." },
  { title: "Event planners", text: "Destination weddings and celebrations in Corbett and beyond." },
  { title: "Schools", text: "Educational group tours with nature at the centre." },
];

export default function JourneysPage() {
  return (
    <>
      <PageHero
        crumb="Journeys"
        eyebrow="Journeys across Uttarakhand"
        title="Corbett first, then the rest of Uttarakhand"
        intro="Beyond our own stays, we plan whole trips: where to stay, how to get there, and what to do once you arrive."
        wordmark="Kumaon"
      />

      <Section tone="forest" aria-labelledby="what-title">
        <Container className="grid items-start gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
          <div>
            <Eyebrow>What we plan</Eyebrow>
            <H2 id="what-title" className="mb-[clamp(28px,3vw,40px)]">
              Ten kinds of trips, one team
            </H2>
            <div className="grid gap-x-8 gap-y-[30px] sm:grid-cols-2">
              {OFFERS.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-2.5 text-[1.35rem]">{group.title}</h3>
                  <ul className="grid gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-small leading-[1.45] text-sand-soft before:absolute before:top-[0.62em] before:left-0 before:h-[1.5px] before:w-[7px] before:bg-marigold before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <JourneysMap />
            <ul aria-label="Key destinations" className="mt-4 flex flex-wrap gap-2">
              <li className="rounded-full bg-marigold px-3 pt-1.5 pb-[5px] text-[0.9rem] leading-none font-semibold text-gold-ink">Jim Corbett</li>
              {[...DESTINATIONS, "and other Himalayan destinations"].map((d) => (
                <li key={d} className="rounded-full border border-sand-line px-3 pt-1.5 pb-[5px] text-[0.9rem] leading-none">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="aud-title">
        <Container>
          <Eyebrow>Who we plan for</Eyebrow>
          <H2 id="aud-title" className="mb-[clamp(32px,4vw,48px)]">
            Every trip starts with who&apos;s coming
          </H2>
          <ul className="grid border-t-[1.5px] border-ink sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCE.map((a, i) => (
              <li
                key={a.title}
                className={cx(
                  "min-w-0 border-b border-line pt-5 pr-5 pb-[22px]",
                  i % 2 === 1 && "sm:border-l sm:pl-5",
                  i % 4 === 2 && "lg:border-l lg:pl-5",
                )}
              >
                <h3 className="text-[1.4rem] leading-[1.15]">{a.title}</h3>
                <p className="mt-1.5 text-small text-ink-soft">{a.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Where should the journey go?"
        text="Tell us the places on your list and how long you have. We'll suggest a route, stays and transport."
        href="/plan-a-trip#tour"
        button="Plan a journey"
      />

      <NextPage href="/about" title="About Jungle Diaries" sub="Our belief, our principles and our team" />
    </>
  );
}
