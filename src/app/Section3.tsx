"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const images = [
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1601823984263-b87b59798b70?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const headers = ["JAPAN", "BRINGS OUT THE", "BEST IN YOU"];

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
      <div className="relative w-full mx-auto aspect-video overflow-hidden">
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
            <div className="overlay absolute top-0 left-0 z-30 bg-black/35 h-full w-full">
              <h1 className="text-8xl text-white z-50 mt-40 ml-9">
                {headers[i]}
              </h1>
            </div>
          </div>
        ))}
        <button
          onClick={nextSlide}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow z-10"
        >
          Next
        </button>
      </div>
    </div>
  );
}
