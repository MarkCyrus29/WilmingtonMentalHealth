import CallBanner from "@/components/ui/CallBanner";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import { TherapySection } from "../adult-therapy/page";
import RelatedServices from "@/components/ui/RelatedServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Military Counseling | Wilmington Mental Health",
  description:
    "Wilmington Mental Health provides specialized therapy for veterans and military personnel—helping manage trauma, PTSD, depression, and ease transitions into civilian life with expert care and support.",
  keywords: [
    "military counseling",
    "veteran mental health",
    "PTSD therapy",
    "trauma therapy",
    "therapy for veterans",
    "mental health services for military",
    "counseling for active duty",
    "veteran depression therapy",
    "civilian transition support",
    "Wilmington mental health",
  ],
};

function Page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/patients-care/military-counseling (1).jpg",
            "/images/patients-care/military-counseling (2).jpg",
            "/images/patients-care/military-counseling (3).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Mental Health
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Military Counseling
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">Military Counseling</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Wilmington Mental Health offers mental health, psychiatric, and
            primary care services to military personnel transitioning into
            civilian life or veterans struggling with behavioral, psychological,
            emotional, or medical symptoms. Our programs are designed to address
            the needs of affected military personnel away from environments that
            may trigger their conditions and symptoms.
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
            <h2>Benefits of Military Counseling</h2>
            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              {[
                {
                  title: "Improved Mental Health",
                  desc: "Therapy helps address anxiety, stress, trauma, and other mental health concerns.",
                  border: "border-primary",
                  textColor: "text-primary",
                  icon: 1,
                },
                {
                  title: "Coping Skills",
                  desc: "Counselors work with you to manage difficult emotions, improve self-care, and develop healthy coping mechanisms. ",
                  border: "border-green-500",
                  textColor: "text-green-500",
                  icon: 2,
                },
                {
                  title: "Stronger Relationships",
                  desc: "Therapy helps improve communication skills, rebuild trust, and strengthen relationships with family and friends. ",
                  border: "border-purple-500",
                  textColor: "text-purple-500",
                  icon: 0,
                },
                {
                  title: "Successful Transitions",
                  desc: "Therapy assists with navigating the challenges transitioning between military to civilian life. ",
                  border: "border-orange-500",
                  textColor: "text-orange-500",
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
          </section>
        </div>
      </section>

      <TherapySection
        id="trauma-ptsd"
        title="Trauma/PTSD Therapy"
        img="/images/patients-care/trauma.jpg"
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
      <TherapySection
        id="depression"
        title="Depression Therapy"
        img="/images/patients-care/depression.jpg"
        color="primary"
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
                title: "Group Therapy",
                href: "/mental-health/group-therapy",
              },
              {
                title: "Couples Therapy",
                href: "/mental-health/couples-therapy",
              },
              {
                title: "Test & Evaluations",
                href: "/tests-evaluations",
              },
              {
                title: "Substance Use Disorders",
                href: "/substance-use",
              },
              {
                title: "Corporate Wellness",
                href: "/other-services/corporate-wellness",
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
