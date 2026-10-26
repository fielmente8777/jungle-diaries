import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GENERAL_ENQUIRY, whatsappLink } from "@/lib/site";
import { Button, Container, cx, Lead, Note, Section, WhatsAppIcon } from "./ui";

type PageHeroProps = {
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image?: StaticImageData | string;
  imageAlt?: string;
  logo?: { src: StaticImageData | string; alt: string; height: number; width?: number };
  wordmark?: string;
  note?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ crumb, eyebrow, title, intro, image, imageAlt = "", logo, wordmark, note, children }: PageHeroProps) {
  const photo = Boolean(image);
  return (
    <section
      aria-labelledby="page-title"
      className={cx(
        "relative isolate overflow-hidden px-(--gutter)",
        photo
          ? "tone-photo bg-forest-deep pt-[clamp(120px,16vw,210px)] pb-[clamp(48px,6vw,76px)]"
          : "tone-deep pt-[clamp(72px,10vw,132px)] pb-[clamp(48px,6vw,76px)]",
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            preload
            {...(typeof image !== "string" ? { placeholder: "blur" } : {})}
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div aria-hidden="true" className="scrim-page absolute inset-0 -z-10" />
        </>
      )}
      <Container>
        <nav aria-label="Breadcrumb" className="mb-[26px] flex flex-wrap gap-2 text-[0.85rem] text-(--soft)">
          <Link href="/" className="no-underline opacity-80 hover:underline hover:opacity-100">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        {logo && (
          <span className="mb-[22px] inline-block rounded-card bg-chip px-2.5 py-2">
            {typeof logo.src === "string" ? (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? Math.round((logo.height * 972) / 583)}
                height={logo.height}
                style={{ height: logo.height, width: "auto" }}
              />
            ) : (
              <Image src={logo.src} alt={logo.alt} style={{ height: logo.height, width: "auto" }} />
            )}
          </span>
        )}
        <p className="mb-[18px] flex items-center gap-2.5 text-label font-semibold tracking-[0.16em] text-(--soft) uppercase before:h-px before:w-[26px] before:flex-none before:bg-current before:opacity-60 before:content-['']">
          {eyebrow}
        </p>
        <h1 id="page-title" className="max-w-[16ch] text-page motion-safe:animate-rise">
          {title}
        </h1>
        <p className="mt-[22px] max-w-[56ch] text-lead text-(--soft) motion-safe:animate-rise motion-safe:[animation-delay:220ms]">
          {intro}
        </p>
        {note && <Note className="mt-[22px]">{note}</Note>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
      {wordmark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[calc(var(--gutter)*-0.5)] bottom-[-0.2em] -z-10 hidden font-display text-[clamp(6rem,15vw,14rem)] leading-none whitespace-nowrap text-sand/[0.07] md:block"
        >
          {wordmark}
        </span>
      )}
    </section>
  );
}

export function NextPage({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <Link href={href} className="group tone-paper-2 block border-t border-line px-(--gutter) py-[clamp(44px,6vw,72px)] no-underline">
      <Container className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div>
          <span className="mb-2.5 block text-label font-semibold tracking-[0.16em] text-ink-soft uppercase">Next</span>
          <span className="font-display text-[clamp(2rem,1.3rem+3vw,3.6rem)] leading-[1.05]">{title}</span>
          <span className="mt-2 block text-ink-soft">{sub}</span>
        </div>
        <span
          aria-hidden="true"
          className="font-display text-[clamp(2rem,1.3rem+3vw,3.6rem)] leading-none text-note transition-transform duration-300 group-hover:translate-x-2"
        >
          →
        </span>
      </Container>
    </Link>
  );
}

export function CtaBand({
  title,
  text,
  href,
  button,
}: {
  title: string;
  text: string;
  href: string;
  button: string;
}) {
  return (
    <Section tone="forest" tight aria-labelledby="cta-title">
      <Container className="grid items-end gap-x-12 gap-y-6 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <h2 id="cta-title" className="max-w-[15ch] text-h2">
            {title}
          </h2>
          <Lead className="mt-4">{text}</Lead>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={href}>{button}</Button>
          <Button href={whatsappLink(GENERAL_ENQUIRY)} variant="ghost" external>
            <WhatsAppIcon />
            WhatsApp us
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export function FactGrid({ facts }: { facts: Array<{ big: string; small: string }> }) {
  return (
    <ul className="grid grid-cols-2 border-t border-(--rule)">
      {facts.map((f, i) => (
        <li
          key={f.big}
          className={cx(
            "flex min-w-0 flex-col gap-0.5 border-b border-(--rule) py-3",
            i % 2 === 0 ? "pr-3.5" : "border-l pl-3.5",
          )}
        >
          <b className="font-display text-stat font-normal tabular-nums">{f.big}</b>
          <span className="text-small leading-[1.35] text-(--soft)">{f.small}</span>
        </li>
      ))}
    </ul>
  );
}
