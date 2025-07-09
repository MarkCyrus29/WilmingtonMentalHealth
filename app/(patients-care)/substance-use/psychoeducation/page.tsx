import CallBanner from "@/components/ui/CallBanner";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { Users, BookOpen } from "lucide-react";
import Image from "next/image";
import RelatedServices from "@/components/ui/RelatedServices";

function Page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/substance-use/psychoeducation (2).jpg",
            "/images/substance-use/psychoeducation (3).jpg",
          ]}
        />
        <div className="absolute  top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Recovery Education
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Psychoeducation
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 mb-0 ">
        <div className="w-[85%]">
          <h2 className="text-center">Psychoeducation</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Drug and alcohol psychoeducation is a synonym of empowerment. It
            promotes recovery and gives our patients knowledge, makes them aware
            of risks and consequences of using illicit drugs, and continuing to
            engage in repetitive, maladaptive behaviors. Psychoeducation
            material is presented with a structured framework via lectures,
            videos, reading, or audio recordings.
          </p>
        </div>
      </section>

      {/* ─── Our Approach Section ─── */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/substance-use/psychoeducation (1).jpg"
                alt="Wilmington Substance Use Disorders: Psychoeducation"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Educational Approach
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We use a variety of methods to help you achieve sobriety,
                reinforce your efforts to stay sober, or learn healthy ways to
                manage your substance use. One of those approaches combines
                teaching and Cognitive Behavioral Therapy to create awareness
                and instill motivation to seek treatment or find support.
                Psychoeducation is an essential treatment ingredient that often
                leads to meaningful conversations and long-lasting positive
                changes. At Wilmington Mental Health, we are passionate about
                engaging you in lectures that you can apply to your recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Components Section ─── */}
      <section
        id="approaches"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
      >
        <div className="w-[85%]">
          <h2 className="text-center">Key Concepts:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div
              className={`flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-white/90 border-t-4 border-accent`}
            >
              <Users className={`w-10 h-10 text-accent`} />
              <h3 className="text-xl font-bold text-center">
                Insightful Conversations in Psychoeducation:
              </h3>
              <p className="text-sm leading-relaxed text-center">
                Our therapists initiate meaningful conversations that foster
                self-awareness and highlight your strengths. These talks often
                mark the beginning of recovery, sparking motivation and a desire
                for change. We may also invite family members to join sessions,
                offering additional support and understanding along your
                journey.
              </p>
            </div>

            <div
              className={`flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-white/90 border-t-4 border-primary`}
            >
              <BookOpen className={`w-10 h-10 text-primary`} />
              <h3 className="text-xl font-bold text-center">
                Self-Understanding:
              </h3>
              <p className="text-sm leading-relaxed text-center">
                Early in recovery, you’ll gain insight into how your thoughts,
                feelings, and actions are connected. We help you identify
                patterns, explore past challenges, and learn healthier coping
                strategies to support long-term change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple Language + Open Discussions = De-Stigmatization
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              After your initial assessment, which determines the most
              appropriate level of care you must be placed on, we schedule
              structured therapy sessions and encourage you to participate in
              self-help or mutual support groups (e.g., AA, SMART Recovery,
              etc.). We may also conduct random drug screens to help you develop
              accountability.
              <br />
              <br /> Our treatment method can provide immediate solutions or
              just another failed attempt to achieve the life you want. We want
              you to see how using substance(s) impacts your life and is getting
              in the middle of you and your goals.
            </p>
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
                title: "Substance Use Disorders",
                href: "/substance-use",
              },
              {
                title: "Health Services",
                href: "/health-services",
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

export default Page;
