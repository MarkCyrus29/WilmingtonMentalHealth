import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import HeroSlideshow from "@/components/ui/HeroSlideshow";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden h-[calc(100vh-100px)] w-screen flex items-center justify-center">
        <div className="h-full w-full relative">
          <HeroSlideshow />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs z-20" />

          <div className="absolute top-1/2 left-24 -translate-y-1/2 z-30 max-w-2xl text-white">
            <h1 className="!text-white mb-4 ">Welcome to Wilmington</h1>
            <p className="!text-white/80 drop-shadow-sm drop-shadow-white">
              Compassionate mental health and medical care designed for you.
            </p>
          </div>
          <Link href={"/contact"}>
            <Button
              title={"Request Appointment"}
              className={"absolute bottom-32 left-24 z-30"}
            />
          </Link>
        </div>
      </section>

      <section className="h-full w-full py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 ">Integrated Care</h2>
          <p className=" text-lg max-w-3xl mx-auto ">
            We do Whole Person Health. Our diverse team of providers
            collaborates to support both your mental and physical well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 pb-20">
          <Card
            title="Psychotherapy"
            img="https://picsum.photos/1000?1"
            desc="Behavioral health focuses on the connection between behaviors,
              emotions, and overall well-being, addressing mental health and
              substance use concerns through therapy and support."
          />

          <Card
            title="Psychotropics"
            img="https://picsum.photos/1000?2"
            desc="Psychiatry treats mental health disorders through therapy and medications. We offer telepsychiatry consultations to ensure access and convenience."
          />

          <Card
            title="Primary Care"
            img="https://picsum.photos/1000?3"
            desc="Your first point of contact for health. We manage general healthcare, chronic conditions, and provide preventive services—built around whole-body wellness."
          />
        </div>
      </section>
      <section className="w-screen h-auto flex flex-col pb-20 items-center">
        <h2 className="">Why Choose Us?</h2>
        <p className="w-[55%] text-center pb-10">
          At Wilmington Mental Health, we’re on a mission to make care more
          accessible and inclusive. We provide outpatient services for those
          facing chronic illness, substance use, and complex mental health
          conditions—because true stability means caring for both body and mind.
        </p>
        <video
          src="/videos/introductionVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-[75%] h-auto rounded-lg shadow-lg border border-primary/80"
        ></video>
      </section>

      <section className="w-screen h-52  text-center items-center flex flex-col justify-center bg-primary/65 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.18)]">
        <h2 className="!font-normal">
          We offer <strong>In-Person or Virtual visits.</strong>
        </h2>
        <h4 className="!font-normal">
          Ready to make a change? <strong>Call us Today!</strong>
        </h4>
        <p className="font-bold !text-dark/80">910 - 777 - 5575</p>
      </section>

      <section className="w-screen h-auto bg-secondary flex flex-col justify-center pb-10">
        <h1 className="text-center !text-white py-10">Get In Touch</h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-around px-6 md:px-16">
          {/* Map Section */}
          <div className="w-full md:w-[50%] flex justify-center">
            <div className="w-[90%]  bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4">
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
            <div className="w-[90%] bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
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
