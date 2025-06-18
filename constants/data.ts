export interface NavItem {
  title: string;
  link?: string;
  children?: NavItem[];
}

export const NAVLINKS: NavItem[] = [
  { title: "Home", link: "/" },
  {
    title: "Patient Care",
    children: [
      { title: "Virtual Visits" },
      {
        title: "Mental Health",
        children: [
          { title: "Child Therapy", link: "/child-therapy" },
          { title: "Adult Therapy", link: "/adult-therapy" },
          { title: "Couples Therapy", link: "/couples-therapy" },
          { title: "Group Therapy", link: "/group-therapy" },
          { title: "Military Counseling", link: "/military-counseling" },
          { title: "LGBTQ+ Counseling", link: "/lgbtq-counseling" },
        ],
      },
      { title: "Substance Use Disorders" },
      { title: "Health Services" },
      { title: "Specialty Labs" },
      { title: "Medication Management" },
      { title: "Lab Services" },
      { title: "Other Services" },
      { title: "Test Evaluation" },
    ],
  },
  { title: "Patients & Visitors" },
  { title: "Get In Touch" },
  { title: "About Us" },
];

export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTERLINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export const IMAGES = [
  "/slideshow-images/hero5.JPG",
  "/slideshow-images/hero1.JPG",
  "/slideshow-images/hero2.JPG",
  "/slideshow-images/hero3.JPG",
  "/slideshow-images/hero4.JPG",
];
