import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dyotak Kachare",
  initials: "BJ",
  location: "Thane, Maharashtra, India",
  locationLink: "https://maps.app.goo.gl/mGJb5rGhnkMw62Bi7",
  about:
    "Third year engineering student at VESIT.",
  summary:
    "As a student and an AI engineer. My days goes on by exploring and learning new things.",
  avatarUrl: "https://avatars.githubusercontent.com/u/109144526?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "dyotak10@gmail.com",
    tel: "+919167562525",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dyo-tak",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dyotak/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/dyo_tak",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Vivekanand Education Society's Institute of Technology",
      degree: "BTech in Artificial Intelligence and Data Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "VESIT",
      link: "https://vesit.ves.ac.in",
      badges: [],
      title: "Summer Intern",
      logo: ParabolLogo,
      start: "May 2023",
      end: "June 2023",
      description:
      "Worked under Dr.Anjali Yeole to create QR-based Attendance System for events, where there will be QR codes generated for events and info about the students will me added to database those who scan the QR code."
    },
  ],
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "R"
  ],
  projects: [
    {
      title: "Geo Tagger for Text",
      techStack: [
        "Python",
        "PyTorch",
        "BERT",
        "Flask",
        "React",
        "TailwindCSS",
        "ShadCN",
      ],
      description: "Made a NLP based project that predicts the origin location of a text based on the content of the text. Using a finetune BERT model on twitter dataset.",
      logo: ConsultlyLogo,
      link: {
        label: "geolocater",
        href: "https://github.com/dyo-tak/d2k-geolocater",
      },
    },
  ],
} as const;
