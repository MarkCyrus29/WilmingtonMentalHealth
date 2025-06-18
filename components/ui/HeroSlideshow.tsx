"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const images = [
  "https://picsum.photos/id/1011/2000/1200",
  "https://picsum.photos/id/1015/2000/1200",
  "https://picsum.photos/id/1021/2000/1200",
  "https://picsum.photos/id/1035/2000/1200",
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-[calc(100vh-100px)] w-screen">
      {images.map((src, index) => (
        <Parallax
          speed={-30}
          className="absolute inset-0 top-8 -z-10"
          key={index}
        >
          <Image
            src={src}
            alt={`Hero ${index + 1}`}
            fill
            className={`object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            priority={index === 0}
          />
        </Parallax>
      ))}
    </section>
  );
}
