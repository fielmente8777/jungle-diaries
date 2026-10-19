import type { Metadata } from "next";
import { NextPage, PageHero } from "@/components/blocks";
import { Container, Eyebrow, H2, Note, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us & Our Team",
  description:
    "Jungle Diaries grew from a long love of Corbett's forests. Meet founder Pankul Aggarwal and the team: a naturalist-ornithologist, an executive chef and the people who plan your trip.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  { title: "Wildlife with responsibility", text: "We promote wildlife tourism that respects animals, forests, local communities and the rules of protected areas." },
  { title: "Local expertise", text: "Destination knowledge and hospitality experience help you choose the right stay, safari zone, activities and transport." },
  { title: "Personalised journeys", text: "Itineraries are built around your interests, time, group size and needs, never one plan for everyone." },
  { title: "Complete travel solutions", text: "We coordinate accommodation, safaris, transport, sightseeing, meals and special arrangements where you need them." },
];

const CHARACTER = ["Authentic", "Warm", "Knowledgeable", "Nature-led", "Responsible", "Dependable"];

const TEAM = [
  {
    name: "Kiran Sagar",
    role: "Cluster GM & Head of Operations",
    years: "27",
    text: "A naturalist and ornithologist with extensive knowledge of Jim Corbett, its wildlife and birds, hospitality and destination management.",
  },
  {
    name: "KD Paliwal",
    role: "Executive Chef",
    years: "30",
    text: "Specialises in multi-cuisine operations, Indian cuisine and kitchen management.",
  },
  {
    name: "Dr. Akash Bhardwaj",
    role: "Author · Social entrepreneur · Wildlife & tourism advocate",
    years: "18",
    text: "Focuses on inclusion, social responsibility, wildlife awareness and destination storytelling, with a particular interest in more opportunities for persons with disabilities in tourism.",
  },
  {
    name: "Dilshad",
    role: "Head of Finance",
    years: "15+",
    text: "Expertise in finance and accounts, cost control, inventory management and hotel operations.",
  },
];

const role = "mt-2.5 block text-label font-semibold tracking-[0.14em] text-ink-soft uppercase";

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About us"
        eyebrow="About Jungle Diaries"
        title="Built on a long love of the forest"
        intro="Jungle Diaries is a travel and wildlife company based in Jim Corbett. It grew from a long-standing passion for nature, wildlife, exploration and meaningful travel, and it exists to make trips in Uttarakhand reliable, personal and well organised."
        wordmark="Corbett"
      />

      <Section aria-labelledby="belief-title">
        <Container className="grid items-start gap-[clamp(36px,6vw,96px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div>
            <Eyebrow id="belief-title">What we believe</Eyebrow>
            <blockquote className="m-0 font-display text-quote text-balance">
              Travel is not simply about visiting a destination. It is about a meaningful connection with nature, people and
              experiences.
            </blockquote>
            <Note className="mt-[22px]">That is the whole idea behind the diaries.</Note>
          </div>
          <div className="grid gap-x-8 gap-y-[34px] sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border-t border-line pt-[18px]">
                <h3 className="mb-2.5 text-[1.45rem]">{p.title}</h3>
                <p className="text-small text-ink-soft">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="forest" tight aria-labelledby="char-title">
        <Container>
          <Eyebrow id="char-title">How we want you to remember us</Eyebrow>
          <ul className="mt-7 flex flex-wrap gap-x-[22px] gap-y-1.5">
            {CHARACTER.map((c, i) => (
              <li key={c} className="font-display text-[clamp(1.6rem,1.1rem+2vw,2.8rem)] leading-[1.1]">
                {c}
                {i < CHARACTER.length - 1 && (
                  <span aria-hidden="true" className="ml-[22px] text-marigold">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="team" aria-labelledby="team-title">
        <Container>
          <Eyebrow>Our team</Eyebrow>
          <H2 id="team-title" className="max-w-[16ch]">
            The people who keep the diaries
          </H2>

          <div className="mt-[clamp(36px,5vw,60px)] grid gap-[clamp(24px,5vw,72px)] border-y-[1.5px] border-ink py-[34px] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <h3 className="text-[clamp(2rem,1.4rem+2vw,2.9rem)]">Pankul Aggarwal</h3>
              <span className={role}>Founder &amp; Vision</span>
            </div>
            <p className="text-lead text-ink-soft">
              A passionate traveller and wildlife enthusiast with a long-standing connection to Jim Corbett. His vision is to
              build reliable, personal and authentic travel experiences that show the natural beauty of Uttarakhand.
            </p>
          </div>

          <div className="grid gap-x-[clamp(24px,5vw,72px)] md:grid-cols-2">
            {TEAM.map((person) => (
              <article key={person.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-5 gap-y-1.5 border-b border-line py-7">
                <div>
                  <h3 className="text-[1.7rem]">{person.name}</h3>
                  <span className={role}>{person.role}</span>
                </div>
                {person.years ? (
                  <div className="text-right font-display text-[2.2rem] leading-none tabular-nums">
                    {person.years}
                    <small className="mt-1.5 block font-sans text-[0.75rem] tracking-[0.12em] text-ink-soft uppercase">
                      years in hospitality
                    </small>
                  </div>
                ) : (
                  <span />
                )}
                <p className="col-span-full mt-1.5 max-w-[54ch] text-small text-ink-soft">{person.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <NextPage href="/plan-a-trip" title="Plan a trip" sub="Send us your dates on WhatsApp" />
    </>
  );
}
