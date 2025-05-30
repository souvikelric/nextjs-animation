"use client";
import Image from "next/image";
import { SplitAnimate } from "./SplitAnimate";
import { Fragment } from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Section1 />
      <Section2 />
    </div>
  );
}
