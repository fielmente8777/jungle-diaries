import type { ReactNode } from "react";
import type { Review } from "@/lib/reviews";
import { Container, cx, Eyebrow, Section, TextLink } from "./ui";

function Stars() {
  return (
    <span aria-hidden="true" className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-4">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8z" />
        </svg>
      ))}
    </span>
  );
}

type ReviewsProps = {
  reviews: Review[];
  title: string;
  eyebrow?: string;
  intro?: ReactNode;
  rating?: { score: string; source: string };
  more?: { href: string; label: string };
  tone?: "paper" | "paper-2";
  id?: string;
};

export function Reviews({
  reviews,
  title,
  eyebrow = "Guest reviews",
  intro,
  rating,
  more,
  tone = "paper",
  id = "reviews",
}: ReviewsProps) {
  const titleId = `${id}-title`;
  return (
    <Section tone={tone} id={id} aria-labelledby={titleId}>
      <Container>
        <div className="mb-[clamp(28px,4vw,44px)] flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id={titleId} className="max-w-[16ch] text-h2">
              {title}
            </h2>
            {intro && <p className="mt-4 max-w-[52ch] text-lead text-(--soft)">{intro}</p>}
          </div>
          {rating && (
            <div className="flex items-center gap-3.5 rounded-card border border-(--rule) px-4 py-3">
              <span className="font-display text-[2.4rem] leading-none tabular-nums">{rating.score}</span>
              <span className="flex flex-col gap-1">
                <Stars />
                <span className="text-label font-semibold tracking-[0.12em] text-(--soft) uppercase">
                  Rated on {rating.source}
                </span>
              </span>
              <span className="sr-only">
                Rated {rating.score} out of 5 on {rating.source}
              </span>
            </div>
          )}
        </div>

        <ul
          className={cx(
            "mx-[calc(var(--gutter)*-1)] flex snap-x snap-mandatory scroll-px-(--gutter) gap-4 overflow-x-auto px-(--gutter) pb-2 [scrollbar-width:thin]",
            "sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-[clamp(16px,2vw,24px)] sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3",
          )}
        >
          {reviews.map((r) => (
            <li key={r.name} className="w-[84%] max-w-[360px] flex-none snap-start sm:w-auto sm:max-w-none">
              <figure className="m-0 flex h-full flex-col rounded-card border border-(--rule) bg-paper p-[clamp(20px,2.4vw,28px)]">
                <span aria-hidden="true" className="font-display text-[3.4rem] leading-[0.7] text-gold">
                  &ldquo;
                </span>
                <blockquote className="m-0 mt-3 mb-5 text-[1.08rem] leading-[1.55]">{r.quote}</blockquote>
                <figcaption className="mt-auto border-t border-(--rule) pt-4">
                  <span className="block font-display text-[1.3rem] leading-[1.15]">{r.name}</span>
                  <span className="mt-1 block text-label font-semibold tracking-[0.12em] text-(--soft) uppercase">
                    {r.party} · {r.from}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {more && (
          <div className="mt-[clamp(24px,3vw,36px)]">
            <TextLink href={more.href}>{more.label}</TextLink>
          </div>
        )}
      </Container>
    </Section>
  );
}
