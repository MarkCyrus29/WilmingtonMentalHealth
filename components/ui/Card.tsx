import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";

function Card({
  title,
  img,
  desc,
}: {
  title: string;
  img: string;
  desc: string;
}) {
  return (
    <div className="bg-background border border-gray/10 p-6 rounded-2xl shadow-md flex flex-col justify-center items-center transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl ">
      <Image
        src={img}
        alt={title + " Image"}
        width={350}
        height={200}
        className="rounded-xl mb-4"
      />
      <h3 className="mb-2">{title}</h3>
      <p className="text-xs text-center">{desc}</p>
    </div>
  );
}

export default Card;
