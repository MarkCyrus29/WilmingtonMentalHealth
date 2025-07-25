import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import CallBanner from "@/components/ui/CallBanner";
import Image from "next/image";
import {
  FileText,
  Calendar,
  BookOpen,
  Shield,
  Target,
  Users,
  Heart,
  CheckCircle,
} from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relapse Prevention | Wilmington Mental Health",
  description:
    "Build a personalized relapse prevention plan at Wilmington Mental Health. Learn CBT-based coping tools, identify triggers and high-risk situations, and establish a support roadmap to maintain lasting recovery.",
};

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/substance-use/relapse-prevention (3).jpg",
            "/images/substance-use/relapse-prevention (4).jpg",
            "/images/substance-use/relapse-prevention (1).jpg",
            "/images/substance-use/relapse-prevention (2).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Substance Use Disorders
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Relapse Prevention
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center mt-26 mb-10">
        <div className="w-[85%]">
          <h2 className="text-center">Relapse Prevention</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Creating a relapse prevention plan is crucial for those recovering
            from substance abuse. It takes a preventative approach to provide
            support in times of distress and couple, help develop healthy
            lifestyles, and be a powerful source of stabilization. The primary
            goal of relapse prevention treatment is to identify high-risk
            situations that will make you vulnerable to relapse.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center">
            Our therapists use Cognitive Behavioral Therapy (CBT) to teach you
            coping strategies to prevent future relapses and how to anticipate
            scenarios that may trigger your addictive behavior.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pb-26 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/substance-use/relapse-prevention (1).jpg"
                alt="Wilmington Mental Health Relapse Prevention"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className=" ">Our Treatment Approach</h2>
            <p className="mt-6 text-lg leading-relaxed ">
              During relapse prevention treatment, you will learn skills to cope
              with internal and external triggers and identify contributing
              factors that make a relapse more likely to occur.
            </p>

            <div className="mt-8 max-w-4xl mx-auto">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Learn to identify high-risk situations that make you
                    vulnerable to relapse
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Develop coping strategies using Cognitive Behavioral Therapy
                    (CBT) techniques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Learn to anticipate scenarios that may trigger addictive
                    behavior
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Identify contributing factors that increase relapse
                    likelihood
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-blue-50 rounded-xl p-6 py-10 w-full text-center">
          <p className="text-blue-700 text-lg">
            <strong>Important:</strong> Designing a relapse prevention plan with
            your therapist is fundamental during aftercare, therefore; it is
            important that communication exists between you and your therapist.
          </p>
        </div>
      </section>

      {/* ─── The Plan Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-center">The Plan</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            A written personal recovery plan is a detailed plan of action to
            help identify self-care strategies, potential signs of relapse,
            people you will reach out to during difficult times, and techniques
            that you can use to deal with urges and cravings.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Relapse Prevention Plan Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Your goals and motivation to stay in recovery",
                  icon: Target,
                  color: "blue",
                },
                {
                  title: "Your challenges",
                  icon: Shield,
                  color: "pink",
                },
                {
                  title: "Your coping skills and strategies",
                  icon: CheckCircle,
                  color: "green",
                },
                {
                  title: "Your support system",
                  icon: Users,
                  color: "blue",
                },
                {
                  title: "The consequences of relapsing",
                  icon: FileText,
                  color: "pink",
                },
                {
                  title: "How to remain accountable",
                  icon: CheckCircle,
                  color: "green",
                },
                {
                  title: "'I am grateful for'",
                  icon: Heart,
                  color: "blue",
                },
                {
                  title: "Ways to improve self-care and avoid relapse",
                  icon: Heart,
                  color: "pink",
                },
              ].map((component, i) => {
                const IconComponent = component.icon;
                const colorClasses = {
                  blue: "border-blue-500 bg-blue-50 text-blue-600",
                  pink: "border-pink-500 bg-pink-50 text-pink-600",
                  green: "border-green-500 bg-green-50 text-green-600",
                };
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border-l-4 ${
                      colorClasses[component.color as keyof typeof colorClasses]
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <IconComponent className="w-6 h-6 flex-shrink-0 mt-1" />
                      <p className="font-medium text-sm leading-relaxed">
                        {component.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Program Details Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Length</h4>
              <p className="text-gray-600">Minimum of 12 consecutive weeks</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-500 text-center">
              <CheckCircle className="w-10 h-10 text-pink-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Absences</h4>
              <p className="text-gray-600">Only 2 absences are allowed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 text-center">
              <BookOpen className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Materials</h4>
              <p className="text-gray-600">
                Books and handouts will be provided
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Accountability Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[90%]">
          <h2 className="text-center">Developing Accountability</h2>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Relapse during and after addiction treatment is highly likely.
            Therefore, we collect urine specimens during your treatment and send
            them off to the lab for testing. The results will be used as
            information on drug use and to better support your recovery journey.
          </p>

          <div className="mt-10 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Testing Purposes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Better determine your treatment plan",
                  border: "border-blue-500",
                  textColor: "text-blue-500",
                  icon: 0,
                },
                {
                  title: "Monitor your progress and adherence to treatment",
                  border: "border-green-500",
                  textColor: "text-green-500",
                  icon: 1,
                },
                {
                  title:
                    "Identify needs for further assessment and substance abuse treatment",
                  border: "border-purple-500",
                  textColor: "text-purple-500",
                  icon: 2,
                },
                {
                  title: "Better coordinate your care",
                  border: "border-orange-500",
                  textColor: "text-orange-500",
                  icon: 3,
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

          <div className="mt-8 bg-yellow-50 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Testing Schedule
              </h4>
              <p className="text-yellow-700">
                Collection usually occurs during your initial visit and serves
                as baseline data. Your therapist will determine how often
                samples are collected based on your individual treatment plan.
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
                title: "Health Services",
                href: "/health-services",
              },
              {
                title: "Test & Evaluations",
                href: "#",
              },
              {
                title: "Salud Latina",
                href: "#",
              },
            ].map((service, i) => (
              <RelatedServices
                key={i}
                href={service.href}
                title={service.title}
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
