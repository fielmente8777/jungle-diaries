import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/blocks";
import { Reviews } from "@/components/reviews";
import { StaysOverview } from "@/components/stays-overview";
import { Button, Container, Eyebrow, H2, JsonLd, Section, TextLink } from "@/components/ui";
import heroForest from "@/images/hero-forest.jpg";
import logo from "@/images/jd-logo.png";
import { PHONES, SITE_NAME, siteUrl } from "@/lib/site";
import { AMALTAS_RATING, AMALTAS_REVIEWS } from "@/lib/reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const EXPLORE = [
  {
    href: "/safaris",
    kind: "Safaris",
    title: "Know your zone before you book",
    rows: [
      ["Dhela, Jhirna", "open all year"],
      ["Bijrani, Durga Devi", "from 15 Oct"],
      ["Dhikala", "from 15 Nov"],
    ],
    go: "Safari zones",
  },
  {
    href: "/journeys",
    kind: "Journeys",
    title: "Corbett first, then the rest of Uttarakhand",
    text: "Family holidays, custom tours, MICE, weddings and school trips, to Nainital, Mukteshwar, Rishikesh, Mussoorie and more.",
    go: "See journeys",
  },
  {
    href: "/about",
    kind: "About us",
    title: "The people who keep the diaries",
    text: "A naturalist and ornithologist runs operations. The kitchen is led by a chef with nearly 30 years in hospitality.",
    go: "Meet the team",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: SITE_NAME,
          url: siteUrl(),
          logo: `${siteUrl()}/icon.png`,
          telephone: PHONES[0],
          slogan: "Your Journey. Your Story. Our Wild Connection.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Himmatpur Dotiyal, Dhela Road",
            addressLocality: "Ramnagar",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
          areaServed: "Uttarakhand, India",
        }}
      />

      <section aria-labelledby="hero-title" className="tone-photo relative isolate overflow-hidden bg-forest-deep px-(--gutter) pt-[clamp(96px,14vw,170px)] pb-[clamp(56px,7vw,88px)]">
        <Image src={heroForest} alt="" fill preload placeholder="blur" sizes="100vw" className="-z-20 object-cover object-[center_40%]" />
        <div aria-hidden="true" className="scrim-home absolute inset-0 -z-10" />
        <Container className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <Eyebrow>Jim Corbett · Ramnagar · Uttarakhand</Eyebrow>
            <h1 id="hero-title" className="max-w-[12ch] text-hero text-photo">
              <span className="block motion-safe:animate-rise">Your journey.</span>
              <span className="block motion-safe:animate-rise motion-safe:[animation-delay:80ms]">Your story.</span>
              <span className="block motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
                Our <em className="text-marigold not-italic">wild</em> connection.
              </span>
            </h1>
            <p className="mt-[26px] max-w-[52ch] text-lead text-photo-soft motion-safe:animate-rise motion-safe:[animation-delay:220ms]">
              Jungle Diaries is a travel and wildlife company based in Jim Corbett. We run two stays on Dhela Road in
              Ramnagar, plan safaris with people who know the forest, and put together journeys across Uttarakhand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 motion-safe:animate-rise motion-safe:[animation-delay:300ms]">
              <Button href="#stays">See our stays</Button>
              <Button href="/plan-a-trip" variant="ghost">
                Plan a trip
              </Button>
            </div>
            <div className="mt-11 flex flex-wrap gap-x-[22px] gap-y-2 text-label tracking-[0.14em] text-photo-soft uppercase tabular-nums">
              <span>29.39° N · 79.13° E</span>
              <span>Corbett Tiger Reserve</span>
            </div>
          </div>
          <Image
            src={logo}
            alt="Jungle Diaries tiger emblem"
            className="row-start-1 w-24 drop-shadow-[0_10px_28px_rgba(0,0,0,0.4)] md:row-auto md:w-[clamp(120px,14vw,176px)]"
            sizes="176px"
          />
        </Container>
      </section>

      <StaysOverview />

      <Section aria-label="What we believe">
        <Container className="grid items-end gap-x-14 gap-y-7 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <Eyebrow>What we believe</Eyebrow>
            <blockquote className="m-0 max-w-[26ch] font-display text-[clamp(1.7rem,1.2rem+2vw,2.8rem)] leading-[1.14] text-balance">
              Travel is not simply about visiting a destination. It is about a meaningful connection with nature, people
              and experiences.
            </blockquote>
          </div>
          <TextLink href="/about">Read our story and meet the team</TextLink>
        </Container>
      </Section>

      <Reviews
        tone="paper-2"
        id="guest-reviews"
        eyebrow="Guest reviews · Amaltas Villa"
        title="Stories from the stay"
        reviews={AMALTAS_REVIEWS.slice(0, 3)}
        rating={AMALTAS_RATING}
        more={{ href: "/amaltas-villa#reviews", label: "More from Amaltas guests →" }}
      />

      <Section tone="deep" aria-labelledby="explore-title">
        <Container>
          <Eyebrow>Beyond the stay</Eyebrow>
          <H2 id="explore-title">Plan the whole trip with us</H2>
          <div className="mt-[clamp(32px,4vw,48px)] grid gap-[clamp(16px,2.4vw,28px)] md:grid-cols-3">
            {EXPLORE.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="flex min-w-0 flex-col gap-3.5 rounded-card border border-sand-line bg-forest-deep p-[clamp(22px,2.6vw,30px)] no-underline transition hover:-translate-y-0.5 hover:border-marigold"
              >
                <span className="text-label font-semibold tracking-[0.14em] text-sand-soft uppercase">{card.kind}</span>
                <h3 className="text-[1.75rem] leading-[1.1]">{card.title}</h3>
                {card.rows ? (
                  <ul className="grid gap-1.5 text-[0.92rem]">
                    {card.rows.map(([a, b]) => (
                      <li key={a} className="flex justify-between gap-3 border-b border-sand-line pb-1.5">
                        <span>{a}</span>
                        <span className="text-right text-sand-soft">{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-small text-sand-soft">{card.text}</p>
                )}
                <span className="mt-auto pt-2 font-semibold text-marigold">{card.go} →</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Tell us where you want to go"
        text="Share your dates and who's travelling. We'll reply on WhatsApp with stays, safari options and rates."
        href="/plan-a-trip"
        button="Plan a trip"
      />
    </>
  );
}
