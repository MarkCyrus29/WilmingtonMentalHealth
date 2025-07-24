import Card from "@/components/ui/Card";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import Image from "next/image";
import HeroButtons from "@/components/ui/HeroButtons";
import ProviderSearch from "@/components/ui/FindAProvider";
import CallBanner from "@/components/ui/CallBanner";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden h-[calc(100vh-100px)] w-screen flex items-center justify-center">
        <div className="h-full w-full relative">
          <HeroSlideshow
            images={[
              "/images/home/slideshow-images/hero1.JPG",
              "/images/home/slideshow-images/hero2.JPG",
              "/images/home/slideshow-images/hero3.JPG",
              "/images/home/slideshow-images/hero4.JPG",
              "/images/home/slideshow-images/hero5.JPG",
            ]}
          />

          {/* Text */}
          <div className="absolute z-30 max-w-2xl text-white left-6 right-6 top-1/2 -translate-y-1/2 md:left-24 md:right-auto text-center md:text-left">
            <h1 className="!text-white text-3xl sm:text-4xl md:text-5xl mb-4">
              Welcome to Wilmington
            </h1>
            <p className="!text-white/80 text-base sm:text-lg">
              Compassionate mental health care designed for you.
            </p>
          </div>

          {/* Buttons */}
          <HeroButtons />
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-10">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/home/slideshow-images/hero1.JPG"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="max-w-3xl mx-auto md:mx-0 text-lg leading-relaxed text-gray-700">
            Wilmington Mental Health’s mission is to create more access to care
            to help you and your community. We offer outpatient services to help
            care for those who are struggling with chronic illness, medical
            conditions, substance use disorders, complex mental illness, and
            most mental health disorders.
          </p>
          <p className="max-w-3xl mx-auto md:mx-0 mt-6 text-lg leading-relaxed text-gray-700">
            We want you to achieve stability at any stage in your life. With our
            diverse team of providers, we work to address your concerns and help
            ensure that you are provided with resources to reach your goals.
          </p>
        </div>
      </section>

      {/* INTEGRATED CARE SECTION */}
      <ProviderSearch />

      <section className="w-full py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Our Approach to Care
        </h2>
        <div className="flex flex-col md:flex-row md:items-stretch justify-center items-center gap-10 px-4 sm:px-6 md:px-12 lg:px-24">
          <Card
            title="Mental Health"
            img="/images/home/mental-health.jpg"
            desc="Wilmington Mental Health offers a range of services to provide you with the utmost care. We address mental health, substance use, behaviors, and emotions through therapy, support, and interventions."
          />
          <Card
            title="Interdisciplinary Care"
            img="/images/home/integrated-care.jpg"
            desc="Wilmington Mental Health aims to establish whole-person care and support that considers emotional, social, and physical well-being."
          />
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="w-screen h-auto flex flex-col pt-12 pb-24 items-center">
        <h2 className="pb-8">Why Choose Us?</h2>
        <video
          src="/videos/introductionVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-[75%] h-auto rounded-lg shadow-lg border border-primary/80"
        ></video>
      </section>

      {/* CTA SECTION */}
      <CallBanner />
    </>
  );
}
