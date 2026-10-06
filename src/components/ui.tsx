import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Tone = "paper" | "paper-2" | "forest" | "deep";

const toneClass: Record<Tone, string> = {
  paper: "tone-paper",
  "paper-2": "tone-paper-2",
  forest: "tone-forest",
  deep: "tone-deep",
};

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1200px]", className)}>{children}</div>;
}

export function Section({
  tone = "paper",
  tight = false,
  className,
  children,
  ...rest
}: { tone?: Tone; tight?: boolean } & ComponentProps<"section">) {
  return (
    <section
      className={cx(
        toneClass[tone],
        "px-(--gutter)",
        tight ? "py-[clamp(48px,6vw,80px)]" : "py-[clamp(64px,9vw,120px)]",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <p
      id={id}
      className={cx(
        "mb-[18px] flex items-center gap-2.5 text-label font-semibold tracking-[0.16em] text-(--soft) uppercase",
        "before:h-px before:w-[26px] before:flex-none before:bg-current before:opacity-60 before:content-['']",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cx("inline-block -rotate-2 font-hand text-[1.2rem] leading-[1.3] text-(--mark)", className)}>
      {children}
    </span>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("max-w-[60ch] text-lead text-(--soft)", className)}>{children}</p>;
}

export function H2({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <h2 id={id} className={cx("text-h2", className)}>
      {children}
    </h2>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cx(
        "mb-3.5 font-sans text-label font-semibold tracking-[0.14em] text-(--soft) uppercase",
        className,
      )}
    >
      {children}
    </h2>
  );
}

type ButtonProps = {
  href: string;
  variant?: "gold" | "ghost";
  external?: boolean;
  className?: string;
  children: ReactNode;
};

const buttonBase =
  "inline-flex items-center gap-2.5 rounded-full border-[1.5px] px-[22px] pt-[15px] pb-[13px] text-base leading-none font-semibold tracking-[0.02em] no-underline transition-transform duration-200 hover:-translate-y-px";

export function Button({ href, variant = "gold", external, className, children }: ButtonProps) {
  const look =
    variant === "gold" ? "border-transparent bg-gold text-gold-ink" : "border-current bg-transparent text-inherit";
  const cls = cx(buttonBase, look, className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = cx(
    "border-b-[1.5px] border-gold pb-px font-semibold no-underline transition-[border-width] hover:border-b-[3px]",
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children} <span aria-hidden="true">↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Ticks({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cx("grid gap-[9px]", className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-[22px] leading-[1.45] before:absolute before:top-[0.55em] before:left-0.5 before:size-2 before:rounded-full before:bg-(--dot) before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function WhatsAppIcon({ className = "size-[18px] flex-none" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1 2.7 11.5 11.5 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3z" />
    </svg>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
