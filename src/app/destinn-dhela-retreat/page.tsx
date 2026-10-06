import type { Metadata } from "next";
import Image from "next/image";
import { NextPage, PageHero } from "@/components/blocks";
import { Button, Container, Eyebrow, H2, JsonLd, Label, Lead, Note, Section, TextLink, Ticks } from "@/components/ui";
import destinnBuilding from "@/images/destinn-building.jpg";
import destinnGarden from "@/images/destinn-garden.jpg";
import destinnLogo from "@/images/destinn-logo.png";
import destinnRooftop from "@/images/destinn-rooftop.jpg";
import destinnRoom from "@/images/destinn-room.jpg";
import destinnStars from "@/images/destinn-stars.jpg";
import { LINKS, PHONES, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destinn Dhela Retreat — Rooftop Infinity Pool near Dhela Safari Zone",
  description:
    "Destinn Dhela Retreat by Jungle Diaries: 14 spacious rooms near Ramnagar and the Dhela Safari Zone, with a rooftop infinity pool, Sir Jim's Dining, Jim's Sky Grill and stargazing.",
  alternates: { canonical: "/destinn-dhela-retreat" },
};

const DAY = [
  { when: "Dawn", title: "Safari at Dhela", text: "The Dhela Safari Entrance Gate is about 8 km away. We help arrange safaris and local sightseeing." },
  { when: "Afternoon", title: "Rooftop infinity pool", text: "Swim with mountain and greenery views, or settle into the indoor games area." },
  { when: "Evening", title: "Dinner on the roof", text: "Grilled food at Jim's Sky Grill, or a sit-down meal at Sir Jim's Dining." },
  { when: "Night", title: "Stargazing", text: "Look up through astronomical equipment set up for guests." },
];

const DISTANCES = [
  { place: "Ramnagar Railway Station", km: "≈ 4 km" },
  { place: "Dhela Safari Entrance Gate", km: "≈ 8 km" },
  { place: "Pantnagar Airport", km: "≈ 85 km", note: "subject to road and traffic" },
];

export default function DestinnPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Resort",
          name: "Destinn Dhela Retreat by Jungle Diaries",
          url: `${siteUrl()}/destinn-dhela-retreat`,
          sameAs: [LINKS.destinnSite, LINKS.destinnInstagram],
          telephone: PHONES[0],
          numberOfRooms: 14,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dhela Road",
            addressLocality: "Ramnagar",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
          amenityFeature: ["Rooftop infinity pool", "Restaurant", "Rooftop grill", "Stargazing", "Lift", "Parking"].map((name) => ({
            "@type": "LocationFeatureSpecification",
            name,
            value: true,
          })),
          parentOrganization: { "@type": "Organization", name: "Jungle Diaries" },
        }}
      />

      <PageHero
        crumb="Destinn Dhela Retreat"
        eyebrow="Nature retreat · about 4 km from Ramnagar"
        title="Stay close to the wild. Stay close to comfort."
        intro="Fourteen spacious rooms near the Dhela Safari Zone, with a rooftop infinity pool, two restaurants and stargazing at night."
        image={destinnRooftop}
        imageAlt="Destinn's rooftop terrace with benches and the infinity pool beyond"
        logo={{ src: destinnLogo, alt: "Destinn", height: 56 }}
      >
        <Button href="/plan-a-trip#destinn">Enquire about Destinn</Button>
        <Button href={LINKS.destinnSite} variant="ghost" external>
          destindhellaretreat.com ↗
        </Button>
      </PageHero>

      <Section aria-labelledby="retreat-title">
        <Container>
          <div className="mb-[clamp(36px,5vw,56px)] grid items-end gap-[clamp(24px,5vw,72px)] lg:grid-cols-2">
            <div>
              <Eyebrow>The retreat</Eyebrow>
              <H2 id="retreat-title">Room to actually settle in</H2>
            </div>
            <Lead>
              Rooms come with forest-facing views and private balconies, with lift access and plenty of parking. Evenings
              move up to the roof for a swim, dinner at the grill and time with the stars.
            </Lead>
          </div>
          <div className="grid grid-cols-2 gap-[clamp(10px,1.4vw,16px)] md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            <div className="relative col-span-2 aspect-video overflow-hidden rounded-card md:col-span-1 md:aspect-[2/1]">
              <Image src={destinnGarden} alt="The garden at Destinn Dhela Retreat at dusk" fill placeholder="blur" sizes="(min-width: 768px) 63vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card md:col-start-1 md:row-start-2 md:aspect-video">
              <Image src={destinnRoom} alt="A Destinn room with timber ceiling and balcony doors" fill placeholder="blur" sizes="(min-width: 768px) 63vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card md:col-start-2 md:row-span-2 md:row-start-1 md:aspect-auto">
              <Image src={destinnBuilding} alt="Destinn Dhela Retreat building at sunset" fill placeholder="blur" sizes="(min-width: 768px) 37vw, 50vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="forest" aria-labelledby="day-title">
        <Container>
          <Eyebrow>A day at Destinn</Eyebrow>
          <H2 id="day-title" className="mb-[clamp(32px,4vw,48px)]">
            From safari to stargazing
          </H2>
          <ol className="grid border-t border-sand-line sm:grid-cols-2 lg:grid-cols-4">
            {DAY.map((d, i) => (
              <li
                key={d.when}
                className={[
                  "min-w-0 pt-[22px] pr-6 pb-1",
                  i > 0 ? "max-sm:mt-[18px] max-sm:border-t max-sm:border-sand-line" : "",
                  i % 2 === 1 ? "sm:border-l sm:border-sand-line sm:pl-6" : "",
                  i >= 2 ? "sm:max-lg:mt-[18px] sm:max-lg:border-t sm:max-lg:border-sand-line" : "",
                  i === 2 ? "lg:border-l lg:border-sand-line lg:pl-6" : "",
                ].join(" ")}
              >
                <span className="font-hand text-[1.15rem] text-marigold">{d.when}</span>
                <h3 className="mt-1.5 mb-2 text-[1.45rem] leading-[1.15]">{d.title}</h3>
                <p className="text-small text-sand-soft">{d.text}</p>
              </li>
            ))}
          </ol>

          <div className="relative isolate mt-[clamp(48px,6vw,80px)] flex min-h-80 items-end overflow-hidden rounded-card">
            <Image src={destinnStars} alt="A telescope on the rooftop under a starry sky" fill placeholder="blur" sizes="(min-width: 1248px) 1200px, 100vw" className="-z-20 object-cover" />
            <div aria-hidden="true" className="scrim-bottom absolute inset-0 -z-10" />
            <div className="tone-photo max-w-[640px] p-[clamp(22px,4vw,44px)]">
              <Note>A signature Destinn evening</Note>
              <h2 className="mt-1.5 mb-2.5 text-h3">After the forest goes quiet, the sky takes over.</h2>
              <p className="text-photo-soft">
                On clear nights the rooftop becomes a place to study the sky, with equipment set up for guests.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="eat-title">
        <Container>
          <Eyebrow>Food</Eyebrow>
          <H2 id="eat-title" className="mb-[clamp(32px,4vw,48px)]">
            Two places to eat
          </H2>
          <div className="grid gap-[clamp(20px,3vw,36px)] md:grid-cols-2">
            <div className="border-t-[1.5px] border-ink pt-[18px]">
              <h3 className="text-h3">Sir Jim&apos;s Dining</h3>
              <span className="mt-2 mb-3 block text-label font-semibold tracking-[0.14em] text-ink-soft uppercase">
                Multi-cuisine · 30 covers
              </span>
              <p className="text-ink-soft">
                Kumaoni local dishes alongside Indian, Mughlai, Chinese and South Indian food, so families and mixed groups
                all find something.
              </p>
            </div>
            <div className="border-t-[1.5px] border-ink pt-[18px]">
              <h3 className="text-h3">Jim&apos;s Sky Grill</h3>
              <span className="mt-2 mb-3 block text-label font-semibold tracking-[0.14em] text-ink-soft uppercase">
                Rooftop grill · about 35 covers
              </span>
              <p className="text-ink-soft">Grilled dishes served on the roof, with the mountains and greenery all around.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper-2" aria-label="Retreat details">
        <Container className="grid gap-[clamp(24px,4vw,56px)] md:grid-cols-3">
          <div>
            <Label>At the retreat</Label>
            <Ticks
              items={[
                "14 rooms, including 450 sq. ft. categories",
                "Forest-facing views and private balconies",
                "Rooftop infinity pool",
                "Kitty party and indoor games area",
                "Lift access and ample parking",
              ]}
            />
          </div>
          <div>
            <Label>Getting here</Label>
            <table className="w-full border-collapse tabular-nums">
              <tbody>
                {DISTANCES.map((d) => (
                  <tr key={d.place}>
                    <td className="border-b border-line py-2.5 align-top">
                      {d.place}
                      {d.note && <small className="block text-[0.82rem] text-ink-soft">{d.note}</small>}
                    </td>
                    <td className="border-b border-line py-2.5 pl-4 text-right align-top font-display text-[1.3rem] leading-[1.1] whitespace-nowrap">
                      {d.km}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <Label>Book or ask</Label>
            <p>Reservations through the Jungle Diaries team.</p>
            <div className="mt-3 font-semibold tabular-nums">{PHONES[0]}</div>
            <div className="mt-4 flex flex-wrap gap-x-[22px] gap-y-2.5">
              <TextLink href="/plan-a-trip#destinn">Enquire</TextLink>
              <TextLink href={LINKS.destinnInstagram} external>
                Instagram
              </TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <NextPage href="/safaris" title="Safari zones" sub="Seasons, gates and how we help you choose" />
    </>
  );
}
