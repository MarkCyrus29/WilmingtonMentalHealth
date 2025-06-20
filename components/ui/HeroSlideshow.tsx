"use client";
import { useEffect, useState } from "react";
import imageData from "@/constants/images.json";
import ImageParallax from "./Parallax";

export default function HeroSlideshow() {
  const IMAGES: string[] = imageData.IMAGES;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-[calc(100vh-100px)] w-screen">
      {IMAGES.map((src, index) => (
        <ImageParallax
          key={index}
          src={src}
          index={index}
          currentIndex={currentIndex}
          alt={`Hero Image ${index ? index + 1 : ""}`}
        />
      ))}
    </section>
  );
}
