import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import CallBanner from "@/components/ui/CallBanner";
import Link from "next/link";
import { Users, User, Calendar, Clock } from "lucide-react";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/substance-use/aftercare-treatment (1).jpg",
            "/images/substance-use/aftercare-treatment (2).jpg",
            "/images/substance-use/aftercare-treatment (3).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Continued Support
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Aftercare Treatment
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <h2 className="text-center">Aftercare Treatment</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            There are alternatives to inpatient treatment and detoxification at
            the outpatient level. Basic substance use disorder treatment often
            follows Intensive Outpatient (SAIOP) treatment and includes
            individual and/or group therapy, which we call Aftercare. Aftercare
            provides support to individuals in recovery who are trying to
            maintain the progress achieved during SAIOP and prevent relapse.
          </p>
        </div>
      </section>

      {/* ─── Level 1 Treatment Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center">Level 1 - Outpatient Treatment</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            This level of care typically follows rehabilitation or Substance
            Abuse Intensive Outpatient (SAIOP) and is frequently offered several
            times a week, but less than nine hours per week. Level 1 treatment
            is organized to enhance your recovery and motivation to continue
            your recovery.
          </p>

          <div className="mt-8 max-w-4xl mx-auto">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>
                  You may be asked to continue working on, or developing, a
                  relapse prevention plan that allows your relapse potential and
                  apply the techniques you have learned
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span>
                  Your therapist may also evaluate your personal expectations so
                  that they are in line with your treatment plan and motivation
                  to stay on track with your recovery
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Who Is It For Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <h2 className="text-center">Who Is It For?</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            If you have recently completed IOP and are looking to continue
            working on your recovery plans, Aftercare treatment may be the right
            choice for you. Your recovery is an ongoing process that does not
            stop after you successfully detox or stop using drugs or alcohol.
          </p>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-8 w-screen">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Important Recovery Statistics
            </h3>
            <p className="text-blue-700">
              Relapse rates for substance use disorder can be as high as{" "}
              <span className="font-bold text-3xl">60%</span>
            </p>
            <p className="text-blue-600 mt-2">
              Therefore, we recommend long-term intervention to facilitate
              stability, develop accountability, and treat any substance use
              disorder.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-10 w-[90%]">
          <div className="mt-8 max-w-4xl mx-auto flex-1/2">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Program Details
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">Program Duration</h4>
                </div>
                <p className="text-gray-600">
                  3 to 18 months, depending on time spent in SAIOP
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-green-500" />
                  <h4 className="font-semibold">Session Requirements</h4>
                </div>
                <p className="text-gray-600">Minimum of 2 sessions per week</p>
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-4xl mx-auto text-center text-gray-700 px-4 flex-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Flexible and Accessible Care
            </h3>
            <p className="leading-relaxed">
              Outpatient treatment is a flexible and effective option for those
              who may not be able to commit to intensive programs, are just
              beginning their recovery journey, or are seeking added structure.
              Aftercare is accessible, cost-effective, and supports both mental
              health and substance use challenges simultaneously.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Additional Support Options
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Participants are offered the option to attend support groups such
              as:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                AA
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                NA
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                SMART Recovery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center">Why Choose Outpatient Aftercare?</h2>
          <p className="text-center text-gray-600 mt-4 !mb-10">
            Outpatient treatment is effective and offers flexibility for your
            recovery journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
            {[
              {
                title: "Great for busy schedules",
                border: "border-blue-500",
                textColor: "text-blue-500",
                icon: 0,
              },
              {
                title: "Cannot commit to intensive treatment",
                border: "border-green-500",
                textColor: "text-green-500",
                icon: 1,
              },
              {
                title: "Have not attempted recovery yet",
                border: "border-purple-500",
                textColor: "text-purple-500",
                icon: 2,
              },
              {
                title: "Looking for added structure and support",
                border: "border-yellow-500",
                textColor: "text-yellow-500",
                icon: 3,
              },
              {
                title: "Accessible and cost effective",
                border: "border-pink-500",
                textColor: "text-pink-500",
                icon: 4,
              },
              {
                title:
                  "Handle mental health and substance abuse simultaneously",
                border: "border-teal-500",
                textColor: "text-teal-500",
                icon: 1,
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

      {/* ─── Treatment Tracks Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">Treatment Tracks</h2>
          <p className="text-center text-gray-600 mt-4 mb-10">
            Choose the treatment approach that best fits your recovery needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Individual Therapy Only",
                icon: User,
                description:
                  "Patients are given access to one-on-one therapy sessions at least once a month where they can build on the progress achieved during detox or IOP and follow a recovery program that is conducted by a trained addiction specialist.",
                color: "blue",
              },
              {
                title: "Individual & Group Therapy",
                icon: Users,
                description:
                  "Individual therapy is combined with group therapy to help patients connect with others experiencing similar issues in their recovery journey and facilitate sharing to build confidence, coping, and support.",
                color: "green",
              },
            ].map((track, i) => {
              const IconComponent = track.icon;
              const colorClasses = {
                blue: "border-blue-500 text-blue-500",
                green: "border-green-500 text-green-500",
              };
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-white border-t-4 ${
                    colorClasses[
                      track.color as keyof typeof colorClasses
                    ].split(" ")[0]
                  }`}
                >
                  <IconComponent
                    className={`w-10 h-10 ${
                      colorClasses[
                        track.color as keyof typeof colorClasses
                      ].split(" ")[1]
                    }`}
                  />
                  <h4 className="text-xl font-bold text-center">
                    {track.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-center text-gray-600">
                    {track.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className="mt-8 flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-white border-t-4 border-purple-500 
            }"
          >
            <Users className={`w-10 h-10 text-purple-500`} />
            <h4 className="text-xl font-bold text-center">
              Individual & Group Therapy Mutual Support Group
            </h4>
            <p className="text-sm leading-relaxed text-center text-gray-600 w-[80%]">
              Therapy focuses on helping patients manage their drug addiction
              and maintain sobriety while giving the option to attend
              structured, professionally led mutual support groups or self-help
              programs to increase abstinence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Related Services:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-10">
            {[
              {
                title: "Alcoholic Anonymous",
                href: "https://www.aa.org/",
              },
              {
                title: "Narcotic Anonymous",
                href: "https://na.org/",
              },
              {
                title: "SMART Recovery",
                href: "https://smartrecovery.org/?gclid=Cj0KCQiA35urBhDCARIsAOU7QwlTnl_jY2ipHsOrijN25e1pdbJs2lW3F0imPLBImymiMtey34ZALEgaAqdjEALw_wcB",
              },
              {
                title: "Life Ring Recovery",
                href: "https://lifering.org/",
              },
            ].map((service, i) => (
              <a
                key={i}
                target="_blank"
                href={service.href}
                className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {service.title}
                    </h4>
                    <div className=" flex items-center text-primary opacity-100 md:opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2 md:group-hover:translate-x-0 duration-300 ">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg
                        className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CallBanner
        title={
          <>
            <strong>Call us Today!</strong>
          </>
        }
        subtitle={
          <>
            Our therapeutic effort is provided within the most caring, private
            and professional environment.
          </>
        }
      />
    </main>
  );
}

export default page;
