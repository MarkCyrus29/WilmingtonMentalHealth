import CallBanner from "@/components/ui/CallBanner";
import { Users, Calendar } from "lucide-react";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Therapy | Wilmington Mental Health",
  description:
    "Discover the benefits of expert-led group therapy at Wilmington Mental Health. Share experiences, gain coping strategies, and join supportive sessions. Book now.",
  keywords: [
    "group therapy",
    "mental health support groups",
    "group counseling",
    "therapy sessions",
    "coping strategies",
    "peer support therapy",
    "Wilmington group therapy",
    "emotional wellness groups",
    "guided therapy sessions",
    "mental health treatment Wilmington",
  ],
};


function Page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/patients-care/group-therapy (1).jpg",
            "/images/patients-care/group-therapy (2).jpg",
            "/images/patients-care/group-therapy (3).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Mental Health
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Group Therapy
          </h1>
        </div>
      </div>
      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">Group Therapy</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Group therapy encourages individuals to come together in a group to
            discuss particular issues together. Providers observe the group
            dynamic closely noting how the group interacts with one another,
            give feedback regarding their reactions (e.g., behaviors and words),
            and learn how to address their issues and concerns with others.
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
            <div className="w-full flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex-1/2">
                <h2>Benefits of Group Therapy</h2>
                <span className="flex flex-row items-center">
                  <Users className="h-8 w-8 text-primary mr-2" />
                  <h4 className="!text-primary">Therapeutic Advantages</h4>
                </span>
                <h3 className="mt-10 mb-5 text-left">
                  How Group Therapy Helps
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  Group therapy offers unique therapeutic benefits that
                  individual therapy alone cannot provide. By participating in a
                  supportive group environment, you&apos;ll experience healing
                  through shared experiences and mutual support.
                </p>
              </div>
              <div className="flex-1/2">
                <div className="relative w-full h-full flex-shrink-0">
                  <Image
                    src={"/images/patients-care/group-therapy.jpg"}
                    alt={"Group Therapy Image"}
                    fill
                    className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              {[
                {
                  title: "Reducing the feeling of isolation",
                  desc: "Connect with others who share similar experiences and feel less alone.",
                  border: "border-primary",
                  textColor: "text-primary",
                  icon: 0, // Users
                },
                {
                  title: "Gain New Perspectives",
                  desc: "Hear diverse viewpoints that broaden your understanding of challenges.",
                  border: "border-green-500",
                  textColor: "text-green-500",
                  icon: 1, // Lightbulb
                },
                {
                  title: "Develop new coping strategies",
                  desc: "Learn practical skills members have found helpful in real life.",
                  border: "border-purple-500",
                  textColor: "text-purple-500",
                  icon: 2, // Wrench
                },
                {
                  title: "Enhance communication & interpersonal skills",
                  desc: "Practice healthy expression, active listening, and feedback in a safe space.",
                  border: "border-orange-500",
                  textColor: "text-orange-500",
                  icon: 3, // MessageCircle
                },
                {
                  title: "Increase accountability & motivation",
                  desc: "Regular check-ins with peers keep you on track toward behavior change.",
                  border: "border-accent",
                  textColor: "text-accent",
                  icon: 4, // TrendingUp
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
          </section>
        </div>
      </section>
      {/* ─── Schedule Section with Calendar Integration ─── */}
      <section
        id="schedule"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px] bg-gray-50"
      >
        <div className="w-[85%]">
          <h2 className="text-center">Group Therapy Schedule</h2>
          <span className="flex flex-row items-center justify-center">
            <Calendar className="h-8 w-8 text-secondary mr-2" />
            <h4 className="!text-secondary">Live Calendar</h4>
          </span>

          {/* Calendar Container */}
          <div className="bg-white rounded-xl shadow-lg p-6 min-h-auto h-[45rem] w-full my-10 flex flex-col">
            <h3 className=" mb-5 text-left">Upcoming Sessions & Events</h3>
            <p className="text-lg leading-relaxed mb-6">
              Stay updated with our latest group therapy sessions and office
              events. Our calendar is regularly updated with new groups,
              workshops, and special events at Wilmington Mental Health.
            </p>
            <div className="text-center border-2 border-dashed border-gray-300 rounded-lg h-full w-full">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=mserrano%40wmhwc.com&ctz=America%2FNew_York"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <h4 className="text-primary font-semibold mb-2">
              Ready to Join a Group?
            </h4>
            <p className="text-lg leading-relaxed">
              Contact Wilmington Mental Health to learn more about our current
              group therapy offerings and find the right group for your needs.
              We&apos;ll help match you with a group that aligns with your
              therapeutic goals.
            </p>
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
                title: "Couples Therapy",
                href: "/mental-health/couples-therapy",
              },
              {
                title: "Substance Use Disorders",
                href: "/mental-health/substance-use",
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

export default Page;
