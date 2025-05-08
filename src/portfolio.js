/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Google Developer Groups on Campus AUIB",
  description:
    "Google Developer Groups on Campus AUIB is a community of students passionate about technology and innovation. We organize workshops, hackathons, and events to foster learning and collaboration among students.",
  og: {
    title: "Google Developer Groups on Campus AUIB",
    type: "website",
    url: "https://gdg-auib.github.io/GDGAUIB-Website",
  },
};

//Home Page
const greeting = {
  fullname: "GDG on Campus AUIB",
  title: "Google Developer Groups",
  university_name: "on Campus The American University of Iraq – Baghdad",
  logo_name: "AUIB",
  subTitle:
    "We are a student-led tech community at AUIB, affiliated with Google Developer Groups, that empowers students to learn, build, and share knowledge about technologies and beyond through events, workshops, and collaborative projects.",
  portfolio_repository: "https://github.com/GDG-AUIB/GDGAUIB-Website",
  discord_link: "https://discord.gg/cUMGbfEk",
  githubProfile: "https://github.com/GDG-AUIB",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/orgs/GDG-AUIB",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/gdg-auib",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Discord",
    link: "https://discord.gg/cUMGbfEk",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/discord?style=brands
    backgroundColor: "#7289DA", // Reference https://simpleicons.org/?q=discord
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/gdg.auib/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/discord?style=brands
    backgroundColor: "#DD2A7B", // Reference https://simpleicons.org/?q=discord
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "ArtificialIntelligenceImg",
      skills: [
        "example, example Artificial Intelligence, or AI, refers to machines that mimic human cognition, capable of learning, reasoning, and problem-solving. Data science is an interdisciplinary field that involves extracting insights from data sets, combining statistics, and computer science. AI and data science are interconnected.",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google Cloud AI",
          fontAwesomeClassname: "logos-google-cloud",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "devicon:googlecolab",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Mobile Development",
      fileName: "MobileDevImg",
      skills: [
        "example, example Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones.",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
      ],
    },
    {
      title: "WEB Development",
      fileName: "webImg",
      skills: [
        "example, example Web app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones.",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#00D8FF",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & Architecture",
      fileName: "WebDevelopmentImg",
      skills: [
        "example, example Infrastructure as a service is a cloud computing service model where a cloud services vendor provides computing resources such as storage, network, servers, and virtualization.",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform (GCP)",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Google Kubernetes Engine (GKE)",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

const members = {
  members: [
    {
      name: "Yousif Oday",
      role: "Leader",
      linkedin: "yousif-oday-7a46802b1",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-goog/avatars/yousif_oday_9fz13Ez.jpg",
      joinYear: 2023,
      leaveYear: null,
      quote: "Empowering students to innovate and grow.",
      social: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/yousif-oday-7a46802b1/",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
        {
          name: "Github",
          link: "https://github.com/Yousif-12",
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
      ],
    },
    {
      name: "Abdullah Almarashdi",
      role: "Core Team Member",
      linkedin: "abdullah-almarashdi",
      github: "zaniixx",
      joinYear: 2023,
      leaveYear: null,
      quote: "Empowering students to innovate and grow.",
      social: [
        {
          name: "LinkedIn",
          link: `https://www.linkedin.com/in/abdullah-almarashdi/`,
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
        {
          name: "Github",
          link: `https://github.com/zaniixx`,
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
      ],
    },
    {
      name: "Mohammed Mousa",
      role: "Event Coordinator",
      linkedin: "mohammed-mousa",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-goog/avatars/mohammed_mousa.png",
      joinYear: 2024,
      leaveYear: null,
      quote: "GDG of AUIB is where innovation meets collaboration.",
      social: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/mohammed-mousa/",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
      ],
    },
    {
      name: "Hussein Fouad",
      role: "Core Team Member",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/hussein_fouad.jpeg",
      joinYear: 2024,
      leaveYear: null,
      quote: "Building the future, one step at a time.",
      social: [],
    },
    {
      name: "Hasan Aldelfi",
      role: "Designer",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/blacktskull_..jpg",
      joinYear: 2024,
      leaveYear: null,
      quote: "Design is intelligence made visible.",
      social: [],
    },
    {
      name: "Ryu Nix",
      role: "Video Editor",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ryu_nix.jpg",
      joinYear: 2024,
      leaveYear: null,
      quote: "Crafting stories through visuals.",
      social: [],
    },
    {
      name: "Kadhim Dheyaa",
      role: "Core Team Member",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/kadhim_dheyaa_1fkhnmo.jpg",
      joinYear: 2024,
      leaveYear: null,
      quote: "Passionate about technology and teamwork.",
      social: [],
    },
    {
      name: "Anas Malik",
      role: "Core Team Member",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/anas_malik_ZLIIE1B.jpg",
      joinYear: 2024,
      leaveYear: 2025,
      quote: "Innovation starts with curiosity.",
      social: [],
    },
    {
      name: "Sajjad Amer",
      role: "Core Team Member",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sajjad_amer.jpg",
      joinYear: 2024,
      leaveYear: null,
      quote: "Empowering ideas through collaboration.",
      social: [],
    },
    {
      name: "Scar Ali Ammar",
      role: "Marketing",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/scar_ali_ammar.jpg",
      joinYear: 2024,
      leaveYear: null,
      quote: "Connecting people through creative strategies.",
      social: [],
    },
  ],
};

export const faqData = {
  title: "Frequently Asked Questions",
  subtitle: "Here are some common questions and answers about our community.",
  questions: [
    {
      question: "What is GDG on Campus AUIB?",
      answer:
        "GDG on Campus AUIB is a student-led tech community affiliated with Google Developer Groups.",
    },
    {
      question: "How can I join the community?",
      answer:
        "You can join by attending our events or reaching out to us through our social media channels.",
    },
    {
      question: "What kind of events do you organize?",
      answer:
        "We organize workshops, hackathons, and collaborative projects to foster learning and innovation.",
    },
    {
      question: "What kind of events do you organize?",
      answer:
        "We organize workshops, hackathons, and collaborative projects to foster learning and innovation.",
    },
  ],
};

export const eventList = [
  {
    title: "Orientation Session",
    date: "May 15, 2025",
    location: "AUIB Campus",
    attendees: 50,
    link: "#",
  },
  {
    title: "Hackathon 2025",
    date: "April 10, 2025",
    location: "AUIB Auditorium",
    attendees: 20,
    link: "/event#register",
  },
  {
    title: "Tech Talk: AI in 2026",
    date: "March 20, 2026",
    location: "Online",
    attendees: 30,
    link: "/event#tech-talk",
  },
];

export { settings, seo, greeting, socialMediaLinks, skills, members };
