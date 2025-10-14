"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function NewsGallery({ images = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const openAt = (i) => {
    setIndex(i);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const goNext = () => setIndex((p) => (p + 1) % images.length);
  const goPrev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  // keyboard support
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // touch swipe for modal
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    if (start == null) return;
    const end = e.changedTouches[0].clientX;
    const delta = end - start;
    if (Math.abs(delta) > 40) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => openAt(i)}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
            aria-label="Open image in gallery"
          >
            <Image src={src} alt="Gallery image" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-auto"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image src={images[index]} alt="Large view" fill className="object-contain" sizes="100vw" />

            {/* Controls */}
            <button
              onClick={close}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <button
              onClick={goPrev}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={goNext}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
              aria-label="Next"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 rounded-full px-3 py-1">
              {index + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
