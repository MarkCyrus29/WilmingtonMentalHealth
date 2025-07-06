import CallBanner from "@/components/ui/CallBanner";
import { Heart } from "lucide-react";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { ServicesCard } from "@/components/ui/ServicesCard";
import RelatedServices from "@/components/ui/RelatedServices";

function TherapySection({
  title,
  ageRange,
  description,
  services,
}: {
  title: string;
  ageRange: string;
  description: React.ReactNode;
  services: { title: string }[];
}) {
  return (
    <section className="h-full w-screen flex flex-col items-center justify-center my-26 ">
      <div className="w-[85%]">
        <div className=" flex flex-col items-center ">
          <h2>{title}</h2>
          <span className="flex flex-row items-center">
            <Heart className={`h-8 w-8 text-primary mr-2`} />
            <h4 className={`!text-primary`}>{ageRange}</h4>
          </span>
        </div>
        <h3 className="mt-10 mb-5 ">Our Approach</h3>
        <p className="">{description}</p>
        <h3 className="mt-10 mb-5 ">Service Areas:</h3>
        <div className="grid grid-cols-2 gap-6 mt-10 ">
          {services.map(({ title }, i) => (
            <ServicesCard title={title} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <main>
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/patients-care/child-therapy.webp",
            "/images/patients-care/child-therapy (1).jpg",
            "/images/patients-care/child-therapy (2).jpg",
            "/images/patients-care/child-therapy (3).jpg",
            "/images/patients-care/child-therapy (4).jpg",
            "/images/patients-care/child-therapy (5).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Child & Adolescent Therapy
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Child & Adolescent Therapy
          </h1>
        </div>
      </div>

      {/* ─── Child Therapy ─── */}
      <TherapySection
        title="Child Counseling"
        ageRange="Ages 3 - 12"
        description={
          <>
            Wilmington Mental Health offers effective interventions for
            children, ages 3–12, who need assistance understanding and managing
            life challenges that affect their behavioral, emotional, and social
            functioning.
            <br />
            <br />
            Child therapy offers multiple benefits, such as improving emotional
            regulation, enhancing communication and social skills, increasing
            their self-esteem, and coping strategies to manage stress and
            anxiety. Working with our team, we will be able to provide your
            child with the proper help to improve the quality of their lives.
            <br />
            <br />
            Counselors work with children to help them grow and adapt to the
            challenges that the youth may experience. In addition, counselors
            work with parents to educate them on their child&#39;s behavior and
            how to navigate them, such as positive reinforcement and handling
            consequences.
          </>
        }
        services={[
          { title: "ADHD" },
          { title: "Autism" },
          { title: "Anxiety" },
          { title: "Trauma" },
          { title: "Boundaries" },
          { title: "Disregulated Mood Disorder" },
          { title: "Social Skills & Interactions" },
          { title: "Oppositional Defiance Disorder" },
          { title: "Family Dynamics / Disregulation / Conflict" },
        ]}
      />

      {/* ─── Adolescent Therapy ─── */}
      <TherapySection
        title="Adolescent Counseling"
        ageRange="Ages 13 - 17"
        description={
          <>
            We help adolescents, ages 13–17, deal with their emotions and
            navigate through the challenges they may be facing in life—including
            identity, school, interpersonal relationships, adjustment to
            changes, interactions with parents, and life stressors.
            <br />
            <br />
            Counselors provide a safe space and judgment-free environment for
            patients. They work with the adolescent to figure out who they are,
            with the goal of helping them be confident in themselves and work
            through their difficulties.
          </>
        }
        services={[
          { title: "PTSD" },
          { title: "Trauma" },
          { title: "Anxiety" },
          { title: "Loneliness" },
          { title: "Depression" },
          { title: "Self-esteem" },
          { title: "Substance Use" },
          { title: "Social Skills & Interactions" },
          { title: "Emotional Expression / Regulation" },
          { title: "Technology Addiction & Social Media" },
          { title: "Family Dynamics / Disregulation / Conflict" },
        ]}
      />
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Services at Wilmington Mental Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Assesments",
                href: "#",
              },
              {
                title: "Emotional Support Animal",
                href: "#",
              },
              {
                title: "Medication Management",
                href: "#",
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
