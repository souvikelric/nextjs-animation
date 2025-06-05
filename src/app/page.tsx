"use client";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
