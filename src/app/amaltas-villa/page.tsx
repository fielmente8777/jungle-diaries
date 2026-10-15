import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { NextPage, PageHero } from "@/components/blocks";
import { Reviews } from "@/components/reviews";
import { Button, Container, Eyebrow, H2, JsonLd, Label, Lead, Note, Section, TextLink, Ticks } from "@/components/ui";
import amaltasDusk from "@/images/amaltas-dusk.jpg";
import amaltasLogo from "@/images/amaltas-logo.png";
import amaltasPool from "@/images/amaltas-pool.jpg";
import roomBijrani from "@/images/room-bijrani.jpg";
import roomDhikalaJacuzzi from "@/images/room-dhikala-jacuzzi.jpg";
import roomDhikala from "@/images/room-dhikala.jpg";
import roomDurgadevi from "@/images/room-durgadevi.jpg";
import roomJhirna from "@/images/room-jhirna.jpg";
import roomSitabani from "@/images/room-sitabani.jpg";
import { AMALTAS_EMAIL, LINKS, PHONES, siteUrl } from "@/lib/site";
import { AMALTAS_RATING, AMALTAS_REVIEWS } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Amaltas Villa — Boutique Villa on Dhela Road, Jim Corbett",
  description:
    "Amaltas Villa by Jungle Diaries is a six-room boutique villa at Himmatpur Dotiyal, Dhela Road, Ramnagar. Pool, forest-view terrace, a dining room for twelve and winter bonfires.",
  alternates: { canonical: "/amaltas-villa" },
};

type Room = { name: string; size: string; image: StaticImageData; tags: string[] };

const ROOMS: Room[] = [
  { name: "Bijrani Room", size: "300 sq. ft.", image: roomBijrani, tags: ["Double bed", "Private balcony", "1 extra bed"] },
  { name: "Durgadevi Room", size: "300 sq. ft.", image: roomDurgadevi, tags: ["Double bed", "Jungle-facing window", "1 extra bed"] },
  { name: "Jhirna Room", size: "250 sq. ft.", image: roomJhirna, tags: ["Double bed", "Couples & solo travellers"] },
  { name: "Sitabani Room", size: "200 sq. ft.", image: roomSitabani, tags: ["Double bed", "2 guests", "For couples"] },
];

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-line px-[9px] pt-1.5 pb-[5px] text-[0.85rem] leading-none text-ink-soft">
          {t}
        </li>
      ))}
    </ul>
  );
}

const FOR_WHOM = [
  "Couples",
  "Families",
  "Friends & small groups",
  "Wildlife & nature lovers",
  "Weekend travellers",
  "Slow travel & digital detox",
];

export default function AmaltasPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Amaltas Villa by Jungle Diaries",
          url: `${siteUrl()}/amaltas-villa`,
          sameAs: [LINKS.amaltasSite, LINKS.amaltasInstagram],
          telephone: PHONES[0],
          email: AMALTAS_EMAIL,
          numberOfRooms: 6,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Himmatpur Dotiyal, Dhela Road",
            addressLocality: "Ramnagar",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
          amenityFeature: ["Swimming pool", "Forest-view terrace", "Free Wi-Fi", "Parking", "Dining room"].map((name) => ({
            "@type": "LocationFeatureSpecification",
            name,
            value: true,
          })),
          parentOrganization: { "@type": "Organization", name: "Jungle Diaries" },
        }}
      />

      <PageHero
        crumb="Amaltas Villa"
        eyebrow="Boutique villa · Himmatpur Dotiyal, Dhela Road"
        title="An intimate forest escape in Corbett"
        intro="Six rooms, a pool, a forest-view terrace and a dining room for twelve. A slower, more personal way to experience Jim Corbett."
        image={amaltasDusk}
        imageAlt="Amaltas Villa's pool terrace and lit verandas at dusk"
        logo={{ src: amaltasLogo, alt: "Amaltas by Jungle Diaries", height: 56 }}
      >
        <Button href="/plan-a-trip#amaltas">Enquire about Amaltas</Button>
        <Button href={LINKS.amaltasSite} variant="ghost" external>
          amaltasvilla.com ↗
        </Button>
      </PageHero>

      <Section aria-labelledby="villa-title">
        <Container className="grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div>
            <Eyebrow>The villa</Eyebrow>
            <H2 id="villa-title" className="mb-[22px]">
              Not every getaway needs an itinerary.
            </H2>
            <Lead>
              Amaltas is a comfortable, personal base for slowing down, reconnecting with nature and seeing Corbett beyond a
              standard safari plan.
            </Lead>
            <Lead className="mt-3.5">
              Spend the morning on a safari, the afternoon by the pool, or simply do less. The forest sets the pace.
            </Lead>
          </div>
          <figure className="relative m-0">
            <Image
              src={amaltasPool}
              alt="The stone cottage and pool at Amaltas Villa"
              placeholder="blur"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="aspect-[3/2] w-full rounded-card object-cover"
            />
            <figcaption className="absolute right-2.5 bottom-[-22px] max-w-[calc(100%-20px)] rounded-card bg-paper px-3.5 py-1.5 shadow-[0_6px_20px_rgba(0,0,0,.12)] lg:-right-1.5">
              <Note>Wake up slowly. The forest isn&apos;t going anywhere.</Note>
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section tone="paper-2" id="rooms" aria-labelledby="rooms-title">
        <Container>
          <div className="mb-[30px] flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div>
              <Eyebrow>Rooms</Eyebrow>
              <H2 id="rooms-title" className="max-w-[14ch]">
                Six rooms, named for the forests of Corbett
              </H2>
            </div>
            <p className="max-w-[46ch] text-ink-soft">
              Five room types and a small inventory on purpose, so there are fewer guests, more attention and quieter rooms.
            </p>
          </div>

          <div className="grid gap-[clamp(14px,2vw,22px)] sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr]">
            <article className="flex min-w-0 flex-col overflow-hidden rounded-card bg-paper sm:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="grid gap-[3px] sm:grid-cols-[1.4fr_1fr] lg:grid-cols-1">
                <Image src={roomDhikala} alt="The Dhikala Family Suite bedroom" placeholder="blur" sizes="(min-width: 1024px) 38vw, (min-width: 640px) 58vw, 100vw" className="aspect-[4/3] h-full w-full object-cover" />
                <Image src={roomDhikalaJacuzzi} alt="The jacuzzi in the Dhikala Family Suite" placeholder="blur" sizes="(min-width: 1024px) 38vw, (min-width: 640px) 42vw, 100vw" className="aspect-[4/3] h-full w-full object-cover lg:aspect-[2/1]" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 px-[18px] pt-4 pb-[18px]">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[1.75rem] leading-[1.15]">Dhikala Family Suite</h3>
                  <span className="text-small font-semibold whitespace-nowrap text-ink-soft tabular-nums">800 sq. ft.</span>
                </div>
                <p className="text-small text-ink-soft">The largest space at Amaltas, made for families and small groups travelling together.</p>
                <Tags tags={["Up to 6 guests", "2 washrooms", "Jacuzzi"]} />
              </div>
            </article>
            {ROOMS.map((room) => (
              <article key={room.name} className="flex min-w-0 flex-col overflow-hidden rounded-card bg-paper">
                <Image src={room.image} alt={`The ${room.name}`} placeholder="blur" sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col gap-1.5 px-[18px] pt-4 pb-[18px]">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[1.4rem] leading-[1.15]">{room.name}</h3>
                    <span className="text-small font-semibold whitespace-nowrap text-ink-soft tabular-nums">{room.size}</span>
                  </div>
                  <Tags tags={room.tags} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-label="Facilities and location">
        <Container className="grid gap-[clamp(24px,4vw,56px)] md:grid-cols-3">
          <div>
            <Label>At the villa</Label>
            <Ticks
              items={[
                "Swimming pool and forest-view terrace",
                "Dining room seating 12, freshly prepared meals",
                "Outdoor seating and outdoor games",
                "Free Wi-Fi and ample parking",
                "24×7 power backup by genset",
              ]}
            />
          </div>
          <div>
            <Label>Things to do</Label>
            <Ticks
              items={[
                "Help arranging jungle safaris in Jim Corbett National Park",
                "Taxis for local sightseeing",
                "Forest views and nature around the property",
                "Evening bonfire in winter",
              ]}
            />
            <TextLink href="/safaris" className="mt-4 inline-block">
              Which safari zone? →
            </TextLink>
          </div>
          <div>
            <Label>Find us</Label>
            <address className="leading-normal not-italic">
              Himmatpur Dotiyal, Dhela Road,
              <br />
              Ramnagar, Uttarakhand
            </address>
            <div className="mt-3 grid gap-1 font-semibold tabular-nums">
              {PHONES.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-[22px] gap-y-2.5">
              <TextLink href="/plan-a-trip#amaltas">Enquire</TextLink>
              <TextLink href={LINKS.amaltasInstagram} external>
                Instagram
              </TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="forest" aria-labelledby="whom-title">
        <Container>
          <Eyebrow>Who stays here</Eyebrow>
          <H2 id="whom-title">Made for people who&apos;d rather slow down</H2>
          <ul className="mt-[26px] flex flex-wrap gap-2.5">
            {FOR_WHOM.map((w) => (
              <li
                key={w}
                className="rounded-full border border-sand-line px-[18px] pt-3 pb-2.5 font-display text-[clamp(1.15rem,1rem+0.6vw,1.5rem)] leading-none"
              >
                {w}
              </li>
            ))}
          </ul>
          <Lead className="mt-[26px]">
            Want the whole villa? Talk to us about booking all six rooms for a family gathering or a small group.
          </Lead>
        </Container>
      </Section>

      <Reviews
        reviews={AMALTAS_REVIEWS}
        title="Stories from the stay"
        intro="What guests say after a few slow days at Amaltas."
        rating={AMALTAS_RATING}
      />

      <NextPage href="/destinn-dhela-retreat" title="Destinn Dhela Retreat" sub="Fourteen rooms, a rooftop infinity pool and stargazing" />
    </>
  );
}
