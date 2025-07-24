import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import { Brain, Lightbulb, X, BookOpen, User } from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/other-services/clinical-hypnosis (1).jpg",
            "/images/other-services/clinical-hypnosis (2).jpg",
            "/images/other-services/clinical-hypnosis (3).jpg",
            "/images/other-services/clinical-hypnosis (4).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Integrative Medicine
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Clinical Hypnosis
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-primary" />
            <h2 className="text-center">Clinical Hypnosis</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Recognizing, appreciating, and embracing the mind-body connection,
            clinical hypnosis facilitates the mind-body-spirit working together.
            Clinical hypnosis is the ultimate in integrative medicine.
          </p>
        </div>
      </section>

      {/* ─── What is Clinical Hypnosis Section ─── */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-10">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/other-services/clinical-hypnosis (5).jpg"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Lightbulb className="w-10 h-10 text-primary" />
            <h2 className="text-center">What is Clinical Hypnosis?</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Clinical Hypnosis is utilized in conjunction with medical treatment
            and no idea of medical treatment. Clinical hypnosis is facilitated
            by a licensed health care provider such as a physician,
            psychologist, therapist, dentist, or chiropractor.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Clinical hypnosis can bring about physical change as well as
            psychological and emotional change. An individual in trance knows
            what is occurring, is aware and functional, and may choose the
            appropriate time to terminate trance.
          </p>
        </div>
      </section>

      {/* ─── The Parts That Make the Whole Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">The Parts that Make the Whole</h2>
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hypnosis */}
              <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500">
                <h3 className="text-xl font-semibold !text-blue-900 mb-3">
                  Hypnosis
                </h3>
                <p className=" leading-relaxed">
                  Hypnosis is a tool or process used to facilitate the trance
                  state. It enables us to control when the trance state will
                  occur so that we can best utilize it.
                </p>
              </div>

              {/* Trance */}
              <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500">
                <h3 className="text-xl font-semibold !text-green-900 mb-3">
                  Trance
                </h3>
                <p className=" leading-relaxed">
                  Trance is a naturally occurring phenomenon. It is an altered
                  state of consciousness in which one can readily access both
                  psychological and physiological abilities. It is common for
                  people to be in a trance state. Children are frequently in
                  trance while playing. Trance happens all the time.
                </p>
              </div>

              {/* Suggestion */}
              <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500">
                <h3 className="text-xl font-semibold !text-orange-900 mb-3">
                  Suggestion
                </h3>
                <p className="leading-relaxed">
                  Suggestion is the vehicle through which we communicate
                  messages to the unconscious mind. One’s ability to accept
                  suggestions is heightened in trance. All hypnosis is
                  self-hypnosis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Uses of Clinical Hypnosis Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center">Uses of Clinical Hypnosis</h2>
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Sleep Problems",
                "Pain Management",
                "Anxiety/Panic Attacks",
                "Fibromyalgia",
                "Headaches",
                "Autoimmune Problems",
                "Trauma",
                "Habit Control",
                "Weight Loss",
                "Surgical Preparation",
                "Nausea and Vomiting",
                "Healing and Recovery",
                "Performance Enhancement",
                "Gastrointestinal Disorders",
                "Stress Management/Relaxation",
                "Side Effects of Chemo and Radiation",
              ].map((use, i) => (
                <div
                  key={i}
                  className="bg-blue-50 p-4 rounded-xl shadow-sm border-l-4 border-primary text-center"
                >
                  <p className="!mb-0 text-gray-800">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Clinical Hypnosis is Not Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <X className="w-8 h-8 text-red-500" />
            <h2 className="text-center text-red-600">
              What Clinical Hypnosis is Not
            </h2>
          </div>
          <ul className="space-y-4 text-lg leading-relaxed text-gray-700 max-w-5xl mx-auto">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span>
                Clinical hypnosis is not something that somebody does “to”
                somebody. All hypnosis is self-hypnosis. All hypnosis is
                autohypnosis.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span>
                Hypnosis does not resemble a sleep state. The EEG of someone in
                trance more closely resembles the waking state than the sleep
                EEG.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span>
                Hypnosis is not a state of unconsciousness, nor does it include
                a loss of control of amnesia.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span>
                Clinical hypnosis is not a treatment in and of itself. It is
                useful as an adjunct to treatment that is already within the
                field of competence of health care practitioners.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span>
                Hypnosis is not a panacea, nor a substitute for good practice.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span>
                Clinical hypnosis does not resemble what is depicted in movies
                and TV. Clinical hypnosis is not the same as stage hypnosis.
                Stage hypnosis is a performance and does not require a health
                care license.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── An Evidence-Based Approach Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-center">An Evidence-Based Approach</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Until 30 years ago, there were few clinical trials examining
            hypnosis for any type of medical or psychological problem.
            Scientific evidence for clinical hypnosis was limited to anecdotal
            and clinical reports. In recent decades, however, there has been a
            growing body of scientific research.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Numerous controlled studies have found clinical hypnosis as
            effective or more effective than various treatments for pain
            including standard care, relaxation training, support group without
            hypnosis, attention control, autogenic training, biofeedback, and
            physical therapy.
          </p>
          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto text-center border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Recognized & Recommended
            </h3>
            <p className="text-blue-700">
              In 1958, both the American Medical Association and the American
              Psychological Association recognized hypnotherapy as a valid
              medical procedure. Since 1995, both the National Institute of
              Health (NIH) has recommended hypnotherapy as a treatment for
              chronic pain. Clinical hypnosis is one of the evidence-based
              complementary and integrative health approaches covered by the
              Veterans medical benefits package when deemed clinically necessary
              by their care per VA directive.
            </p>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            This growing number of psychological studies on hypnosis and pain
            has enhanced the scientific legitimacy of hypnosis, has identified
            several measurable physiological phenomena, and has put to rest the
            misconception that hypnosis is solely a placebo effect (David R.
            Patterson, 2013). Studies of laboratory pain reduction show
            sympathetic responses (e.g., heart rate and blood pressure),
            electrocortical activity at various sites, endogenous endorphin
            release, and regional blood flow. Clinical hypnosis demonstrates a
            series of physiological changes that can be monitored by brain
            activity.
          </p>
        </div>
      </section>

      {/* ─── Chronic Pain and Opioid Dependency Section ─── */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-10">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/other-services/clinical-hypnosis.jpg"}
            alt={"Clinical Hypnosis Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-center">Chronic Pain and Opioid Dependency</h2>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Having received his initial training in 1995, Dr. Stanley immersed
            himself in the advanced study and practice of clinical hypnosis in
            2013 while he was working on a crisis stabilization unit during an
            opioid crisis. Perry observed that a significant percentage of those
            who were dependent on opioids had little to no history of substance
            abuse until after an accident or surgery and the treatment of pain
            with opioids.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Dr. Stanley realized that a third or more of those who become
            dependent upon opioids would benefit from treatment for chronic pain
            and clinical hypnosis could provide the assistance they needed.
            Perry sought out training from some of the leading experts in the
            field to enhance his skills for using clinical hypnosis to alleviate
            pain and maximize comfort for those with chronic pain and other
            chronic illnesses.
          </p>
        </div>
      </section>

      {/* ─── Self-Hypnosis Classes Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center">
            Self-Hypnosis Classes for Patients with Cancer and Other Chronic
            Illnesses
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            In addition to the use of clinical hypnosis in individual therapy,
            Dr. Stanley offers four-week classes in self-hypnosis. The class,
            offered in-person as well as Zoom, consists of four 90-minute
            sessions; once a week for four consecutive weeks. In addition to the
            four group meetings, each participant also meets with Dr. Stanley
            individually for 30 minutes during the four weeks to assist them
            with making a recording of suggestions for their current
            circumstances.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            This class is open to members of the general public who want to
            learn how to use self-hypnosis to help in managing cancer and other
            chronic illnesses, including the symptoms, reducing pain and stress,
            controlling the side effects of medication and radiation therapies,
            and generally enhancing quality of life.
          </p>
          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto text-center border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Dr. Stanley's Personal Experience
            </h3>
            <p className="text-blue-700">
              Dr. Stanley uses self-hypnosis regularly for his own health
              issues. He has used self-hypnosis to resolve sleep problems, to be
              able to fly with little to no knee pain, and to alleviate nerve
              pain. He was able to use self-hypnosis rather than opioids
              following the surgical removal of a ganglion cyst and has
              comfortably tolerated multiple cardiac MRIs. Perry’s successful
              practice of self-hypnosis has resulted in him developing the
              highest expectation that the daily use of self-hypnosis will be
              beneficial to anyone who is motivated to practice this skill
              consistently.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Dr. Perry Stanley Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex flex-col lg:flex-row items-start gap-12 mt-10">
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative h-[300px] w-[300px] rounded-full overflow-hidden shadow-xl">
                <Link
                  href={"/our-team/perry-stanley"}
                  className="transition-opacity hover:opacity-90"
                >
                  <Image
                    src="/images/other-services/dr-perry-portrait.png"
                    alt="Dr. Perry Stanley Portrait"
                    fill
                    className="object-cover transition-all hover:scale-105"
                    sizes="(min-width: 1024px) 300px, 100vw"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-2/3 space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <User className="w-8 h-8 text-primary" />
                <Link
                  href={"/our-team/perry-stanley"}
                  className="transition-opacity hover:opacity-80"
                >
                  <h2 className="">Dr. Perry Stanley</h2>
                </Link>
              </div>
              <p className="mt-6 text-lg leading-relaxed">
                Following the initiation of the American Society of Clinical
                Hypnosis (ASCH) introductory training in 1995, Dr. Stanley
                completed ASCH intermediate skill building workshops before
                beginning to travel throughout the United States and participate
                in advanced workshops led by some of the leaders in the field of
                clinical hypnosis. His advanced study in clinical hypnosis
                includes: trauma-informed integrative medicine, hypnosis for
                enhancing comfort in individuals with chronic pain, hypnosis for
                the abuse of opioids, an integrative mind-body approach to
                hypnosis, the treatment of chronic physical problems including
                gut health, irritable bowel syndrome and autoimmune problems,
                the integration of hypnotic utilization, neuroplasticity, and
                the psychophysiologic pattern, transforming trauma with hypnotic
                memory reconsolidation, relational strategies for the
                developmental repair of trauma, somatic pain, and anxiety,
                clinical hypnosis with patients in cancer care, trance and the
                treatment of military veterans with traumatic experiences,
                hypnosis for relaxation and sleep, and hypnotic suggestion and
                positive expectancies.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                Dr. Stanley, a licensed psychologist since 1994, holds a
                Certification in Clinical Hypnosis with the American Society of
                Clinical Hypnosis. Dr. Stanley continues to study and practice
                clinical hypnosis. In addition to the continued study of
                alleviating pain and maximizing comfort through the use of
                clinical hypnosis, Dr. Stanley has studied trauma-informed
                integrative medicine, the interaction of hypnotic utilization,
                neuroplasticity, and the psychophysiologic pattern, the North
                Carolina Hypnosis Protocol for Irritable Bowel Syndrome, and the
                teaching of self-hypnosis to cancer patients and those with
                other chronic illnesses.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                In addition to his practice of clinical hypnosis, Dr. Stanley
                brings a relational lens to the clients he serves. A Clinical
                Fellow with the American Association for Marriage and Family
                Therapy since 1992, Dr. Stanley has worked successfully with
                hundreds of couples and families. He has taught graduate sources
                in Marriage and Family Therapy as an Adjunct Assistant Professor
                at West Virginia University and provided consultation to
                children and youth serving organizations while on the faculty of
                the Western Pennsylvania Family Center in Pittsburgh
                Pennsylvania. He trained extensively in Adlerian Psychology
                early in his career, has been in conference with some of the
                pioneers in the field including Virginia Satir and Salvador
                Minuchin, and began specializing in Bowen family systems and
                therapy in 1985.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Services at Wilmington Mental Health:</h2>
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
                title: "Substance Use Disorders",
                href: "/substance-use",
              },
              {
                title: "Corporate Wellness",
                href: "/other-services/corporate-wellness",
              },
              {
                title: "Salud Latina",
                href: "/other-services/salud-latina",
              },
              {
                title: "Test & Evaluations",
                href: "/tests-evaluations",
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
