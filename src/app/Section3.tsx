"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const images = [
  "https://images.unsplash.com/photo-1731410612759-d93cede4edbc?q=80&w=3087&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1731332066050-47efac6e884f?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629129281524-b1e1a1a099d2?q=80&w=3087&auto=format&fit=crop",
];

export default function Section3() {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set initial state for all slides except the first
    slidesRef?.current.forEach((el, i) => {
      gsap.set(el, {
        clipPath: i === 0 ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
        zIndex: i === 0 ? 1 : 0,
      });
    });
  }, []);

  const nextSlide = () => {
    const currentSlide = slidesRef.current[current];
    const nextIndex = (current + 1) % images.length;
    const nextSlide = slidesRef.current[nextIndex];

    gsap.set(nextSlide, { clipPath: "inset(0 0 0 100%)", zIndex: 2 });

    gsap.to(nextSlide, {
      clipPath: "inset(0 0 0 0%)",
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Reset z-index and hide others
        slidesRef.current.forEach((slide: gsap.TweenTarget, i: number) => {
          gsap.set(slide, {
            zIndex: i === nextIndex ? 1 : 0,
            clipPath: i === nextIndex ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
          });
        });
        setCurrent(nextIndex);
      },
    });
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="relative w-[90vw] max-w-5xl aspect-video mx-auto overflow-hidden">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              slidesRef.current[i] = el;
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover block"
            />
          </div>
        ))}
        <button
          onClick={nextSlide}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow z-10"
        >
          Next
        </button>
      </div>
    </div>
  );
}
