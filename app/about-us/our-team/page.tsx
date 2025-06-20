import teamData from "@/constants/team.json";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/ui/PageBanner";

// Group team members by framework
const groupedByFramework = teamData.reduce(
  (acc: Record<string, typeof teamData>, member) => {
    if (!acc[member.framework]) {
      acc[member.framework] = [];
    }
    acc[member.framework].push(member);
    return acc;
  },
  {}
);

export default function OurTeamPage() {
  return (
    <main>
      <PageBanner
        title="*picture of team*"
        imageSrc="/images/home/slideshow-images/hero1.JPG"
        alt="Phone Image"
        subtitle="Meet Our Team"
      />
      <div className="min-h-screen py-12 px-4 bg-[var(--color-background)]">
        <h2 className="text-center ">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(groupedByFramework).map(([framework, members]) => (
            <div key={framework}>
              {/* Framework Separator */}
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 border-b border-[var(--color-gray)] pb-2">
                {framework}
              </h3>

              {/* Member Cards */}
              <div className="space-y-6 flex flex-col">
                {members.map((member, index) => (
                  <Link key={index} href={`/about-us/our-team/${member.id}`}>
                    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                      <div className="relative w-24 h-24 bg-[var(--color-gray)] rounded-full flex items-center justify-center border border-dark">
                        <Image
                          fill
                          src={member.pictureSrc}
                          alt={`Portrait of ${member.name}`}
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg !font-normal text-[var(--color-foreground)]">
                          <strong>{member.name}</strong>,{" "}
                          {member.credentials.join(", ")}
                        </h3>

                        <p className="text-sm text-dark/60">{member.role}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
