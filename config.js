import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Eza Aditya N",
    },
    social: {
        github: "jaaaalagi",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Moneaze Financial Management App",
            description: "A financial management solution for personal and business budgeting. Delivered high-fidelity designs and interactive prototypes to simplify cash flow tracking.",
            image: "/projects/Moneaze 1.png",
            technologies: ["Figma", "UI/UX Design", "Mobile App", "Prototype"],
            github: "#",
            demo: "https://www.figma.com/proto/SLwyN3KjjRYp9fuHQlihVj/App-Moneaze?page-id=0%3A1&node-id=2004-482&viewport=348%2C365%2C0.13&t=NlETS6rlKFGQgZkg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2004%3A482"
        },
        {
            id: 2,
            title: "CheckMyKicks Website",
            description: "A web platform for sneaker authenticity verification (legit check). Handled the end-to-end process from UI/UX prototyping in Figma to Front-End implementation using React.js.",
            image: "/projects/project-2.png",
            technologies: ["Figma", "Web Design", "React.js", "JavaScript"],
            github: "#",
            demo: "https://www.checkmykicks.my.id/"
        },
        {
            id: 3,
            title: "ArchiDeck: Elevating Architectural Design with Modern UI/UX Innovation",
            description: "Designed an intuitive UI/UX and interactive prototypes for ArchiDeck, an innovative platform connecting architects and clients. Focused on creating a seamless, user-friendly experience that highlights architectural designs and builds a strong brand identity.",
            image: "/projects/project-3.png",
            technologies: ["Figma", "UI/UX Design", "Prototyping", "Branding"],
            github: "#",
            demo: "https://www.figma.com/proto/7bWfcebe3GnWQTnw7JIPjP/ArchiDeck?page-id=0%3A1&node-id=7-15&viewport=571%2C249%2C0.16&t=u3JRdJ58JevmEyjR-1&scaling=min-zoom&content-scaling=fixed"
        },
        {
            id: 4,
            title: "Crafting a Complete Brand Identity for ArchiDeck from Logo to Visual System",
            description: "Designed a full brand identity for ArchiDeck, including logo creation, custom typography, color palette, and branding elements, ensuring a professional, cohesive, and impactful visual identity that reflects the brand’s essence.",
            image: "/projects/project-4.png",
            technologies: ["Brand Identity Design", "Graphic Design", "Design Strategy", "Custom Typography", "Figma"],
            github: "#",
            demo: "https://drive.google.com/file/d/1iAk-76AdgQXGRgY-2uvEGFWIiJVjZegr/view?usp=sharing"
        },
        {
            id: 5,
            title: "Annual Calendar Design for Majelis Taklim Al-Khairat",
            description: "Created a personalized annual calendar for Majelis Taklim Al-Khairat, from theme selection to photo curation and layout design. Delivered a polished final product that effectively combined visuals and branding, resulting in client satisfaction.",
            image: "/projects/project-5.png",
            technologies: ["Python", "TensorFlow.js", "D3.js", "Next.js", "WebGL", "TypeScript"],
            github: "#",
            demo: "https://drive.google.com/file/d/1vl745s7TyoZN5w5TD9UblBqeltfyLr6V/view?usp=sharing"
        }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Advanced" },
                { name: "Express.js", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" },
                { name: "Photoshop", level: "Intermediate" },
                { name: "Git", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Frontend Developer",
            company: "SelectSkillSet",
            period: "2024 - Present",
            location: "Remote",
            description: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
            responsibilities: [
                "Building responsive and interactive user interfaces using React and Next.js",
                "Implementing modern UI/UX designs with TailwindCSS and Framer Motion",
                "Optimizing application performance and ensuring cross-browser compatibility",
                "Collaborating with design and backend teams to deliver high-quality features"
            ],
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "Framer Motion", "TypeScript"]
        },
        {
            position: "Full Stack Developer",
            company: "AGROTERA",
            period: "2025 - 2026",
            location: "Remote",
            description: "Developed and maintained full-stack website, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
            responsibilities: [
                "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
                "Implemented RESTful APIs and integrated third-party services",
                "Built responsive user interfaces and optimized application performance",
                "Worked on database design and backend architecture"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "MERN Stack"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@jaaaalagi",
            link: `https://github.com/jaaaalagi`
        },
        {
    icon: <HiMail className="w-5 h-5" />,
    label: "Email",
    value: "ezaadityanugroho1@gmail.com",
    link: "mailto:ezaadityanugroho1@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Jakarta, Indonesia",
            link: null
        }
    ]
}