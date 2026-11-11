"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GALLERY_ITEMS, type GalleryCategory, type GalleryItem } from "@/lib/gallery-data";
import { cx } from "./ui";

const TABS: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All Images" },
  { id: "amaltas", label: "Amaltas Villa" },
  { id: "destinn", label: "Destinn Dhela Retreat" },
];

export function GalleryView() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("all");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeTab === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const activeImage = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  const handlePrev = useCallback(() => {
    setSelectedIdx((curr) => {
      if (curr === null) return null;
      return curr === 0 ? filteredItems.length - 1 : curr - 1;
    });
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setSelectedIdx((curr) => {
      if (curr === null) return null;
      return curr === filteredItems.length - 1 ? 0 : curr + 1;
    });
  }, [filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handleClose, handlePrev, handleNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll thumbnails when active image changes
  useEffect(() => {
    if (thumbnailsRef.current && selectedIdx !== null) {
      const activeThumb = thumbnailsRef.current.children[selectedIdx] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [selectedIdx]);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedIdx(null);
              }}
              className={cx(
                "inline-flex cursor-pointer items-center rounded-full px-5 py-2.5 text-[0.92rem] font-medium tracking-[0.02em] transition-all duration-200",
                isActive
                  ? "bg-gold text-gold-ink font-semibold shadow-xs"
                  : "border border-line bg-paper/60 text-ink hover:border-gold/60 hover:bg-paper-2 hover:text-ink",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIdx(index)}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-line/40 bg-forest-deep/10 shadow-xs"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Property name badge at top */}
              <div className="pointer-events-none absolute top-3 left-3 z-10">
                <span className="inline-flex items-center rounded-full bg-forest-deep/85 px-3 py-1 text-[0.74rem] font-semibold tracking-wider text-sand uppercase shadow-xs backdrop-blur-xs">
                  {item.property}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal (matching reference) */}
      {activeImage && selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-3 sm:p-5 backdrop-blur-md animate-rise select-none"
          onClick={handleClose}
        >
          {/* Top Bar: Counter & Close button */}
          <div className="z-20 flex w-full max-w-[1240px] mx-auto items-center justify-between pt-1 pb-2">
            <span className="rounded-md bg-white/10 px-3 py-1 font-mono text-xs sm:text-sm font-medium tracking-wider text-white/90 backdrop-blur-xs">
              {selectedIdx + 1} / {filteredItems.length}
            </span>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="flex size-9 sm:size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/90 transition-all hover:bg-white/25 hover:text-white hover:scale-105"
            >
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Middle: Left/Right arrows & Main Image */}
          <div className="relative my-2 flex flex-1 items-center justify-center w-full min-h-0">
            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-20 flex size-10 sm:size-12 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-lg ring-1 ring-white/15 transition-all hover:scale-105 hover:bg-black/90"
            >
              <svg className="size-5 sm:size-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-20 flex size-10 sm:size-12 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-lg ring-1 ring-white/15 transition-all hover:scale-105 hover:bg-black/90"
            >
              <svg className="size-5 sm:size-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Centered Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative h-full w-full max-h-[66vh] sm:max-h-[72vh] max-w-[1100px] flex items-center justify-center"
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                sizes="(min-width: 1200px) 1100px, 95vw"
                className="object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom Thumbnail Strip (compact centered window matching reference) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="z-20 w-full max-w-[500px] sm:max-w-[560px] mx-auto px-4 pt-1 pb-1"
          >
            <div
              ref={thumbnailsRef}
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 px-1 justify-start scrollbar-none"
            >
              {filteredItems.map((item, idx) => {
                const isActive = idx === selectedIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    aria-label={`View photo ${idx + 1}`}
                    className={cx(
                      "relative flex-none h-8 w-11 sm:h-9 sm:w-13 overflow-hidden rounded cursor-pointer transition-all duration-200",
                      isActive
                        ? "ring-2 ring-white scale-105 opacity-100 z-10"
                        : "opacity-40 hover:opacity-85 ring-1 ring-white/15",
                    )}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="52px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA block */}
      <div className="mt-20 rounded-card border border-sand-line bg-forest-deep p-8 sm:p-12 text-center text-sand">
        <span className="font-hand text-[1.4rem] sm:text-[1.6rem] text-marigold">
          A stay crafted around nature & silence
        </span>
        <h3 className="mt-2 font-display text-[clamp(1.8rem,1.4rem+1.5vw,2.6rem)] text-sand">
          Plan your Corbett getaway with us
        </h3>
        <p className="mx-auto mt-3 max-w-[54ch] text-small sm:text-body text-sand-soft">
          Whether you choose the intimate sanctuary of Amaltas Villa or the rooftop pool vistas of Destinn Dhela Retreat, we are here to craft your journey.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/plan-a-trip"
            className="inline-flex rounded-full bg-gold px-7 py-3 text-[0.95rem] font-semibold text-gold-ink transition-transform hover:-translate-y-0.5"
          >
            Plan a trip
          </Link>
          <Link
            href="/amaltas-villa"
            className="inline-flex rounded-full border border-sand-line px-6 py-2.5 text-[0.92rem] font-medium text-sand transition-colors hover:bg-forest hover:text-sand"
          >
            Explore Amaltas Villa
          </Link>
          <Link
            href="/destinn-dhela-retreat"
            className="inline-flex rounded-full border border-sand-line px-6 py-2.5 text-[0.92rem] font-medium text-sand transition-colors hover:bg-forest hover:text-sand"
          >
            Explore Destinn Dhela
          </Link>
        </div>
      </div>
    </div>
  );
}

