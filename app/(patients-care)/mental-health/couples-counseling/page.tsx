import type React from "react";
import CallBanner from "@/components/ui/CallBanner";
import PageBanner from "@/components/ui/PageBanner";
import {
  CheckCircle,
  Heart,
  AlertTriangle,
  Users,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

function ServicesCard({ title, color }: { title: string; color: string }) {
  return (
    <div
      className={`w-full h-full bg-[#F6F6F6] border border-dark/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-200 flex items-start gap-4 transform hover:-translate-y-1`}
    >
      <div className={`p-2 rounded-full bg-${color}/10 text-${color}`}>
        <CheckCircle className="h-5 w-5" />
      </div>
      <h4 className="text-sm sm:text-base font-medium leading-snug text-foreground">
        {title}
      </h4>
    </div>
  );
}

function Page() {
  const conflictResolutionSteps = [
    "Expression of initial positions",
    "Exploration of underlying concerns (with a focus on core concerns)",
    "Creation and establishment of a mutually agreed-upon plan that meets the needs of both participants",
  ];

  const behaviorExpressions = [
    "Flight: Attempts of avoidance",
    "Immobilization: Inability to act or make decisions",
    "Submit: Accommodating and giving in too easily",
  ];

  const premaritalTopics = [
    "Finances",
    "Communication",
    "Beliefs and Values",
    "Roles in Marriage",
    "Affection and Sex",
    "Desire to have Children",
    "Family Relationships",
    "Decision-making",
    "Dealing with Anger",
    "Time Spent Together",
  ];

  const assessmentProcess = [
    "You will be asked to complete either a SYMBIS or Prepare/Enrich Assessment",
    "Both you and your partner will complete the assessment separately without exchanging information or discussing the questions",
    "The assessment will help us determine how you feel about each other's relationships",
    "Any couple can take the assessment to identify any strengths, weaknesses, and potential problem areas",
    "Together, we will interpret the results and discuss areas of concern",
    "You will set goals with your partner to help overcome any existing challenges in the relationship",
  ];

  return (
    <main className="scroll-smooth">
      <PageBanner
        title="Couples Counseling & Relationship Counseling"
        imageSrc="/images/patients-care/couples-therapy.webp"
        alt="Couples Counseling Image"
        subtitle="Couples Counseling"
      />

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">Couples Counseling</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            At Wilmington Mental Health, we are here to help couples recognize
            and resolve their conflicts to better their relationship. Working
            with our providers will help you regain control of your relationship
            with your partner and/or family by developing communication skills
            and emotional intelligence.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center">
            Relationship therapy is used to address distressed couples of family
            units. Our focus is on the relationship (i.e. we, us, themselves)
            rather than the individual (i.e. I, me, myself) who is part of the
            relationship. We target communication patterns, relationship history
            and the parties involved learn how to interact more efficiently and
            effectively with each other.
          </p>

          {/* ─── Therapy Navigation Buttons ─── */}
          <div className="mt-12 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  href: "#conflict-resolution",
                  title: "Conflict Resolution",
                  gradient: "from-primary to-primary/80",
                  hoverGradient: "hover:from-primary/90 hover:to-primary/70",
                },
                {
                  href: "#premarital-counseling",
                  title: "Premarital Counseling",
                  gradient: "from-primary to-primary/80",
                  hoverGradient: "hover:from-primary/90 hover:to-primary/70",
                },
                {
                  href: "#family-systems",
                  title: "Therapy Approaches",
                  gradient: "from-primary to-primary/80",
                  hoverGradient: "hover:from-primary/90 hover:to-primary/70",
                },
              ].map(({ href, title, gradient, hoverGradient }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`block w-full bg-gradient-to-r ${gradient} !text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${hoverGradient}`}
                >
                  <h4 className="!font-semibold text-center !text-background">
                    {title}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conflict Resolution Section ─── */}
      <section
        id="conflict-resolution"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
      >
        <PageBanner
          title="SKILLS"
          imageSrc="/images/patients-care/conflict-resolution.webp"
          alt="Conflict Resolution Image, Couple holding hands"
          subtitle="Conflict Resolution"
          height="h-[70vh]"
          tag={
            <span className="flex flex-row items-center">
              <MessageCircle className="h-8 w-8 text-background mr-2" />
              <h4 className="!text-background">Skills Development</h4>
            </span>
          }
        />
        <div className="w-[85%]">
          <h3 className="mt-10 mb-5 text-left">Our Approach</h3>
          <p className="text-lg leading-relaxed mb-6">
            Learn to truly listen to others and work together to resolve
            conflict. Conflict therapy will help you learn how to address
            conflict in any situation—whether at home, between friends, or
            romantic partners, and even at work. This treatment approach can
            also be useful during legal meditation, where the parties involved
            need to feel like they have won the battle.
          </p>

          <h3 className="mt-10 mb-5 text-left">Basic Treatment Steps</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Treatment Steps
                  </th>
                </tr>
              </thead>
              <tbody>
                {conflictResolutionSteps.map((step, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {step}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 mb-5 text-left">Common Behavior Expressions</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Behavior Patterns
                  </th>
                </tr>
              </thead>
              <tbody>
                {behaviorExpressions.map((behavior, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                        {behavior}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Premarital Counseling Section ─── */}
      <section
        id="premarital-counseling"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
      >
        <PageBanner
          title="THERAPHY"
          imageSrc="/images/patients-care/premarital-counseling.webp"
          alt="Premarital Counseling Image"
          subtitle="Conflict Resolution"
          height="h-[70vh]"
          tag={
            <span className="flex flex-row items-center">
              <Heart className="h-8 w-8 text-background mr-2" />
              <h4 className="!text-background">Relationship Preparation</h4>
            </span>
          }
        />
        <div className="w-[85%]">
          <h3 className="mt-10 mb-5 text-left">Our Approach</h3>
          <p className="text-lg leading-relaxed mb-6">
            Premarital counseling can help identify weaknesses that exist in the
            relationship and ensure that you and your partner have a strong,
            healthy relationship–giving you better for a stable and satisfying
            marriage.
          </p>

          <h3 className="mt-10 mb-5 text-left">Topics Discussed</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {premaritalTopics.map((topic, i) => (
              <ServicesCard title={topic} key={i} color="accent" />
            ))}
          </div>

          <h3 className="mt-10 mb-5 text-left">What to Expect?</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Assessment Process
                  </th>
                </tr>
              </thead>
              <tbody>
                {assessmentProcess.map((step, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">•</span>
                        {step}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Family Systems Section ─── */}
      <section
        id="family-systems"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
      >
        <div className="w-[85%]">
          <div className="flex flex-col items-center">
            <h4 className="!font-normal">APPROACH</h4>
            <h2>Family Systems Approach</h2>
            <span className="flex flex-row items-center">
              <Users className="h-8 w-8 text-secondary mr-2" />
              <h4 className="!text-secondary">Holistic Family Therapy</h4>
            </span>
          </div>

          <h3 className="mt-10 mb-5 text-left">Our Approach</h3>
          <p className="text-lg leading-relaxed mb-6">
            Family systems therapy is a form of psychotherapy that helps
            individuals resolve their problems in the context of their family
            units, where many issues are likely to begin. Each family member
            works together to better understand their group dynamic and how
            their individual actions affect one another and the family as a
            whole.
          </p>
          <p className="text-lg leading-relaxed">
            Many psychological issues begin early in life and stem from
            relationships within the family of origin, or the family one grows
            up in, even though these issues often surface later on in life.
            Families in conflict, as well as couples and individuals with issues
            and concerns related to their families of origin, can benefit from
            family systems therapy. This treatment approach can be helpful for
            such mental health conditions, such as depression, bipolar disorder,
            anxiety, personality disorder, addiction and food-related disorders.
            Family systems therapy has also been shown to help individuals and
            family members better control and cope with physical disabilities
            and disorders.
          </p>
        </div>
      </section>

      {/* ─── Therapy Approaches Section ─── */}
      <section
        id="therapy-approaches"
        className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
      >
        <div className="w-[85%]">
          <h2>Our Therapy Approaches</h2>

          <div className="space-y-12 mt-10">
            {/* Gottman Approach */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <span className="flex flex-row items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-2" />
                <h3 className="!text-primary">Gottman Method</h3>
              </span>
              <p className="text-lg leading-relaxed">
                Learn how to balance your positivity and negativity within your
                relationships. You will be able to overcome obstacles such as
                criticism, defensiveness, contemptment, and stone walling.
              </p>
            </div>

            {/* Emotionally Focused Therapy */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <span className="flex flex-row items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-2" />
                <h3 className="!text-primary">Emotionally Focused Therapy</h3>
              </span>
              <p className="text-lg leading-relaxed">
                Learn how to express deep, underlying emotions from a place of
                vulnerability. You will learn now to emotionally connect with
                your partner as well as emotionally confirm their feelings,
                provide indirect support, and a stronger attachment.
              </p>
            </div>

            {/* IMAGO Approach */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <span className="flex flex-row items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-2" />
                <h3 className="!text-primary">IMAGO Approach</h3>
              </span>
              <p className="text-lg leading-relaxed">
                Learn how to transform conflicts into opportunities for healing
                and growth. You will learn how to empathize with your partner
                and create a stronger loving connection.
              </p>
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
                title: "Family Therapy",
                href: "/mental-health/family-therapy",
              },
              {
                title: "Group Therapy",
                href: "/mental-health/group-therapy",
              },
              {
                title: "Men's & Women's Health",
                href: "/services/mens-womens-health",
              },
              {
                title: "Wellness Exam",
                href: "/services/wellness-exam",
              },
              {
                title: "Salud Latina",
                href: "/services/salud-latina",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {service.title}
                    </h4>
                    <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallBanner />
    </main>
  );
}

export default Page;
