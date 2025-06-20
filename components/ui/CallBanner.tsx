import React from "react";

interface CallBannerProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export default function CallBanner({
  title = (
    <>
      We offer <strong>In-Person or Virtual visits.</strong>
    </>
  ),
  subtitle = (
    <>
      Ready to make the first step in your mental health journey?{" "}
      <strong>Call us Today!</strong>
    </>
  ),
  className = "",
}: CallBannerProps) {
  return (
    <section
      className={`w-screen h-52 text-center items-center flex flex-col justify-center bg-primary/65 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] border-t border-t-[rgba(255,255,255,0.18)] ${className}`}
    >
      <h2 className="!font-normal">{title}</h2>
      <h4 className="!font-normal">{subtitle}</h4>
      <h3 className="font-bold border-2 border-dark/60 py-2 px-4 rounded mt-2">
        <a href={`tel:9107775575`} className="hover:underline !text-dark/80">
          910 - 777 - 5575
        </a>
      </h3>
    </section>
  );
}
