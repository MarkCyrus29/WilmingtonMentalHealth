import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import {
  PawPrint,
  FileText,
  Home,
  Calendar,
  Phone,
  Video,
  File,
  Clipboard,
} from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emotional Support Animals | Wilmington Mental Health",
  description:
    "Learn how Wilmington Mental Health therapists can assess your need and issue ESA letters for emotional support animals—helping clients with anxiety, PTSD, depression access housing accommodations and feel supported every day.",
  keywords: [
    "emotional support animal letter",
    "ESA evaluation Wilmington NC",
    "ESA for anxiety",
    "PTSD emotional support animal",
    "ESA for depression",
    "ESA housing letter",
    "licensed therapist ESA letter",
    "mental health ESA evaluation",
    "Wilmington NC ESA services",
    "emotional support animal certification",
  ],
};


function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/other-services/emotional-support-animal (1).jpg",
            "/images/other-services/emotional-support-animal (2).jpg",
            "/images/other-services/emotional-support-animal (3).jpg",
            "/images/other-services/emotional-support-animal (4).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Mental Health Services
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Emotional Support Animal
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-10">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/other-services/emotional-support-animal (5).jpg"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 mb-6">
            <PawPrint className="w-10 h-10 text-primary" />
            <h2 className="text-center">Emotional Support Animal</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            If you suffer from a mental health or psychiatric condition such as
            anxiety, depression, PTSD, attention deficit disorder, and chronic
            stress, among others, you may qualify for an emotional support
            animal (ESA). We can write a letter that will allow you to prove
            that you receive emotional support from your pet.
          </p>
        </div>
      </section>

      {/* ─── Requirements & Benefits Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-center">Requirements & Benefits</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Our licensed therapists can write you an ESA letter after you
            complete the initial Comprehensive Clinical Assessment if deemed
            necessary. The letter indicates that your pet plays an essential
            role in dealing with your condition or disability. Legally, you are
            required to present a letter from a licensed healthcare
            professional.
          </p>
          <div className="mt-8 !bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto text-center border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold !text-blue-800 mb-4">
              Housing Accommodations
            </h3>
            <p className="!text-blue-600">
              Many landlords will make reasonable accommodations for individuals
              who have an emotional support animal, even if the landlord has a
              no-pet policy. It is important to know that your ESA does not need
              to be specially trained. There are no limitations regarding the
              type of animal or breeds that can qualify as an ESA.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Physical and Emotional Disability Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="w-8 h-8 text-primary" />
            <h2 className="text-center">Physical and Emotional Disability</h2>
          </div>
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Disability Definition */}
              <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500">
                <h3 className="text-xl font-semibold !text-orange-900 mb-4">
                  Disability
                </h3>
                <p className=" leading-relaxed">
                  {`According to Americans with Disabilities Act (ADA), a physical
                  disability is “[a]ny physiological disorder or condition,
                  cosmetic disfigurement, or anatomical loss affecting one or
                  more of the following body systems: neurological,
                  musculoskeletal, special sense organs, respiratory (including
                  speech organs), cardiovascular, reproductive, digestive,
                  genitourinary, hemic and lymphatic, skin, and endocrine.”`}
                </p>
              </div>

              {/* Common Conditions */}
              <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500">
                <h3 className="text-xl font-semibold !text-green-900 mb-4">
                  Common Conditions
                </h3>
                <p className=" leading-relaxed">
                  Emotional support animals are commonly recommended for
                  conditions like anxiety, bipolar disorder, eating disorders,
                  mood disorders, neurocognitive disorders, post-traumatic
                  disorders, psychotic conditions, and substance abuse problems.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-6xl mx-auto text-center border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold !text-blue-800 mb-4">
              Housing
            </h3>
            <p>
              {`According to the Federal Fair Housing Amendments Act (FHAA), it is
              illegal to discriminate against someone with a recognized
              impairment. Housing rights must be given to those with emotional
              support animals, although this law does not override any existing
              health code, such as public health laws that prohibit dogs in
              swimming pools. Even if a property has a “not pets” policy, they
              must make reasonable accommodations to emotional support animals.
              This applies to public housing, college dorms, and other
              accommodation.`}
            </p>
          </div>
        </div>
      </section>

      {/* ─── How Does it Work Section ─── */}
      <section className="mb-12 border-l-4 border-primary w-full p-10 bg-primary/5 flex justify-center">
        <div className="md:w-[85%] sm:w-[95%] w-full">
          <div className="mb-8">
            <h3 className="flex items-center gap-4">
              <Calendar className="ml-2 h-5 w-5 text-secondary" />
              How Does it Work?
            </h3>
          </div>

          <ol className="space-y-6 text-lg text-gray-700 list-decimal list-inside">
            <li className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Phone className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Call us to schedule a comprehensive clinical assessment with
                  one of our therapists.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Video className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Attend an assessment in person or online.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clipboard className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Receive a recommendation for your evaluation.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <File className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Receive a hardcopy or digital version of your diagnosis letter
                  the following day.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <PawPrint className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Register your Emotional Support Animal.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2>Other Services Offered at Wilmington Mental Health:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Adult Therapy",
                href: "/mental-health/adult-therapy",
              },
              {
                title: "Tests & Evaluations",
                href: "/tests-evaluations",
              },
              {
                title: "Corporate Wellness",
                href: "/other-services/corporate-wellness",
              },
              {
                title: "Substance Use Disorders",
                href: "/substance-use",
              },
              {
                title: "Group Therapy",
                href: "/mental-health/group-therapy",
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

export default page;
