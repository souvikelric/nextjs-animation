"use client";
import gsap from "gsap";
export const Section3 = () => {
  let current = 0;
  function swipeRight() {
    const allSlides = document.querySelectorAll(".slide");

    const activeSlide = allSlides[current];
    current = (current + 1) % allSlides.length;
    const nextSlide = allSlides[current];
    console.log(current);

    gsap.set(nextSlide, { zIndex: 1 });

    gsap.set(nextSlide, { clipPath: "inset(0 0 0 100%)" });

    gsap.to(nextSlide, {
      clipPath: "inset(0 0 0 0%)",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        allSlides.forEach((slide, i) => {
          if (i !== current) {
            gsap.set(slide, {
              clipPath: "inset(0 0 0 100%)",
              zIndex: 0,
            });
          }
        });
      },
    });
  }
  return (
    <div className="section h-[100vh] w-[100vw] overflow-hidden bg-blue-500 flex flex-col items-center justify-center">
      <div className="carousel relative h-9/12 w-9/12  ">
        <div className="slide active absolute h-full w-full bg-amber-200"></div>
        <div className="slide inActive absolute h-full w-full bg-cyan-500"></div>
        <div className="slide inActive absolute h-full w-full bg-red-600"></div>
        <div className="slide inActive absolute h-full w-full bg-neutral-700"></div>
      </div>
      <button
        onClick={swipeRight}
        className="p-2.5 px-5 mt-5 bg-purple-800 cursor-pointer text-white rounded"
      >
        Next
      </button>
    </div>
  );
};
