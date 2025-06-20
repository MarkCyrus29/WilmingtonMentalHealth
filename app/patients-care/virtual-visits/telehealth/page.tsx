import HorizontalCard from "@/components/ui/HorizontalCard";
import { Monitor, Smartphone } from "lucide-react";
import Image from "next/image";
import TeletherapyAccordion from "@/components/ui/FAQAccordion";
import CallBanner from "@/components/ui/CallBanner";
import PageBanner from "@/components/ui/PageBanner";

function Page() {
  return (
    <main>
      <PageBanner
        title="Virtual Appointment & Remote Care"
        imageSrc="/images/patients-care/phone.jpg"
        alt="Phone Image"
        subtitle="What is Telehealth?"
      />

      {/* What is telehealth section */}
      <Section title="What is Telehealth?">
        <p>
          Telehealth, also known as Telemedicine, Teletherapy, or
          Telepsychiatry, allows for you to schedule and meet with our providers
          directly through the Internet here at Wilmington Mental Health and
          Medical Care. These online audio and video visits connect us directly
          through your computer or mobile device (iOS or Android) — it&#39;s
          your choice!
          <br />
          <br />
          Our providers use Meet, a real-time video-communication service
          developed by Google. Meet&#39;s platform comes with automated security
          and HIPAA compliance to personal health information.
          <br />
          <br />
          This guide outlines basic tips, instructions on how to join your video
          appointment, and answers to commonly asked questions at the bottom.
          Please review all sections before your first Telehealth appointment
          and contact us if you have any questions.
        </p>
      </Section>

      {/* Tips section */}
      <Section title="Tips for Success">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {[
            {
              title: "Reliable Internet Connection",
              desc: "You will need a steady internet connection to join and connect to Telehealth appointments.",
              color: "primary",
              icon: 0,
            },
            {
              title: "Connect a Few Minutes Early",
              desc: "Join the appointment a few minutes early to test internet connection.",
              color: "green-500",
              icon: 1,
            },
            {
              title: "Distraction Free Space",
              desc: "Select a place that is private, safe, and away from distractions.",
              color: "purple-500",
              icon: 2,
            },
            {
              title: "Camera Setup",
              desc: "Make sure to choose a space that is well-lit and a camera that is clear and functional.",
              color: "orange-500",
              icon: 3,
            },
            {
              title: "Appointment Cancellation",
              desc: "If you need to cancel or reschedule the appointment, please contact us!",
              color: "accent",
              icon: 4,
            },
            {
              title: "Other",
              desc: "Ask questions!",
              color: "secondary",
              icon: 5,
            },
          ].map((item, i) => (
            <HorizontalCard
              key={i}
              border={`border-${item.color}`}
              textColor={`text-${item.color}`}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </Section>

      {/* How to Join Section */}
      <Section title="How to Join a Meeting:">
        <p>
          You can join a video call from Google Meet, Google Calendar, Gmail,
          etc. You can also dial-in to a meeting from a phone or a meeting room.
          You can use Google Meet without a Google account.
        </p>

        {/* Desktop Card */}
        <JoinCard
          image="/images/patients-care/girl-using-cellphone.jpg"
          title="Join from a Computer"
          icon={<Monitor className="h-8 w-8 text-primary mr-3" />}
          align="left"
        >
          <>
            If you plan to use a <strong>desktop or laptop</strong>, there&#39;s
            <strong> no need to download anything</strong> prior to your
            appointment.
            <br />
            <br />
            For new patients, please ensure you’ve provided a{" "}
            <strong>valid and up-to-date</strong> email address or mobile number
            so we can send appointment reminders.
            <br />
            <br />
            Click the <strong>unique link</strong> included in the reminder.
            Your video call screen will open in a new browser tab.
            <br />
            <br />
            Once the screen opens, click <strong>&#39;Join Now&#39;</strong>.
            You may be placed in a waiting room until your provider joins.
          </>
        </JoinCard>

        {/* Mobile Card */}
        <JoinCard
          image="/images/patients-care/girl-using-laptop.jpg"
          title="Join from a Mobile Device"
          icon={<Smartphone className="h-8 w-8 text-primary mr-3" />}
          align="right"
        >
          <>
            If you plan to use a <strong>mobile device or tablet</strong>, you
            will need to <strong>download the Google Meet app</strong> first.
            <br />
            <br />
            Tap the <strong>link sent via email or text</strong> to open the
            Meet app. If your provider has already joined, you&#39;ll see them
            on the screen.
            <br />
            <br />
            <strong>Note:</strong> Your provider may be finishing up with
            another patient. <strong>Please be patient</strong>.
          </>
        </JoinCard>

        {/* Note Box */}
        <div className="w-full md:w-[85%] mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <p className="text-blue-800 mb-4">
            <strong>Note:</strong> There may be a short delay if your provider
            is with another patient. Please wait — they&#39;ll join shortly.
          </p>
          <p className="text-blue-800">
            <strong>Need help?</strong> Watch this step-by-step Google Meet
            guide below.
          </p>
        </div>

        {/* YouTube Embed */}
        <div className="aspect-video w-full max-w-4xl mx-auto mt-6">
          <iframe
            src="https://www.youtube.com/embed/X4jAvaX73-U?si=P7Kd-2CWtKQY7Hex"
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Common Teletherapy Questions:">
        <TeletherapyAccordion />
      </Section>

      <CallBanner
        title={
          <>
            Call today to <strong>Schedule an appointment!</strong>
          </>
        }
        subtitle=""
      />
    </main>
  );
}

export default Page;

/* Reusable Section Wrapper */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-screen flex flex-col items-center justify-center my-20">
      <div className="w-[90%] md:w-[85%] text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
}

/* Reusable Join Card */
function JoinCard({
  title,
  icon,
  children,
  image,
  align = "left",
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  image: string;
  align?: "left" | "right";
}) {
  const isReversed = align === "right";
  return (
    <div className="h-full w-[85%] rounded-2xl bg-background shadow-lg border border-gray-200 overflow-hidden mt-8">
      <div
        className={`flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } w-full p-6 gap-6`}
      >
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            className="object-cover rounded-xl md:rounded-r-2xl"
          />
        </div>
        <div
          className={`w-full md:w-1/2 p-4 md:p-8 space-y-5 text-left ${
            isReversed ? "md:text-right" : ""
          }`}
        >
          <div
            className={`flex items-center ${
              isReversed ? "md:justify-end" : ""
            }`}
          >
            {icon}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
