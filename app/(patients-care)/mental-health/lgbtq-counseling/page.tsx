import React from "react";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import { Heart, Brain } from "lucide-react";
import CallBanner from "@/components/ui/CallBanner";
import RelatedServices from "@/components/ui/RelatedServices";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/patients-care/lgbtq-counseling (3).jpg",
            "/images/patients-care/lgbtq-counseling (4).jpg",
            "/images/patients-care/lgbtq-counseling (1).jpg",
            "/images/patients-care/lgbtq-counseling (2).jpg",
            "/images/patients-care/lgbtq-counseling (5).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">LGBTQIA+</h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            LGBTQIA+ Counseling
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">LGBTQ Counseling</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Wilmington Mental Health provides a safe environment if you identify
            as lesbian, gay, bisexual, transgender, queer, or questioning. Our
            providers affirm your gender and sexual identities and will help you
            explore who you are as a person, to live authentically, embrace your
            true self, and help you find happiness and confidence.
            <br />
            <br />
            You will learn how to improve your mental health, enhance your
            self-esteem, and build stronger relationships. You will be provided
            a safe and supportive space to explore your identity, develop coping
            mechanisms for unique challenges, and build a stronger sense of
            self.
            <br />
            <br />
            We strive to make you feel welcomed, supported, and understood.
          </p>
        </div>
      </section>

      {/* ─── Benefits Section ─── */}
      <section
        id="benefits"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
      >
        <div className="w-[85%]">
          <section
            id="benefits"
            className="h-full w-full flex flex-col items-start scroll-mt-[100px]"
          >
            <h2>Benefits of Counseling:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 w-full">
              {[
                {
                  title: "Develop coping mechanisms",
                  border: "border-blue-500",
                  textColor: "text-blue-500",
                  icon: 0, // Users
                },
                {
                  title: "Stress management",
                  border: "border-green-500",
                  textColor: "text-green-500",
                  icon: 1, // Lightbulb
                },
                {
                  title: "Increase self-esteem",
                  border: "border-purple-500",
                  textColor: "text-purple-500",
                  icon: 2, // Wrench
                },
                {
                  title: "Improve communication skills",
                  border: "border-yellow-500",
                  textColor: "text-yellow-500",
                  icon: 3, // MessageCircle
                },
                {
                  title: "Enhance interpersonal skills",
                  border: "border-pink-500",
                  textColor: "text-pink-500",
                  icon: 4, // TrendingUp
                },
                {
                  title: "Improve mood",
                  border: "border-rose-500",
                  textColor: "text-rose-500",
                  icon: 0, // Users
                },
                {
                  title: "Better emotional regulation",
                  border: "border-teal-500",
                  textColor: "text-teal-500",
                  icon: 1, // Lightbulb
                },
                {
                  title: "Improve resilience",
                  border: "border-indigo-500",
                  textColor: "text-indigo-500",
                  icon: 2, // Wrench
                },
                {
                  title: "Enhance overall mental health",
                  border: "border-fuchsia-500",
                  textColor: "text-fuchsia-500",
                  icon: 4, // TrendingUp
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
          </section>
        </div>
      </section>

      <section
        id="approaches"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
      >
        <div className="w-[85%]">
          <h2 className="text-center">Our Therapy Approaches:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div
              className={`flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-white/90 border-t-4 border-accent `}
            >
              <Heart className={`w-10 h-10 text-accent`} />
              <h4 className="text-xl font-bold text-center">
                Affirmative Therapy:
              </h4>
              <p className="text-sm leading-relaxed text-center">
                We want to validate and affirm your gender or sexual orientation
                rather than trying to change or “fix” it.
                <br />
                <br />
                We work together to accept and embrace your identity, build your
                self-esteem, and develop healthy coping strategies to improve
                your overall mental health.
              </p>
            </div>
            <div
              className={`flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-white/90 border-t-4 border-primary`}
            >
              <Brain className={`w-10 h-10 text-primary`} />
              <h4 className="text-xl font-bold text-center">
                Cognitive Behavioral Therapy (CBT):
              </h4>
              <p className="text-sm leading-relaxed text-center">
                At Wilmington Mental Health, we address negative thinking
                patterns and behaviors that may stem from internalized stigma or
                experiences of discrimination.
                <br />
                <br />
                We work together to help you identify and challenge negative
                thoughts, create healthy coping mechanisms, build
                self-compassion, practice relaxation techniques, and build
                self-esteem.
              </p>
            </div>
          </div>
        </div>
      </section>
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
                title: "Test & Evaluations",
                href: "/tests-evaluations",
              },
              {
                title: "Corporate Wellness",
                href: "/other-services/corporate-wellness",
              },
              {
                title: "Salud Latina",
                href: "/other-services/salud-latina",
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
