import Image from "next/image";
import Link from "next/link";
import footerData from "@/constants/links.json";
import type { FooterLink } from "@/app/types/types";

export default function Footer() {
  const FOOTERLINKS: FooterLink[] = footerData.FOOTERLINKS;
  const LEGALLINKS = [
    {
      href: "/privacy-policy",
      label: "Privacy Policy",
    },
    {
      href: "/terms-of-service",
      label: "Terms of Sevice",
    },
    {
      href: "/accessibility",
      label: "Accessibility Notice",
    },
  ];
  return (
    <footer className=" px-8 md:px-20 py-12 flex-col items-center border-t border-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <Image
            src="/logo.svg"
            alt="Wilmington Mental Health Logo"
            width={320}
            height={150}
            priority
            className="pt-2"
          />
          <p className="w-[85%]">
            Psychotherapy and Substance Abuse Treatment.
            <br />
            Our goal is to offer accessible and universal mental health to all
            in our community.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <h4 className="!font-semibold  mb-2">Our Clinic</h4>
          <address className="not-italic text-base text-dark/70">
            3825 Market St, Suite 4<br />
            Wilmington, NC 28403
          </address>
          <p>
            P:{" "}
            <a href="tel:9107775575" className="hover:underline">
              910.777.5575
            </a>
          </p>
          <p>F: 910.777.5273</p>
          <p>
            Email:{" "}
            <a href="mailto:info@wmhwc.com" className="hover:underline">
              info@wmhwc.com
            </a>
          </p>
          <p>
            Visit us Mon-Fri from <br />
            9:00 AM to 7:00 PM
          </p>
        </div>

        {/* Navigation & Legal */}
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="!font-semibold mb-2">Links</h4>
            <ul className="space-y-1">
              {FOOTERLINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:underline text-gray">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="!font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              {LEGALLINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link className="hover:underline text-gray" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-dark/40 pt-6 text-center text-xs text-gray-500">
        © 2025 Wilmington Mental Health & Medical Care
      </div>
    </footer>
  );
}
