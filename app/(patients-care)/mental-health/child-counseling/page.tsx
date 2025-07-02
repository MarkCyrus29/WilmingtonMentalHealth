import CallBanner from "@/components/ui/CallBanner";
import PageBanner from "@/components/ui/PageBanner";
import { CheckCircle, Heart } from "lucide-react";

function ServicesCard({ title, color }: { title: string; color: string }) {
  return (
    <div
      className={`w-full h-full bg-[#F6F6F6] border border-dark/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-200 flex items-start gap-4 transform hover:-translate-y-1 `}
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

function TherapySection({
  title,
  ageRange,
  color,
  description,
  services,
}: {
  title: string;
  ageRange: string;
  color: string;
  description: React.ReactNode;
  services: { title: string }[];
}) {
  return (
    <section className="h-full w-screen flex flex-col items-center justify-center my-26 ">
      <div className="w-[85%]">
        <div className=" flex flex-col items-center ">
          <h2>{title}</h2>
          <span className="flex flex-row items-center">
            <Heart className={`h-8 w-8 text-${color} mr-2`} />
            <h4 className={`!text-${color}`}>{ageRange}</h4>
          </span>
        </div>
        <h3 className="mt-10 mb-5 ">Our Approach</h3>
        <p className="">{description}</p>
        <h3 className="mt-10 mb-5 ">Services We Provide</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
          {services.map(({ title }, i) => (
            <ServicesCard title={title} key={i} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <main>
      <PageBanner
        title="Professional Therapy Services for Children & Adolescents"
        imageSrc="/images/patients-care/child-therapy.webp"
        alt="Phone Image"
        subtitle="Child & Adolescent Counseling"
      />

      {/* ─── Child Therapy ─── */}
      <TherapySection
        title="Child Counseling"
        ageRange="Ages 3 - 12"
        color="primary"
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
        color="accent"
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

      <CallBanner
        title={
          <>
            Call us today to <strong>Schedule an appointment!</strong>
          </>
        }
        subtitle=""
      />
    </main>
  );
}

export default Page;
