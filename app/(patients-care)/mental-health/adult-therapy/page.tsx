import React from "react";
import CallBanner from "@/components/ui/CallBanner";
import PageBanner from "@/components/ui/PageBanner";
import { CheckCircle, Heart, AlertTriangle } from "lucide-react";
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

export function TherapySection({
  id,
  title,
  color,
  description,
  disorders,
  symptoms,
  treatmentGoals,
  treatmentModalities,
}: {
  id: string;
  title: string;
  color: string;
  description: React.ReactNode;
  disorders: string[];
  symptoms: string[];
  treatmentGoals: string[];
  treatmentModalities: string[];
}) {
  return (
    <section
      id={id}
      className="h-full w-screen flex flex-col items-center justify-center my-26 scroll-mt-[100px]"
    >
      <div className="w-[85%]">
        <h2>{title}</h2>
        <span className="flex flex-row items-center">
          <Heart className={`h-8 w-8 text-${color} mr-2`} />
          <h4 className={`!text-${color}`}>Professional Adult Treatment</h4>
        </span>

        <h3 className="mt-10 mb-5 text-left">Our Approach</h3>
        <p>{description}</p>

        {disorders.length > 0 && (
          <>
            <h3 className="mt-10 mb-5 text-left">Related Disorders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {disorders.map((disorder, i) => (
                <ServicesCard title={disorder} key={i} color={color} />
              ))}
            </div>
          </>
        )}

        {/* ================= Symptoms ================= */}
        <h3 className="mt-10 mb-5 text-left">Common Symptoms</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="border border-gray-300 px-4 py-3 text-left font-semibold"
                  colSpan={2}
                >
                  Symptoms
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil(symptoms.length / 2) }).map(
                (_, rowIndex) => {
                  const first = symptoms[rowIndex * 2];
                  const second = symptoms[rowIndex * 2 + 1];

                  return (
                    <React.Fragment key={rowIndex}>
                      <tr
                        className={
                          rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }
                      >
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                            {first}
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 hidden md:table-cell">
                          {second && (
                            <div className="flex items-center gap-3">
                              <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                              {second}
                            </div>
                          )}
                        </td>
                      </tr>
                      {second && (
                        <tr className="md:hidden">
                          <td className="border border-gray-300 px-4 py-3 bg-gray-50">
                            <div className="flex items-center gap-3">
                              <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                              {second}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                }
              )}
            </tbody>
          </table>
        </div>

        {/* ================= Treatment Goals ================= */}
        <h3 className="mt-10 mb-5 text-left">
          Treatment Goals for you at Wilmington Mental Health
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="border border-gray-300 px-4 py-3 text-left font-semibold"
                  colSpan={2}
                >
                  Treatment Goals
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil(treatmentGoals.length / 2) }).map(
                (_, rowIndex) => {
                  const first = treatmentGoals[rowIndex * 2];
                  const second = treatmentGoals[rowIndex * 2 + 1];

                  return (
                    <React.Fragment key={rowIndex}>
                      <tr
                        className={
                          rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }
                      >
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle
                              className={`h-4 w-4 text-${color} flex-shrink-0`}
                            />
                            {first}
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 hidden md:table-cell">
                          {second && (
                            <div className="flex items-center gap-3">
                              <CheckCircle
                                className={`h-4 w-4 text-${color} flex-shrink-0`}
                              />
                              {second}
                            </div>
                          )}
                        </td>
                      </tr>
                      {second && (
                        <tr className="md:hidden">
                          <td className="border border-gray-300 px-4 py-3 bg-gray-50">
                            <div className="flex items-center gap-3">
                              <CheckCircle
                                className={`h-4 w-4 text-${color} flex-shrink-0`}
                              />
                              {second}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                }
              )}
            </tbody>
          </table>
        </div>

        {/* ================= Treatment Modalities ================= */}
        <h3 className="mt-10 mb-5 text-left">Treatment Modalities</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="border border-gray-300 px-4 py-3 text-left font-semibold"
                  colSpan={2}
                >
                  Available Treatment Methods
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({
                length: Math.ceil(treatmentModalities.length / 2),
              }).map((_, rowIndex) => {
                const first = treatmentModalities[rowIndex * 2];
                const second = treatmentModalities[rowIndex * 2 + 1];

                return (
                  <React.Fragment key={rowIndex}>
                    <tr
                      className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle
                            className={`h-4 w-4 text-${color} flex-shrink-0`}
                          />
                          {first}
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 hidden md:table-cell">
                        {second && (
                          <div className="flex items-center gap-3">
                            <CheckCircle
                              className={`h-4 w-4 text-${color} flex-shrink-0`}
                            />
                            {second}
                          </div>
                        )}
                      </td>
                    </tr>
                    {second && (
                      <tr className="md:hidden">
                        <td className="border border-gray-300 px-4 py-3 bg-gray-50">
                          <div className="flex items-center gap-3">
                            <CheckCircle
                              className={`h-4 w-4 text-${color} flex-shrink-0`}
                            />
                            {second}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Page() {
  const warningSignsSymptoms = [
    "Feeling sad, negative, and/or depressed?",
    "Experiencing low self-esteem?",
    "Experiencing unexplained aches and pains?",
    "Feel as if you have little to no energy?",
    "Experience a loss in memory?",
    "Suffer from anxiety or panic attacks?",
    "Think about harming yourself or others?",
    "Experience uncontrollable stress, fears, or obsessions?",
    "Have problems with drugs, alcohol, or eating disorders?",
    "Faced with conflict with family members or significant others?",
  ];

  return (
    <main className="scroll-smooth ">
      <PageBanner
        title="Individual Psychotherapy & Counseling"
        imageSrc="/images/patients-care/adult-therapy.webp"
        alt="Adult Therapy Image"
        subtitle="Adult Therapy"
      />

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%] ">
          <h2 className="text-center">Adult Therapy</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Adult therapy, also known as psychotherapy and individual therapy,
            is best suited for your needs. Here at Wilmington Health, we can
            help you overcome personal obstacles, make healthy decisions, and
            cope with difficulties better. Life can feel fast-paced,
            overwhelming, and stressful, that is why we are here to provide
            one-on-one support for a wide range of emotional, cognitive, and
            behavioral issues.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center">
            We want to help you focus on developing skills, taking steps towards
            personal change, reduce symptoms, and enhance the overall quality of
            your life. Wilmington Mental Health&apos;s holistic and integrated care
            is implemented by healthcare professionals with extensive training
            and whose primary purpose is to promote healing for you.
          </p>

          {/* ─── Therapy Navigation Buttons ─── */}
          <div className="mt-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: "#trauma-ptsd",
                  title: "Trauma/PTSD Therapy",
                  gradient: "from-primary to-primary/80",
                  hoverGradient: "hover:from-primary/90 hover:to-primary/70",
                },
                {
                  href: "#depression",
                  title: "Depression Therapy",
                  gradient: "from-accent to-accent/80",
                  hoverGradient: "hover:from-accent/90 hover:to-accent/70",
                },
                {
                  href: "#anxiety",
                  title: "Anxiety Therapy",
                  gradient: "from-primary to-primary/80",
                  hoverGradient: "hover:from-primary/90 hover:to-primary/70",
                },
              ].map(({ href, title, gradient, hoverGradient }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`block w-full bg-gradient-to-r ${gradient} !text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${hoverGradient}`}
                >
                  <h4 className=" !font-semibold text-center !text-background">
                    {title}
                  </h4>
                </a>
              ))}
            </div>
          </div>

          <h3 className="mt-10 mb-5 text-left">
            Why Is Counseling So Important?
          </h3>
          <p className="text-lg leading-relaxed">
            Mental health treatment has the potential to impact anyone who is
            willing to engage in it. Learning how to navigate difficult
            situations, overcoming personal obstacles, make health decisions,
            and attain achievable goals is one step closer to obtaining a
            healthy mind and body for the future. Counseling gives you an
            opportunity to explore your inner feelings, thought processes, and
            patterns of behavior as well as learning new coping skills and
            techniques to better manage your symptoms.
          </p>

          <h3 className="mt-10 mb-5 text-left">
            When Is It Time to Seek Mental Health Treatment?
          </h3>
          <p className="mb-6 text-lg leading-relaxed">
            Early warning signs that indicate that you may need to seek help:
          </p>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <ul className="space-y-3">
              {warningSignsSymptoms.map((symptom, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-b-accent pb-3"
                >
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-red-800 font-medium">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Trauma/PTSD Therapy ─── */}
      <TherapySection
        id="trauma-ptsd"
        title="Trauma/PTSD Therapy"
        color="primary"
        description={
          <>
            Learn how to overcome psychological trauma. Trauma occurs when you
            have had a disturbing experience that results in significant fear,
            hopelessness, dissociation, conduction, or disruptive feelings that
            have a long-lasting effect on your person, behavior, and attitude.
            Wilmington Mental Health has specialists that will help you manage
            your symptoms related to trauma with the goal to help you manage
            your symptoms.
          </>
        }
        disorders={[
          "Adjustment Disorders",
          "Post-Traumatic Stress Disorder (PTSD)",
          "Acute Stress Disorder (ASD)",
          "Reactive Attachment Disorder (RAD)",
          "Disinhibited Social Engagement Disorder",
        ]}
        symptoms={[
          "Agitation",
          "Hostility",
          "Hypervigilance",
          "Self-destructive behavior",
          "Social isolation",
          "Flashbacks",
          "Fear",
          "Mistrust",
          "Loss of interest or pleasure in activities",
          "Guilt",
          "Loneliness",
          "Insomnia",
          "Nightmares",
          "Emotional detachment",
        ]}
        treatmentGoals={[
          "Awareness of feelings",
          "Decrease or eradicate symptoms",
          "Face the reality of the traumatic event without getting stuck in it",
          "Shift focus from the past to the present",
          "Improve daily functioning",
          "Reclaim personal power",
          "Overcome addictions associated with traumatic stress",
          "Gain skills that prevent relapse",
        ]}
        treatmentModalities={[
          "Individual Therapy",
          "Cognitive Behavioral Therapy (CBT)",
          "Prolonged Exposure Therapy",
          "Eye Movement Desensitization and Reprocessing (EMDR)",
          "Hypnotherapy",
          "Psychodynamic",
          "Group Therapy",
        ]}
      />

      {/* ─── Depression Therapy ─── */}
      <TherapySection
        id="depression"
        title="Depression Therapy"
        color="accent"
        description={
          <>
            Learn how to address persistent feelings of sadness and loss of
            interest. Depression exists when you experience persistent low mood
            or loss of interest in activities, which may have significant
            impairment in your daily life.
          </>
        }
        disorders={[
          "Major Depressive Disorder (Clinical Depression)",
          "Persistent Depressive Disorder",
          "Bipolar Disorder",
          "Postpartum Depression",
          "Premenstrual Dysphoric Disorder",
          "Seasonal Affective Disorder",
          "Atypical Depression",
        ]}
        symptoms={[
          "Apathy",
          "Guilt",
          "Hopelessness",
          "Loss of interest or pleasure in activities",
          "Sadness",
          "Excessive crying",
          "Irritability",
          "Social isolation",
          "Insomnia",
          "Fatigue",
          "Increased/decreased appetite",
          "Slowness",
          "Thoughts of suicide",
          "Weight gain/loss",
        ]}
        treatmentGoals={[
          "Develop a safety plan",
          "Participate in pleasurable or enjoyable activities",
          "Decrease suicidal ideation",
          "Learn coping skills, problem solving and emotional regulation",
          "Identify maladaptive thoughts",
          "Shift focus to adaptive thoughts",
        ]}
        treatmentModalities={[
          "Individual Therapy",
          "Cognitive Behavioral Therapy",
          "Interpersonal Therapy",
          "Psychodynamic Therapy",
          "Social Skills Therapy",
          "Supportive Counseling",
          "Behavioral Activation",
          "Problem-solving Therapy",
        ]}
      />

      {/* ─── Anxiety Therapy ─── */}
      <TherapySection
        id="anxiety"
        title="Anxiety Therapy"
        color="secondary"
        description={
          <>
            Learn how to manage intrusive thinking. Anxiety is a common human
            emotion but it can become excessive, persistent, and interfere with
            daily life. These feelings can be difficult to control but here at
            Wilmington Mental Health, we are here to help you manage your
            symptoms and improve your overall mental health.
          </>
        }
        disorders={[
          "Agoraphobia",
          "Generalized Anxiety Disorder",
          "Panic Disorder",
          "Separation Anxiety",
          "Specific Phobias",
          "Social Anxiety",
          "Other Specified Anxiety Disorder",
          "Unspecified Anxiety Disorder",
        ]}
        symptoms={[
          "Feeling nervous, restless or tense",
          "Having a sense of impending danger, panic, or doom",
          "Breathing rapidly",
          "Increased heart rate",
          "Sweating",
          "Trembling",
          "Trouble concentrating or thinking about anything other than the present worry",
          "Having trouble sleeping",
          "Having difficulty controlling worry",
        ]}
        treatmentGoals={[
          "Reducing anxiety symptoms",
          "Learning calming skills",
          "Manage anxiety symptoms",
          "Explore biased, fearful self-talk",
          "Identify and replace irrational beliefs",
          "Build realistic and empowering self-talk",
        ]}
        treatmentModalities={[
          "Cognitive Behavioral Therapy",
          "Exposure Therapy",
          "Acceptance Commitment Therapy (ACT)",
          "Dialectical Behavioral Therapy (DBT)",
          "Interpersonal Therapy (ITP)",
          "Eye Movement Desensitization Reprocessing (EMDR)",
          "Group Therapy",
        ]}
      />

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Services at Wilmington Mental Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Family Therapy",
                href: "/mental-health/family-therapy",
              },
              {
                title: "LGBTQIA+ Therapy",
                href: "/mental-health/lgbtqia-therapy",
              },
              {
                title: "Group Therapy",
                href: "/mental-health/group-therapy",
              },
              {
                title: "Couples Therapy",
                href: "/mental-health/couples-therapy",
              },
              {
                title: "Military Therapy",
                href: "/mental-health/military-therapy",
              },
              {
                title: "Substance Use Disorders",
                href: "/services/substance-use-disorders",
              },

              {
                title: "Sex Offender Treatment",
                href: "/services/sex-offender-treatment",
              },
              {
                title: "Immigration Evaluations",
                href: "/services/immigration-evaluations",
              },
              {
                title: "Anger Management",
                href: "/services/anger-management",
              },
              {
                title: "Workers Compensation & Medical Leave",
                href: "/services/workers-compensation",
              },
              {
                title: "Emotional Support Animals (ESA)",
                href: "/services/emotional-support-animals",
              },
              {
                title: "Comprehensive Assessments",
                href: "/services/comprehensive-assessments",
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
                    <div className=" flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
