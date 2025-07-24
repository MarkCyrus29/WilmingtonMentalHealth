import CallBanner from "@/components/ui/CallBanner";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import Image from "next/image";
import {
  Shield,
  AlertTriangle,
  Search,
  TestTube,
  BookOpen,
  Users,
  Handshake,
  Droplet,
  CheckCircle,
} from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";

function Page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/substance-use/substance-use (1).jpg",
            "/images/substance-use/substance-use (2).jpg",
            "/images/substance-use/substance-use (3).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Recovery & Treatment
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Substance Use Disorders
          </h1>
        </div>
      </div>
      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">Comprehensive Substance Use Treatment</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Substance and process addictions are one of our nation&apos;s major
            problems that affects more than 20 million Americans. At Wilmington
            Mental Health, we are well equipped with our Outpatient Program to
            help individuals from all walks of life find a sober, more
            fulfilling lifestyle.
          </p>
        </div>
      </section>
      {/* ─── Multi-Pronged Approach Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center">Our Multi-Pronged Approach</h2>
          <p className="mt-6 text-lg leading-relaxed text-center mb-10">
            We take a comprehensive approach that includes multiple
            evidence-based treatment components:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Psychoeducation",
                href: "/substance-use/psychoeducation",
              },
              {
                title: "Aftercare Treatment",
                href: "/substance-use/aftercare-treatment",
              },
              {
                title: "Relapse Prevention",
                href: "/substance-use/relapse-prevention",
              },
              {
                title: "Urine Analysis",
                href: "/substance-use/urine-analysis",
              },
            ].map((approach, i) => (
              <RelatedServices
                title={approach.title}
                href={approach.href}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
      {/* ─── Early Intervention Section ─── */}
      <section
        id="early-intervention"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
      >
        <div className="w-[85%]">
          <h2>Early Intervention</h2>
          <p className="mt-6 text-lg leading-relaxed mb-20 text-left">
            Early intervention is crucial for several key reasons and provides
            the foundation for successful recovery:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Prevention of Escalation",
                desc: "Through early intervention and psychoeducation, we can prevent progression of substance abuse disorders.",
                border: "border-primary",
                textColor: "text-primary",
                icon: 1,
              },
              {
                title: "Increase Treatment Effectiveness",
                desc: "Through prompt and targeted treatment, motivation and readiness for change are often higher with proper treatment plans.",
                border: "border-green-500",
                textColor: "text-green-500",
                icon: 4,
              },
              {
                title: "Minimize Health and Social Consequences",
                desc: "Prevent severe health, psychological, and social consequences that result in physical harm, strained relationships, and legal issues.",
                border: "border-purple-500",
                textColor: "text-purple-500",
                icon: 0,
              },
              {
                title: "Identify Underlying Issues",
                desc: "Address co-occurring disorders such as anxiety, depression, bipolar, trauma, and other mental health issues.",
                border: "border-orange-500",
                textColor: "text-orange-500",
                icon: 2,
              },
              {
                title: "Education and Skill Development",
                desc: "Equips you with education about substance abuse, its consequences, available resources, coping skills, and relapse prevention.",
                border: "border-blue-500",
                textColor: "text-blue-500",
                icon: 3,
              },
              {
                title: "Cost Effectiveness",
                desc: "Addressing substance abuse at an early stage can prevent long-standing addiction issues and need for prolonged treatment.",
                border: "border-teal-500",
                textColor: "text-teal-500",
                icon: 4,
              },
            ].map(({ title, desc, border, textColor, icon }, i) => (
              <HorizontalCard
                key={i}
                kind="benefit"
                border={border}
                textColor={textColor}
                icon={icon}
                title={title}
                desc={desc}
              />
            ))}
          </div>
        </div>
      </section>
      {/* ─── Treatment Process Section ─── */}
      <section className="w-full flex flex-col items-center justify-center py-24 bg-gray-50">
        <div className="w-[85%] max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Treatment Process
          </h2>

          {(() => {
            const steps = [
              { label: "Screening", icon: Search },
              { label: "Drug & Alcohol Assessment", icon: TestTube },
              { label: "Psychoeducation", icon: BookOpen },
              { label: "Individual and/or Group Therapy", icon: Users },
              { label: "Support Group Attendance (Optional)", icon: Handshake },
              { label: "Random Drug Screens", icon: Droplet },
              { label: "Discharge", icon: CheckCircle },
            ];

            const bgColors = [
              "bg-blue-400",
              "bg-blue-500",
              "bg-blue-600",
              "bg-blue-700",
              "bg-blue-800",
              "bg-blue-900",
              "bg-blue-950",
            ];

            return (
              <div className="mt-12 flex flex-col gap-10 relative items-center">
                {steps.map(({ label, icon: Icon }, i) => (
                  <div
                    key={label}
                    className="flex items-center justify-center gap-4 relative mb-2"
                  >
                    {/* vertical guide line */}
                    {i < steps.length - 1 && (
                      <div
                        className={`absolute left-1/2 top-10 -translate-x-1/2 h-full w-px ${bgColors[i]}`}
                      />
                    )}

                    {/* icon circle with progressive blue */}
                    <div
                      className={`z-10 w-10 h-10 ${bgColors[i]} text-white rounded-full flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* step label */}
                    <p className="!m-0 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>
      {/* ─── Treatment Goals Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2>Treatment Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-6">
              {[
                "To identify the causes and consequences of substance abuse.",
                "To reduce or eliminate substance use.",
                "To remove illegal and dangerous drugs.",
                "To understand underlying co-occurring mental health issues.",
              ].map((goal, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-lg">{goal}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                "To develop healthy coping techniques.",
                "To connect treatment and recovery with a support network.",
                "To develop new and improved strategies to prevent drug use.",
                "To achieve and maintain meaningful, sustained recovery.",
              ].map((goal, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 5}
                  </div>
                  <p className="text-lg">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ─── Treatment Modalities Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-24 bg-primary/5">
        <div className="w-[85%]">
          <h2 className="text-center">Treatment Modalities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-10">
            {[
              "Seeking Safety",
              "Motivational Interviewing",
              "Cognitive Behavioral Therapy",
              "Dialectical Behavioral Therapy",
              "Rational Emotive Behavior Therapy",
              "Eye Movement Desensitization and Reprocessing",
            ].map((modality, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-foreground">
                  {modality}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── Urine Testing Section ─── */}
      <section id="urine-testing" className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/substance-use/substance-use (4).jpg"
                alt="Wilmington Substance Use Disorders: Urine Testing"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Urine Testing
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p className="mt-6 text-lg leading-relaxed !mb-8">
                Urine specimen collections may be collected during your
                treatment and sent to the lab for testing. We use the results
                to:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Better determine your treatment plan.",
                  "Monitor your progress and adherence to treatment.",
                  "Identify needs for further assessment and substance abuse treatment.",
                  "Better coordinate your care.",
                ].map((purpose, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4  bg-gray-50 rounded-xl"
                  >
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Concerned About Someone Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-orange-50 border-l-4 border-orange-500">
        <div className="w-[85%]">
          <div className="flex items-start gap-6">
            <AlertTriangle className="w-12 h-12 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-orange-800">
                Concerned About Someone You Know?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-orange-700">
                You can always start a conversation about mental health to make
                them aware of treatment alternatives and how professionals can
                offer support and assistance. Although you may not necessarily
                convince them to seek treatment at this time, it can make them
                aware that you are concerned and that they can count on you.
              </p>
              <div className="mt-6 p-4 bg-white rounded-lg border border-orange-200">
                <p className="text-lg font-semibold text-orange-800 mb-2">
                  Emergency Resources:
                </p>
                <p className="text-orange-700">
                  Please call the National Suicide Prevention Lifeline at{" "}
                  <a
                    href="tel:988"
                    className="font-bold text-orange-600 hover:underline"
                  >
                    9-8-8
                  </a>{" "}
                  or dial{" "}
                  <a
                    href="tel:911"
                    className="font-bold text-orange-600 hover:underline"
                  >
                    9-1-1
                  </a>{" "}
                  for emergencies or immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ─── Other Services Section ─── */}
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
                title: "Substance Use Disorders",
                href: "/substance-use",
              },
              {
                title: "Psychoeducation",
                href: "/substance-use/psychoeducation",
              },
              {
                title: "Test & Evaluations",
                href: "/tests-evaluations",
              },
              {
                title: "Salud Latina",
                href: "/other-services/salud-latina",
              },
              {
                title: "Couples Counseling",
                href: "/mental-health/couples-counseling",
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

export default Page;
