"use client";

import { useRef, useState } from "react";
import { cx } from "./ui";

export function CopyLine({ value, display, small = false }: { value: string; display?: React.ReactNode; small?: boolean }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<"idle" | "copied" | "selected">("idle");

  const reset = () => window.setTimeout(() => setState("idle"), 1600);

  const selectText = () => {
    const el = textRef.current;
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    setState("selected");
    reset();
  };

  const copy = () => {
    if (!navigator.clipboard?.writeText) {
      selectText();
      return;
    }
    navigator.clipboard.writeText(value).then(
      () => {
        setState("copied");
        reset();
      },
      selectText,
    );
  };

  return (
    <div className="flex items-center justify-between gap-3 border-b border-sand-line py-[9px]">
      <span
        ref={textRef}
        className={cx("min-w-0 font-semibold tabular-nums select-all wrap-anywhere", small ? "text-base" : "text-[1.12rem]")}
      >
        {display ?? value}
      </span>
      <button
        type="button"
        onClick={copy}
        className={cx(
          "flex-none cursor-pointer rounded-full border px-3 pt-[7px] pb-1.5 text-[0.82rem] leading-none font-semibold tracking-[0.06em]",
          state === "copied"
            ? "border-transparent bg-marigold text-gold-ink"
            : "border-sand-line bg-transparent text-sand hover:border-marigold",
        )}
      >
        {state === "copied" ? "Copied" : state === "selected" ? "Selected" : "Copy"}
      </button>
    </div>
  );
}
