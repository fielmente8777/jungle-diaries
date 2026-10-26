import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import amaltasLogo from "@/images/amaltas-logo.png";
import { FactGrid } from "./blocks";
import { Button, Container, Eyebrow, Lead, Section, TextLink } from "./ui";

type Stay = {
  href: string;
  enquire: string;
  kind: string;
  name: string;
  blurb: string;
  image: StaticImageData | string;
  imageAlt: string;
  logo: StaticImageData | string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
  facts: Array<{ big: string; small: string }>;
  cta: string;
};

const STAYS: Stay[] = [
  {
    href: "/amaltas-villa",
    enquire: "/plan-a-trip#amaltas",
    kind: "Boutique villa · Dhela Road",
    name: "Amaltas Villa by Jungle Diaries",
    blurb: "An intimate forest escape for couples, families and small groups who want a slower, more personal Corbett.",
    image: "/amaltas/image4.jpg",
    imageAlt: "Amaltas Villa stone cottage and pool lit up under the night sky",
    logo: amaltasLogo,
    logoAlt: "Amaltas by Jungle Diaries logo",
    facts: [
      { big: "6", small: "rooms in five categories" },
      { big: "12", small: "seats in the dining room" },
      { big: "Pool", small: "and a terrace with forest views" },
      { big: "Bonfire", small: "on winter evenings" },
    ],
    cta: "Explore Amaltas",
  },
  {
    href: "/destinn-dhela-retreat",
    enquire: "/plan-a-trip#destinn",
    kind: "Nature retreat · near Dhela Safari Zone",
    name: "Destinn Dhela Retreat",
    blurb: "Spacious rooms, a rooftop infinity pool, two places to eat and a night sky you can study through a telescope.",
    image: "/destinn/view.webp",
    imageAlt: "Aerial view of Destinn Dhela Retreat's rooftop pool and forest setting",
    logo: "/destinn/Logo1.jpeg",
    logoAlt: "Destinn by Jungle Diaries logo",
    logoWidth: 90,
    logoHeight: 54,
    facts: [
      { big: "14", small: "rooms, some 450 sq. ft." },
      { big: "≈ 8 km", small: "to the Dhela Safari Entrance Gate" },
      { big: "Rooftop", small: "infinity pool and Jim's Sky Grill" },
      { big: "Stargazing", small: "with astronomical equipment" },
    ],
    cta: "Explore Destinn",
  },
];

export function StaysOverview() {
  return (
    <Section tone="paper-2" id="stays" aria-labelledby="stays-title">
      <Container>
        <div className="mb-[clamp(36px,5vw,56px)] flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div>
            <Eyebrow>Our stays</Eyebrow>
            <h2 id="stays-title" className="max-w-[13ch] text-h2">
              Two stays, two ways to see Corbett
            </h2>
          </div>
          <Lead className="max-w-[46ch]">
            Both are run by the Jungle Diaries team on Dhela Road, Ramnagar. One is small and unhurried. The other has
            room for families, groups and rooftop evenings.
          </Lead>
        </div>
        <div className="grid gap-[clamp(20px,3vw,36px)] md:grid-cols-2">
          {STAYS.map((stay) => (
            <article
              key={stay.href}
              className="group flex min-w-0 flex-col overflow-hidden rounded-card border border-line bg-paper"
            >
              <figure className="relative m-0 aspect-[4/3] overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.imageAlt}
                  fill
                  {...(typeof stay.image !== "string" ? { placeholder: "blur" } : {})}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-[18px] left-[18px] rounded-card bg-chip p-2 shadow-[0_6px_18px_rgba(0,0,0,.25)]">
                  {typeof stay.logo === "string" ? (
                    <Image
                      src={stay.logo}
                      alt={stay.logoAlt}
                      width={stay.logoWidth ?? 90}
                      height={stay.logoHeight ?? 54}
                      style={{ height: 54, width: "auto" }}
                    />
                  ) : (
                    <Image src={stay.logo} alt={stay.logoAlt} style={{ height: 54, width: "auto" }} />
                  )}
                </span>
              </figure>
              <div className="flex flex-1 flex-col gap-4 p-[clamp(22px,3vw,32px)]">
                <span className="text-label font-semibold tracking-[0.14em] text-ink-soft uppercase">{stay.kind}</span>
                <h3 className="text-h3">
                  <Link href={stay.href} className="no-underline">
                    {stay.name}
                  </Link>
                </h3>
                <p className="text-ink-soft">{stay.blurb}</p>
                <FactGrid facts={stay.facts} />
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1.5">
                  <Button href={stay.href}>{stay.cta}</Button>
                  <TextLink href={stay.enquire}>Enquire</TextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
