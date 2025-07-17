import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import Image from "next/image";
import CallBanner from "@/components/ui/CallBanner";
import HeroButtons from "@/components/ui/HeroButtons";

export default function Home() {
  const commonInsurances = [
    "BlueCross Blueshield",
    "Cigna",
    "Aetena",
    "HealthyBlue",
    "WellCare",
    "AmeriHealth Caritas",
    "UnitedHealthCare Community Plan",
    "Carolina Complete Health",
    "AmBetter",
    "Medcost",
    "Caresource",
    "ChampVA",
    "Meritain Health",
    "Carolina Behavioral Health Alliance",
    "North Carolina State Health Plan",
  ];

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
      <div className="w-screen h-auto py-10 pb-12 text-center items-center flex flex-col justify-center bg-primary/65 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] border-t border-t-[rgba(255,255,255,0.18)]">
        <div className="w-[75%] flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 !text-background">
            Find a Provider
          </h2>
          <form className="w-full flex flex-col sm:flex-row items-center gap-4 flex-wrap">
            {/* Name Search */}
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by name"
                className="w-full px-12 py-3 rounded-lg border border-background placeholder:text-background font-semibold focus:ring-2 focus:ring-primary focus:outline-none text-base text-background"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </span>
            </div>

            {/* Specialty Dropdown + Search */}
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                list="specialties"
                placeholder="Search by specialty"
                className="w-full px-12 py-3 rounded-lg border border-background placeholder:text-background font-semibold focus:ring-2 focus:ring-primary focus:outline-none text-base text-background"
              />
              <datalist id="specialties">
                <option value="Psychologist" />
                <option value="Psychiatrist" />
                <option value="Therapist" />
                <option value="Counselor" />
                <option value="Social Worker" />
              </datalist>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                🧠
              </span>
            </div>

            {/* Insurance Dropdown + Search */}
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                list="insurances"
                placeholder="Search by insurance"
                className="w-full px-12 py-3 rounded-lg border border-background
               placeholder:text-background font-semibold
               focus:ring-2 focus:ring-primary focus:outline-none
               text-base text-background"
              />

              <datalist id="insurances" className="bg-background text-dark">
                {commonInsurances.map((ins) => (
                  <option key={ins} value={ins} />
                ))}
              </datalist>

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                💳
              </span>
            </div>

            {/* Submit Button */}
            <Button title="Search" type="submit" className="py-2 px-4" />
          </form>
        </div>
      </div>

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

      {/* GET IN TOUCH SECTION */}
      <section className="w-screen h-auto bg-secondary flex flex-col justify-center py-24">
        <h1 className="text-center pb-10">Get In Touch</h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-around px-6 md:px-16">
          {/* Map Section */}
          <div className="w-full md:w-[50%] flex justify-center">
            <div className="w-[90%] bg-background rounded-xl shadow-lg p-6 flex flex-col items-center gap-4">
              <h2 className="text-xl font-semibold text-slate-800">
                Find Us on the Map
              </h2>
              <p className="text-sm text-slate-600 text-center">
                Our Wilmington clinic is easy to find. Stop by or plan your
                visit using the map below.
              </p>
              <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.0811549253938!2d-77.8988823152866!3d34.241953429701915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f5fa7433afd9%3A0xef323e99178d1274!2sWilmington%20Mental%20Health%2C%20PLLC!5e0!3m2!1sen!2sjp!4v1749665586838!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="w-full md:w-[50%] flex justify-center">
            <div className="w-[90%] bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-slate-800 text-center">
                Stay Updated
              </h2>
              <p className="text-sm text-slate-600 text-center">
                Sign up with your email to receive the latest updates and
                announcements.
              </p>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <Button
                  title={"Subscribe"}
                  type={"submit"}
                  className="bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
