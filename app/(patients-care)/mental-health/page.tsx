import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import CallBanner from "@/components/ui/CallBanner";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import RelatedServices from "@/components/ui/RelatedServices";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/mental-health/mental-health (2).jpg",
            "/images/mental-health/mental-health (3).jpg",
            "/images/mental-health/mental-health (4).jpg",
            "/images/mental-health/mental-health (1).jpg",
            "/images/mental-health/mental-health (5).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            COMPREHENSIVE CARE
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Mental Health Services
          </h1>
        </div>
      </div>
      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <h1 className="text-center">Mental Health</h1>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Wilmington Mental Health&apos;s holistic and integrative care model is
            implemented by healthcare professionals with extensive training in
            psychology and whose primary purpose is to promote and encourage
            stabilization and healing in our patients. We use a person-centered
            approach to address your emotional and psychological needs and can
            collaborate with other healthcare professions for continuity of
            care.
          </p>
        </div>
      </section>

      {/* ─── Importance Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center ">
            The Importance of Taking Care of Your Mental Health
          </h2>
          <p className="text-center mt-6 text-lg leading-relaxed ">
            Taking care of your mental health is important to your overall
            well-being. Mental health includes emotional, psychological, and
            social well-being. Mental health treatment has the potential to
            impact anyone who is willing to engage in it. Learning how to
            navigate difficult or complex situations will help reduce potential
            symptoms of stress, anxiety, or depression.
          </p>
          <div className="flex justify-around flex-col md:flex-row">
            <ul className="mt-4 ml-4 text-2xl space-y-2 list-disc">
              <li>Reduces stress & anxiety</li>
              <li>Improves emotional resilience</li>
              <li>Learn healthy coping skills</li>
              <li>Feel heard and supported</li>
            </ul>

            <ul className="md:mt-4 ml-4 text-2xl space-y-2 list-disc">
              <li>Work with a counselor</li>
              <li>Develop personal insight</li>
              <li>Build self-awareness</li>
              <li>Enhance overall well-being</li>
            </ul>
          </div>

          <p className="mt-10 text-lg text-center">
            We’re here to listen, support, and guide you—every step of the way.
          </p>
        </div>
      </section>
      {/* ─── Therapy Connection Section ─── */}

      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-10">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/mental-health/mental-health (5).jpg"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl font-bold mb-6">
            Mental Health and Therapy Go Hand-in-Hand
          </h3>
          <p className="max-w-3xl mx-auto md:mx-0 text-lg leading-relaxed text-gray-700">
            Therapy offers a wide range of benefits for mental health and
            emotional well-being, including improved coping skills, stronger
            relationships, and enhanced self-awareness. Here at Wilmington
            Mental Health, we provide a safe space for you to explore your
            emotions, address past traumas, and develop healthier patterns of
            thoughts and behaviors.
          </p>
          <p className="max-w-3xl mx-auto md:mx-0 mt-6 text-lg leading-relaxed text-gray-700">
            Therapy aims to help you identify and change troubling emotions,
            thoughts, and behaviors and to gain relief from symptoms, maintain
            or enhance daily functioning, and improve the quality of your life.
          </p>
        </div>
      </section>
      {/* ─── Benefits Section ─── */}
      <section
        id="benefits"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px] bg-gray-50"
      >
        <div className="w-[85%]">
          <h2>Benefits of Therapy:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 w-full">
            {[
              {
                title: "Reduced symptoms (anxiety, depression, stress)",
                border: "border-blue-500",
                textColor: "text-blue-500",
                icon: 0,
              },
              {
                title: "Enhanced Emotional Regulation",
                border: "border-green-500",
                textColor: "text-green-500",
                icon: 1,
              },
              {
                title: "Increased Self-Awareness",
                border: "border-purple-500",
                textColor: "text-purple-500",
                icon: 2,
              },
              {
                title: "Stronger Coping Skills",
                border: "border-yellow-500",
                textColor: "text-yellow-500",
                icon: 3,
              },
              {
                title: "Resilience Building",
                border: "border-pink-500",
                textColor: "text-pink-500",
                icon: 4,
              },
              {
                title: "Improving Relationships",
                border: "border-rose-500",
                textColor: "text-rose-500",
                icon: 0,
              },
              {
                title: "Better Communication Skills",
                border: "border-teal-500",
                textColor: "text-teal-500",
                icon: 1,
              },
              {
                title: "Increased Self-Confidence",
                border: "border-indigo-500",
                textColor: "text-indigo-500",
                icon: 2,
              },
              {
                title: "Problem-Solving Skills",
                border: "border-fuchsia-500",
                textColor: "text-fuchsia-500",
                icon: 3,
              },
              {
                title: "Stress Management",
                border: "border-orange-500",
                textColor: "text-orange-500",
                icon: 4,
              },
            ].map(({ title, border, textColor, icon }, i) => (
              <HorizontalCard
                key={i}
                kind="benefit"
                border={border}
                textColor={textColor}
                icon={icon}
                title={title}
              />
            ))}
          </div>
        </div>
      </section>
      {/* ─── Video Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%] h-[calc(100vh*0.75)] flex justify-center">
          <div className="h-full flex justify-center aspect-video bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                Video Coming Soon
              </h3>
              <p className="text-gray-600 max-w-md">
                We are working on creating a video to showcase our mental health
                services and approach to care.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ─── Newsletter Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-primary/5">
        <div className="w-[85%] text-center">
          <h2>Stay Connected</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Subscribe to our newsletter to keep up with services offered at
            Wilmington Mental Health and other mental health related content in
            the future.
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border-primary border-2 rounded-xl pl-4"
              />
              <Button title="Subscribe" type="submit" />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Or visit our{" "}
              <Link href="/blog" className="!text-primary hover:underline">
                blog & news page
              </Link>{" "}
              for the latest updates.
            </p>
          </div>
        </div>
      </section>
      {/* ─── Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Services at Wilmington Mental Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Adult Therapy",
                href: "/mental-health/adult-therapy",
              },
              {
                title: "Couples Counseling",
                href: "/mental-health/couples-counseling",
              },
              {
                title: "Group Therapy",
                href: "/mental-health/group-therapy",
              },
              {
                title: "Child & Adolescent Therapy",
                href: "/mental-health/child-therapy",
              },
              {
                title: "LGBTQ+ Counseling",
                href: "/mental-health/lgbtq-counseling",
              },
              {
                title: "Military Counseling",
                href: "/mental-health/military-counseling",
              },
            ].map((service, i) => (
              <RelatedServices
                href={service.href}
                title={service.title}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
      <CallBanner />
    </main>
  );
}

export default page;
