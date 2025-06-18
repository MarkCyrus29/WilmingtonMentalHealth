import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { NAVLINKS } from "@/constants/data";
import Link from "next/link";

function Header() {
  return (
    <header className="flex px-20 h-[100px] justify-between items-center border-b border-b-primary/20 sticky top-0 z-50 bg-background/50 backdrop-blur-[3px] shadow-sm-primary">
      <Image
        src={"/logo.svg"}
        alt="Wilmington Logo Image"
        width={300}
        height={150}
        priority
      />
      <nav className="flex gap-5 items-center">
        {NAVLINKS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex flex-row transition-opacity hover:opacity-80"
          >
            {item.title}
            {item.title !== "Home" ? <ChevronDown /> : ""}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
