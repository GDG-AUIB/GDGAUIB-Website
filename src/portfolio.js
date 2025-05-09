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
      quote: "EXAMPLE Empowering students to innovate and grow.",
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
      name: "Kadhim Riyadh",
      role: "Core Team Member",
      linkedin: "kadhim-jasim-18a673339",
      github: "kjasim98",
      Photo:
        "https://media.licdn.com/dms/image/v2/D4E03AQHMvK_qnXC85Q/profile-displayphoto-shrink_200_200/B4EZV2Zk.3HUAc-/0/1741448172474?e=1752105600&v=beta&t=wO1pn8UGsfU3mu3998B1nPAR01dB1gxU-2G0ZsVoLT4",
      joinYear: 2024,
      leaveYear: null,
      quote: "Some obey the algorithm. I design it.",
      social: [
        {
          name: "LinkedIn",
          link: `https://www.linkedin.com/in/kadhim-jasim-18a673339/`,
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
        {
          name: "Github",
          link: `https://github.com/kjasim98`,
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
      Photo: "null",
      joinYear: 2023,
      leaveYear: null,
      quote:
        "Why face calculus when I can optimize my snacks for maximum CPU (Calorie Processing Unit) efficiency?",
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
      linkedin: "mohammed-mousa-5205012b6",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-goog/avatars/mohammed_mousa.png",
      joinYear: 2024,
      leaveYear: null,
      quote:
        "Your mind is programmable—if you’re not programming it, someone else will.",
      social: [
        {
          name: "LinkedIn",
          link: "mohammed-mousa-5205012b6",
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
      quote: "EXAMPLE Building the future, one step at a time.",
      social: [],
    },
    {
      name: "Hasan Aldelfi",
      role: "Designer",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/blacktskull_..jpg",
      joinYear: 2024,
      leaveYear: null,
      quote: "EXAMPLE Design is intelligence made visible.",
      social: [],
    },
    {
      name: "Kadhim Dheyaa",
      role: "Core Team Member",
      linkedin: "kadhim-dheyaa-7428b1216",
      github: "ka7om",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/kadhim_dheyaa_1fkhnmo.jpg",
      joinYear: 2023,
      leaveYear: null,
      quote: "It's not a bug - it's a feature!",
      social: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/kadhim-dheyaa-7428b1216",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
        {
          name: "Github",
          link: "https://github.com/ka7om",
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
      ],
    },
    {
      name: "Anas Malik",
      role: "Core Team Member",
      linkedin: "anas-malik-364b19262",
      github: "anas-aldolimi",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/anas_malik_ZLIIE1B.jpg",
      joinYear: 2023,
      leaveYear: 2024,
      quote: "Supporting innovation through fun.",
      social: [
        {
          name: "LinkedIn",
          link: "https://iq.linkedin.com/in/anas-malik-364b19262",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
        {
          name: "Github",
          link: "https://github.com/anas-aldolimi",
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
      ],
    },
    {
      name: "Sajjad Amer",
      role: "Core Team Member",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sajjad_amer.jpg",
      joinYear: 2024,
      leaveYear: null,
      quote: "EXAMPLE Empowering ideas through collaboration.",
      social: [],
    },
    {
      name: "Scar Ali Ammar",
      role: "Marketing",
      Photo:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/scar_ali_ammar.jpg",
      joinYear: 2024,
      leaveYear: null,
      quote: "EXAMPLE Connecting people through creative strategies.",
      social: [],
    },
    {
      name: "Wafaa Mutar",
      role: "Copy Writer",
      linkedin: "wafaa-j-mutar-7024ab364",
      Photo:
        "https://media.licdn.com/dms/image/v2/D4E03AQFibtsCOpJTlA/profile-displayphoto-shrink_200_200/B4EZaxGl84HoAY-/0/1746728019275?e=1752105600&v=beta&t=eepOWIr1neWFhM2WkyVkhs5uL-0USPNITxEFZ8GNWts",
      joinYear: 2024,
      leaveYear: null,
      quote: "Make learning your passion and always choose to keep going.",
      social: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/wafaa-j-mutar-7024ab364",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
      ],
    },
    {
      name: "Narjis Hayder",
      role: "Event Coordinator",
      linkedin: "narjis-al-absaly-0990a02b6",
      Photo:
        "https://media.licdn.com/dms/image/v2/D4E03AQHXDNyJXBC45Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716307325494?e=1752105600&v=beta&t=6-dXOhZByvh8wQmL9gG_r1ZDGISkaJ4NgE1nvkUCQTU",
      joinYear: 2023,
      leaveYear: 2025,
      quote: "Make learning your passion and always choose to keep going.",
      social: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/narjis-al-absaly-0990a02b6",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
      ],
    },
    {
      name: "Ali Faris Kamil",
      role: "Video Editor",
      linkedin: "ali-faris-7424b6307",
      github: "Ryunix5",
      Photo:
        "https://media.licdn.com/dms/image/v2/D4E03AQGBfXHaYHaYDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729113038592?e=1752105600&v=beta&t=pSksEi8ZnsmB7XooFDoKXFXNWWE0UhOdY0uwg7UQQc0",
      joinYear: 2024,
      leaveYear: null,
      quote:
        "The shortest route is the detour. It was the detour that was our shortest path.",
      social: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ali-faris-7424b6307",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
        {
          name: "Github",
          link: "https://github.com/Ryunix5",
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
      ],
    },
    {
      name: "Ameer Ghassan",
      role: "Graphic designer",
      linkedin: "ameer-ghassan-7a8a67221",
      github: "ameer23",
      Photo: "null",
      joinYear: 2024,
      leaveYear: null,
      quote: "Professional napper",
      social: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ameer-ghassan-7a8a67221",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
        {
          name: "Github",
          link: "https://github.com/ameer23",
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
      ],
    },
    {
      name: "Zain Mohammed",
      role: "Quality control",
      linkedin: "zainalaabiden-abotiheen-0205102b6",
      github: "abotiheen",
      Photo: "null",
      joinYear: 2023,
      leaveYear: 2024,
      quote: "To a canon, all men are equal",
      social: [
        {
          name: "LinkedIn",
          link:
            "https://www.linkedin.com/in/azainalaabiden-abotiheen-0205102b6",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        },
        {
          name: "Github",
          link: "https://github.com/abotiheen",
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
      ],
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
