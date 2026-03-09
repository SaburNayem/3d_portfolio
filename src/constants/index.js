import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        level: "Advanced",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
        level: "Advanced",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        level: "Advanced",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        level: "Advanced",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        level: "Advanced",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        level: "Advanced",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
        level: "Intermediate",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
        level: "Intermediate",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
        level: "Intermediate",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
        level: "Advanced",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
        level: "Advanced",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
        level: "Expert",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
        level: "Advanced",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
        level: "Intermediate",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        level: "Expert",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
        level: "Advanced",
    }
];

export const experiences = [
    {
        title: "Frontend Engineer",
        company_name: "Starbucks Digital",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        summary: "Built customer-facing interfaces for ordering, loyalty, and account flows.",
        impact: "2.3M monthly active users supported across responsive web properties",
        points: [
            "Shipped modular React components for menu, cart, and checkout journeys.",
            "Collaborated with product and design to raise completion rate and reduce cart friction.",
            "Improved core web vitals by optimizing bundles and lazy-loading non-critical views.",
            "Set testing and review standards that reduced release regressions over two quarters.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla Energy",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "January 2021 - February 2022",
        summary: "Led mobile feature delivery for post-purchase account experiences.",
        impact: "Reduced average support tickets by 18% with better self-service flows",
        points: [
            "Developed reusable React Native modules for onboarding and account verification.",
            "Integrated analytics events and funnel reporting to guide product iterations.",
            "Partnered with backend engineers to tighten API contracts and error handling.",
            "Drove release quality through CI checks, QA notes, and bug bash workflows.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify Partner Team",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "January 2022 - January 2023",
        summary: "Created performance-focused storefront experiences for growing brands.",
        impact: "Supported launches for 20+ merchant stores in multiple regions",
        points: [
            "Built custom storefront sections with React and Next.js for campaign landing pages.",
            "Implemented SSR, caching, and media optimization to speed up catalog pages.",
            "Added localized content flows and region-aware pricing presentation.",
            "Mentored junior developers through pair programming and structured code reviews.",
        ],
    },
    {
        title: "Senior Full-Stack Developer",
        company_name: "Meta Product Studio",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "January 2023 - Present",
        summary: "Owning end-to-end delivery across web apps, APIs, and analytics tooling.",
        impact: "Increased team throughput by 27% with reusable architecture decisions",
        points: [
            "Architected full-stack features with React, Node.js, and typed API boundaries.",
            "Designed internal dashboards that improved experiment monitoring and reporting.",
            "Implemented design system tokens for better consistency across product surfaces.",
            "Coached team members on system design, debugging, and engineering planning.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SaburNayem/3d_portfolio',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/md-nayem-hossen',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Atlas Price Radar',
        description: 'A pricing intelligence app that tracks marketplace products, detects discount windows, and sends threshold alerts.',
        stack: ["Next.js", "Node.js", "MongoDB", "Puppeteer"],
        timeline: "6 weeks",
        outcome: "Cut manual price checks by 90% for power users",
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Threadline Community',
        description: 'A full-stack discussion platform with rich post creation, moderation, and personalized activity feeds.',
        stack: ["React", "TypeScript", "Express", "PostgreSQL"],
        timeline: "8 weeks",
        outcome: "Achieved 34% weekly returning users in beta",
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'DriveFinder Pro',
        description: 'A vehicle discovery interface with filters, side-by-side comparison, and financing estimators.',
        stack: ["Next.js", "Tailwind CSS", "REST APIs"],
        timeline: "5 weeks",
        outcome: "Reduced search-to-shortlist time by 42%",
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Snapgram+',
        description: 'A social media app with photo publishing, follow graph, notifications, and content discovery.',
        stack: ["React", "Appwrite", "Tailwind CSS"],
        timeline: "7 weeks",
        outcome: "Handled 10K+ uploaded assets during stress testing",
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Estate Pulse',
        description: 'A modern real-estate discovery platform with geospatial filters, saved searches, and inquiry workflows.',
        stack: ["React", "Mapbox", "Firebase"],
        timeline: "9 weeks",
        outcome: "Improved qualified inquiry conversion by 21%",
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Summiz AI',
        description: 'A long-form summarization assistant that generates concise takeaways with source links and prompt presets.',
        stack: ["React", "OpenAI API", "Vite"],
        timeline: "4 weeks",
        outcome: "Saved ~6 hours per week for research-heavy users",
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: motion,
        theme: 'btn-back-orange',
        name: 'Motion Studio',
        description: 'An interactive animation playground for web components with timeline controls and export presets.',
        stack: ["React", "Framer Motion", "TypeScript"],
        timeline: "3 weeks",
        outcome: "Enabled non-engineers to prototype interactions in minutes",
        link: 'https://github.com/adrianhajdin',
    },
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: 'OpsBoard',
        description: 'A delivery performance dashboard with live status indicators, SLA tracking, and drill-down analytics.',
        stack: ["React", "Node.js", "Chart.js"],
        timeline: "6 weeks",
        outcome: "Decreased incident response time by 31%",
        link: 'https://github.com/adrianhajdin',
    }
];

export const stats = [
    { label: "Years Building", value: "5+" },
    { label: "Projects Delivered", value: "40+" },
    { label: "Happy Clients", value: "18" },
    { label: "Avg. Launch Time", value: "6 wks" },
];

export const services = [
    {
        title: "Product Engineering",
        description: "End-to-end web app delivery from architecture to launch.",
    },
    {
        title: "UI Systems",
        description: "Scalable component libraries and design token setup.",
    },
    {
        title: "Performance Tuning",
        description: "Core Web Vitals and runtime optimization for smoother UX.",
    },
    {
        title: "Technical Leadership",
        description: "Planning, mentoring, and execution support for product teams.",
    },
];

