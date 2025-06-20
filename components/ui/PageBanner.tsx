import React from "react";
import ImageParallax from "./Parallax";

interface PageBannerProps {
  imageSrc: string;
  alt?: string;
  title: string;
  subtitle?: string;
}

export default function PageBanner({
  imageSrc,
  alt = "",
  title,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-100px)] w-screen">
      <div className="h-full w-screen relative">
        <ImageParallax src={imageSrc} alt={alt} />
        <div className="absolute top-20 w-screen flex flex-col items-center pt-16 z-30">
          <h4 className="!text-background text-lg">{title}</h4>
          <h1 className="!text-background text-3xl font-bold mt-2">
            {subtitle}
          </h1>
        </div>
      </div>
    </section>
  );
}
