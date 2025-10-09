
const portfolioData = [
    {
        title: "Mobile and PWA Application for Real-time Notifications",
        description: "Designed and developed a real-time notification system, initially as a mobile application for iOS and Android using React Native, and later extended the same functionality to a Progressive Web App (PWA) using React.",
        technologies: ["React Native", "React (PWA)", "Node.js", "Express", "MongoDB", "Firebase Cloud Messaging (FCM)", "Web Push"],
        keyAchievements: [
            "Implemented secure login with session-based FCM token registration and cleanup.",
            "Used Firebase Cloud Messaging for Android push notifications and Web Push for iOS via the PWA.",
            "Replicated native app features in the PWA, ensuring consistent behavior and user experience across platforms.",
            "Built reusable UI components such as dynamic notification badges, session-aware headers, and alert displays."
        ]
    },
    {
        title: "Dashboard for Person Re-Identification (ReID)",
        description: "Developed a comprehensive dashboard application to support person re-identification (ReID) tasks, enabling effective visualization, search, and analysis of individual tracking data.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"],
        keyAchievements: [
            "Integrated advanced search and filter capabilities to efficiently manage large volumes of ReID data across multiple camera sources.",
            "Designed a responsive and user-friendly interface with real-time data updates to enhance tracking accuracy and operator efficiency.",
            "Enabled detailed profile views and history tracking to assist in monitoring and comparing re-identified individuals across time and location."
        ]
    },
    {
        title: "Configuration Tool for Live Camera Streams",
        description: "Developed a web-based dashboard that allows users to draw configuration lines on real-time camera frames to define regions of interest or motion detection zones.",
        technologies: ["React", "Node.js", "Express", "FFmpeg", "Docker"],
        keyAchievements: [
            "Integrated FFmpeg to stream camera feeds via URL and capture live frames dynamically.",
            "Implemented interactive line-drawing tools directly over video streams for accurate zone configuration.",
            "Delivered a responsive, user-friendly interface for efficient configuration management."
        ]
    },
    {
        title: "Image Annotation Application",
        description: "Created a tool for annotating images for analysis and ML training.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        keyAchievements: [
            "Draw shapes, add text, place markers.",
            "Stored structured annotations with real-time editing."
        ]
    },
    {
        title: "Company Website Development",
        description: "Designed and developed a professional, fully responsive website for a corporate client to enhance their online presence.",
        technologies: ["React", "Node.js", "Express"],
        keyAchievements: [
            "Built an SEO-friendly website with dynamic content management capabilities to allow non-technical users to manage site updates easily.",
            "Delivered a custom-tailored solution that met all client-specific branding and functionality requirements.",
            "Improved user engagement and accessibility through modern UI/UX design and mobile responsiveness."
        ]
    },
    {
        title: "User Authentication System",
        description: "Built a secure login system with persistent sessions.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Passport.js"],
        keyAchievements: [
            "JWT-based token authentication with cookie handling."
        ]
    }
];

export default portfolioData;
