import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Panth Shah",
  initials: "PS",
  url: "https://dillion.io",
  location: "Vadodara, India",
  locationLink: "https://www.google.com/maps/place/vadodara",
  description:
    "Frontend Developer and Builder. I love building things explore new and evolving tech. Always a geek.",
  summary:
    "I’m a BTech CSE grad and a curious front-end developer who loves turning ideas into impactful apps. I’m passionate about creating user-friendly solutions, constantly learning, and growing with every project. I love building stuff and am always looking for new ideas to work on!",
  avatarUrl: "/me.jpg",
  skills: [
    "Html",
    "Css",
    "Javascript",
    "React",
    "Node.js",
    "Postgres",
    "TailwindCSS",
    "Firebase",
    "Strapi",
    "Git",
    "Shadcn",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "panthshah242@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Panth1823",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/panth1823/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/panth1823",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Koios Engineering Solutions",
      href: "https://koiosengg.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "",
      start: "March 2024",
      end: "August 2024",
      description: `
        • Engineered responsive websites using React, HTML, CSS, and JavaScript, resulting in a 35% increase in user engagement.
        • Implemented version control strategies with Git, boosting team collaboration efficiency by 40% and reducing bug resolution time by 25%.
        • Integrated UI and animation libraries to enhance website functionality and aesthetics, leading to a 50% increase in client satisfaction.
      `,
    },
  ],
  education: [
    {
      school: "Parul University",
      href: "https://www.paruluniversity.ac.in/",
      degree: "Computer Science and Engineering (AI)",
      logoUrl: "/buildspace.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "Sarvamangal School",
      href: "https://www.justdial.com/Vadodara/Sarwa-Mangal-School-Behind-Bright-Cbse-Unit-Near-Airport-Harni/0265PX265-X265-160614142457-T2V6_BZDET",
      degree: "HSC/SSC (PCM)",
      logoUrl: "/waterloo.png",
      start: "2020",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Flashgenie",
      href: "https://flashgenie.vercel.app/",
      dates: "Oct 2024",
      active: true,
      description:
        "AI-powered flashcard generator built with React , Gemini and Cloudflare Workers. Create and customize quiz content seamlessly for an interactive learning experience.",
      technologies: [
        "ReactJS",
        "Cloudflare Workers",
        "Magic UI",
        "Gemini 1.5",
        "Mistral 7B",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "flashgenie.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Panth1823/FlashGenie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/desqrxm8d/video/upload/v1734353805/16.12.2024_18.11.57_REC_lttl0p.mp4",
    },
    {
      title: "Cartopia",
      href: "https://cartopia-store.vercel.app/",
      dates: "Sep 2024",
      active: true,
      description:
        "Cartopia is a sleek full-stack e-commerce app for electronic products, featuring a neo-brutalism UI design, secure Stripe payment integration, and a seamless shopping experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://cartopia-store.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Panth1823/Cartopia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/desqrxm8d/video/upload/v1734354292/16.12.2024_18.33.37_REC_vwrash.mp4",
    },
  ],
  hackathons: [
    {
      title: "Google Gen AI Exchange Hackathon",
      dates: "Aug 12 - Oct 18, 2024",
      location: "Online",
      description: "",
      icon: "public",
      image:
        "https://res.cloudinary.com/dccsybvqx/image/upload/v1735307681/GenAIEX_ek3mff.png",
      links: [],
    },
    {
      title: "Parul Lets Hack (India Tour)",
      dates: "July 15 - 16, 2023",
      location: "Parul University",
      description:
        "Developed AI-powered flashcard generator built with React , Gemini and Cloudflare Workers. Create and customize quiz content seamlessly for an interactive learning experience",
      image:
        "https://res.cloudinary.com/dccsybvqx/image/upload/v1735307681/PLH_acnkrz.webp",
      links: [
        {
          title: "",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://flashgenie.vercel.app/",
        },
        {
          title: "",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Panth1823/FlashGenie",
        },
      ],
    },
    {
      title: "Skill-A-Thon 1.0",
      dates: "February 13 - 27, 2023",
      location: "Online",
      description:
        'Built "LearnTuber" web app which can convert your free YouTube course video into summarized notes as well as interactive quiz.',
      image:
        "https://res.cloudinary.com/dccsybvqx/image/upload/v1735307681/Skillathon_pl70uq.jpg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://learntuber.vercel.app/",
        },
        {
          title: "",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Panth1823/LearnTuber",
        },
      ],
    },
  ],
} as const;
