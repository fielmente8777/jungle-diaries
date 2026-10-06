"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/images/jd-logo.png";
import { NAV } from "@/lib/site";
import { cx } from "./ui";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const primary = NAV.filter((n) => n.href !== "/" && n.href !== "/plan-a-trip");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-sand-line bg-forest-deep/95 px-(--gutter) text-sand backdrop-blur-md">
      <div className="mx-auto flex h-[66px] max-w-[1200px] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <Image src={logo} alt="" width={42} height={42} className="size-[42px] flex-none" preload />
          <span className="text-[0.78rem] font-bold tracking-[0.12em] whitespace-nowrap uppercase sm:text-[0.86rem] sm:tracking-[0.2em]">
            Jungle Diaries
          </span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-[clamp(14px,1.8vw,26px)]">
          {primary.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "hidden border-b-2 py-1.5 text-[0.95rem] font-medium no-underline transition-colors lg:inline-block",
                  active ? "border-marigold text-sand" : "border-transparent text-sand-soft hover:text-sand",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/plan-a-trip"
            aria-current={isActive(pathname, "/plan-a-trip") ? "page" : undefined}
            className="hidden rounded-full bg-gold px-[18px] pt-[11px] pb-[9px] text-[0.92rem] leading-none font-semibold text-gold-ink no-underline transition-transform hover:-translate-y-px min-[421px]:inline-flex"
          >
            Plan a trip
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-panel"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-sand-line px-3.5 pt-2.5 pb-[9px] text-[0.92rem] leading-none font-semibold text-sand lg:hidden"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="size-4">
              {open ? <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /> : <path d="M2 4.5h12M2 8h12M2 11.5h12" />}
            </svg>
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </div>

      <div id="menu-panel" hidden={!open} className="mx-auto max-w-[1200px] border-t border-sand-line pt-2.5 pb-[18px] lg:hidden">
        <ul className="grid">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between gap-3 border-b border-sand-line px-0.5 py-[13px] no-underline"
                >
                  <span className={cx("font-display text-[1.45rem] leading-[1.1]", active && "text-marigold")}>
                    {item.label}
                  </span>
                  <span className="text-right text-[0.85rem] text-sand-soft">{item.hint}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
