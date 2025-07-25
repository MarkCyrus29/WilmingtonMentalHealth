import React from "react";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assesments | Wilmington Mental Health",
};

function page() {
  return (
    <main className="scroll-smooth">
      <section className="h-full w-full relative">
        <HeroSlideshow
          images={["/images/substance-use/aftercare-treatment (1).jpg"]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Tests & Evaluations
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Assesments
          </h1>
        </div>
      </section>

      <CallBanner />
    </main>
  );
}

export default page;
