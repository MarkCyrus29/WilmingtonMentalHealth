export interface Navlinks {
  title: string;
  link: string;
}

export const NAVLINKS: Navlinks[] = [
  { title: "Home", link: "/" },
  { title: "Care & Treatment", link: "/care" },
  { title: "Health Services", link: "/health-services" },
  { title: "Specialty Services", link: "/specialty-services" },
  { title: "Patients & Visitors", link: "/patients-visitors" },
  { title: "About Us", link: "/about" },
  { title: "Get In Touch", link: "/contact" },
];

export const FOOTERLINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];