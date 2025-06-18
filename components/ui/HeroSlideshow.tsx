"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { IMAGES } from "@/constants/data";

export default function HeroSlideshow() {
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
        <Parallax
          speed={-30}
          className="absolute inset-0 top-7 -z-10"
          key={index}
        >
          <Image
            src={src}
            alt={`Hero Image ${index + 1}`}
            fill
            className={`object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-xs z-20" />
        </Parallax>
      ))}
    </section>
  );
}
