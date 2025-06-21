export interface TeamMember {
  id: string;
  pictureSrc: string;
  name: string;
  role: string;
  idealPopulation: string;
  frameworkTag: string;
  framework: string;
  department: string;
  credentials: string[];
  insurance: string;
  about: string[];
  experience: string;
  specialties: string;
  background: string;
  interests: string;
  joined: string;
  location: string;
  bannerSrc: string;
  mediaImages?: string[];
  mediaVideo?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "brooke-maple",
    pictureSrc: "/images/our-team/Brooke.png",
    name: "Brooke Maple",
    role: "Family Nurse Practitioner",
    idealPopulation: "Late Teens, Adults",
    department: "Primary Care",
    frameworkTag: "Primary Care",
    framework: "Primary Care",
    credentials: ["FNP"],
    insurance:
      "Currently waiting to receive insurance information. Please contact our office for the most up-to-date coverage details.",
    about: [
      "Brooke Maple is a Family Nurse Practitioner (FNP) here at Wilmington Mental Health & Medical Care. She has been working for 13 years as an FNP and wants to provide the utmost care for you. Brooke has worked in a variety of specialties including oncology, infectious disease, medical-surgical, urology, primary care, women's health, and now mental health.",
      "She strives to make sure that all of her patients feel heard and comfortable during and after their visit. She makes sure to take the time to get to know all of her patients on a personal level to understand their needs better. Brooke encourages her patients to ask questions and bring up their concerns. She is committed to providing high-quality care for all of her patients.",
    ],
    experience: "13 years as Family Nurse Practitioner",
    specialties: "Oncology, Infectious Disease, Primary Care, Mental Health",
    background:
      "Brooke moved from Pensacola, FL with her husband and youngest daughter to Wilmington, NC in 2017. She has a master's degree in nursing and is certified with BSN, MSN, and FNP credentials. She has been working with Wilmington Mental Health since February 2022.",
    interests:
      "When she is not working, Brooke enjoys gardening, tending to her indoor plants, going to the beach, and spending time outside.",
    joined: "February 2022",
    location: "Wilmington, NC",
    bannerSrc: "/images/our-team/banner.svg",
    mediaVideo: "---",
  },
  {
    id: "adam-howell",
    pictureSrc: "/images/our-team/Adam.png",
    name: "Adam Howell",
    role: "Licensed Clinical Mental Health Counselor",
    idealPopulation: "Ages 6 and older",
    department: "Behavioral Health",
    frameworkTag: "CBT & Behavioral",
    framework: "CBT, Behavioral Therapy, Motivational Interviewing",
    credentials: ["LCMHC", "MS"],
    insurance:
      "Please contact our office for the most up-to-date insurance coverage details.",
    about: [
      "Adam Howell is a licensed clinical mental health counselor here at Wilmington Mental Health & Medical Care. Adam works with ages 6-10, preteens, teens, and adults to provide therapy services that range from Cognitive Behavioral Therapy (CBT) to motivational interviewing.",
      "He works with patients from a range of needs from ADHD, grief, coping skills, life transitions, school issues, stress, and more.",
      "He has a master of science in counseling and human development and has been practicing for 15 years.",
    ],
    experience: "15 years in counseling and human development",
    specialties:
      "ADHD, grief, coping skills, life transitions, school issues, stress",
    background:
      "Adam holds a Master of Science in Counseling and Human Development. He has extensive experience helping individuals navigate life’s challenges with evidence-based approaches.",
    interests:
      "When he is not at work, he enjoys listening to music, researching interesting topics, traveling, and learning new things.",
    joined: "----",
    location: "Wilmington, NC",
    bannerSrc: "/images/our-team/banner.svg",
    mediaImages: ["/images/our-team/adam-1.JPG", "/images/our-team/adam-2.JPG"],
  },
  {
    id: "anna-gokey",
    pictureSrc: "/images/our-team/Anna-gokey.JPG",
    name: "Anna Gokey",
    role: "Clinical Mental Health Counseling Intern",
    idealPopulation: "Adults",
    department: "Intern",
    frameworkTag: "Solution-Focused Therapy & CBT",
    framework:
      "Solution-Focused Therapy, Existential Therapy, CBT, Positive Psychology",
    credentials: ["CMHC Intern"],
    insurance:
      "Currently completing practicum and internship. Please contact our office for the most up-to-date insurance coverage details.",
    about: [
      "I am currently completing my practicum and internship as I pursue my Master's in Clinical Mental Health Counseling through Capella University.",
      "My passion for mental health is driven by a deep curiosity about the human experience and a drive for helping others build fulfilling lives through self-awareness, personal growth, and practical, goal-oriented techniques.",
      "I work with clients to truly understand who they are before we dig into any particular process; I want my clients to feel heard, supported, and encouraged to be wholly engaged in our sessions. I value setting realistic, attainable goals while expanding on mindset and exploring deeper existential concerns when they arise. I bring a strengths-based perspective into each session and am committed to helping clients identify what is already working in their lives and build from there.",
    ],
    experience: "Graduate student gaining hands-on clinical experience",
    specialties:
      "Solution-Focused Therapy, Existential Therapy, CBT, Positive Psychology",
    background:
      "Anna is a graduate student at Capella University in the Clinical Mental Health Counseling program. She is currently completing her practicum and internship at Wilmington Mental Health & Medical Care.",
    interests: "----",
    joined: "----",
    location: "Wilmington, NC",
    bannerSrc: "/images/our-team/banner.svg",
    mediaImages: ["/images/our-team/adam-1.JPG", "/images/our-team/adam-2.JPG"],
  },
  {
    id: "richard-howard",
    pictureSrc: "/images/our-team/Richard.png",
    name: "Richard (Gage) Howard",
    role: "Licensed Clinical Mental Health Counselor",
    idealPopulation: "15 years old and up",
    department: "Behavioral Health",
    frameworkTag: "CBT & Solution-Focused",
    framework: "Person-Centered, CBT, Solution-Focused Therapy",
    credentials: ["LCMHC", "NCC"],
    insurance:
      "Please contact our office for the most up-to-date insurance coverage details.",
    about: [
      "Richard (Gage) Howard is a Licensed Clinical Mental Health Counselor (LCMHC) in North Carolina. His counseling practices combine a person-centered approach with Cognitive Behavioral Therapy (CBT) and solution-focused therapy.",
      "Richard tends to have a direct approach to his counseling style rather than 'beating around the bush,' however; he demonstrates this method respectfully and professionally.",
      "He also works with children and adolescents who experience a wide range of DSM diagnoses and concerns.",
      "Richard strives to make sure his patients feel comfortable and understood so that they can be provided with the most effective and beneficial therapeutic services.",
      "He focuses on helping children/adolescents and parents recognize their limitations due to youth and provides proper help and resources to overcome these difficulties.",
      "He wants to ensure that children/adolescents are heard and their needs are explored.",
    ],
    experience: "Over 3 years licensed in clinical mental health counseling",
    specialties:
      "ADHD, Trauma, Depression, Anxiety, Grief, Anger, Daily Life Struggles",
    background:
      "He earned his Bachelor's Degree in Psychology with a minor in Accounting from Campbell University, and his Master’s Degree in Clinical Mental Health Counseling from the University of North Carolina Pembroke.",
    interests: "----",
    joined: "----",
    location: "Wilmington, NC",
    bannerSrc: "/images/our-team/banner.svg",
    mediaImages: [],
  },
  {
    id: "kailyn-mattingly",
    pictureSrc: "/images/our-team/Kailyn.JPG",
    name: "Kailyn Mattingly",
    role: "Licensed Clinical Mental Health Counselor Associate",
    idealPopulation: "Ages 3 to 80",
    department: "Behavioral Health",
    frameworkTag: "CBT & Trauma Therapy",
    framework:
      "Cognitive Behavioral Therapy, Trauma Therapy, Adlerian Therapy (Childhood/Family Therapy)",
    credentials: ["NCC", "LCMHCA"],
    insurance:
      "Please contact our office for the most up-to-date insurance coverage details.",
    about: [
      "Kailyn Mattingly has a passion for helping people and believes that everyone deserves the opportunity to feel confident in themselves and fulfillment in their lives.",
      "She aims to provide a safe, non-judgmental environment to aid patients in finding a renewed sense of self. Her goal is to guide patients through difficult times and support them in rediscovering joy, fulfillment, and positive emotions.",
      "Kailyn believes in normalizing mental health and aiding patients in coping with co-existing feelings/emotions while increasing awareness of the good in the world.",
      "Specializing in therapy for children, Kailyn is particularly skilled in using play as a powerful tool for communication and growth, allowing younger patients to express themselves in a comfortable and nurturing environment.",
      "She also works extensively with teens and adults, helping them navigate challenges related to anxiety, depression, trauma, and other life difficulties affecting their well-being.",
    ],
    experience:
      "3.5 years of training in applied behavioral science and counseling",
    specialties:
      "Play Therapy, Childhood and Family Therapy, Anxiety, Depression, Trauma",
    background:
      "Kailyn earned her Master’s degree in Clinical Rehabilitation and Mental Health Counseling from West Virginia University. Her background includes career counseling, disability services, and Nonviolent Crisis Intervention training.",
    interests: "----",
    joined: "----",
    location: "Wilmington, NC",
    bannerSrc: "/images/our-team/banner.svg",
    mediaImages: ["/images/our-team/kailyn-1.JPG"],
  },
];
