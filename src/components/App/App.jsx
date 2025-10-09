import React, { useState, useEffect } from 'react';
import Contact from '../Contact'; // Assuming Contact.jsx is in the same directory or adjust path
import './App.css';

// --- Reusable Data ---
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
];

// --- SVG Logo Components ---
const ReactLogo = () => (
    <svg className="w-16 h-16" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);

const MongoDbLogo = () => (
    <img src="/mongodb.svg" alt="MongoDB Logo" className="w-16 h-16" />
);

const ExpressLogo = () => (
    <img src="/express.svg" alt="Express.js Logo" className="w-24 h-14" />
);

const NodejsLogo = () => (
    <img src="/nodejs.svg" alt="Node.js Logo" className="w-16 h-16" />
);

const TypescriptLogo = () => (
    <img src="/typescript.svg" alt="TypeScript Logo" className="w-16 h-16" />
);

const JavascriptLogo = () => (
    <img src="/javascript.svg" alt="JavaScript Logo" className="w-16 h-16" />
);
const TailwindLogo = () => (
    <img src="/tailwind.svg" alt="Tailwind Logo" className="w-16 h-16" />
);
const PythonLogo = () => (
    <img src="/python.svg" alt="Python Logo" className="w-16 h-16" />
);
;
const SqlLogo = () => (
    <img src="/sql.svg" alt="SQL Logo" className="w-16 h-16" />
);
const LinuxLogo = () => (
    <img src="/linux.svg" alt="Linux Logo" className="w-16 h-16" />
);

// --- Data Arrays ---

const skillsData = [
    { name: "React", logo: <ReactLogo /> },
    { name: "MongoDB", logo: <MongoDbLogo /> },
    { name: "Express.js", logo: <ExpressLogo /> },
    { name: "Node.js", logo: <NodejsLogo /> },
    { name: "JavaScript", logo: <JavascriptLogo /> },
    { name: "TypeScript", logo: <TypescriptLogo /> },
    { name: "Tailwind", logo: <TailwindLogo /> },
    { name: "Python", logo: <PythonLogo /> },
    { name: "SQL", logo: <SqlLogo /> },
    { name: "Linux", logo: <LinuxLogo /> },
];

const portfolioData = [
    { src: "https://placehold.co/600x400/111827/ec4899?text=MERN+E-commerce", alt: "MERN E-commerce" },
    { src: "https://placehold.co/600x400/111827/4f46e5?text=Java/SQL+API", alt: "Java/SQL API" },
    { src: "https://placehold.co/600x400/111827/ec4899?text=Python+Data+Script", alt: "Python Data Script" },
    { src: "https://placehold.co/600x400/111827/4f46e5?text=React+Dashboard", alt: "React Dashboard" },
    { src: "https://placehold.co/600x400/111827/ec4899?text=Node.js+Backend", alt: "Node.js Backend" },
    { src: "https://placehold.co/600x400/111827/4f46e5?text=Full+Stack+Project", alt: "Full Stack Project" },
];

// --- Helper Components ---
const GradientText = ({ children }) => (
    <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
        {children}
    </span>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold mb-2">{children}</h2>
);

const SectionSubtitle = ({ children }) => (
    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{children}</p>
);

// --- Section Components ---

const Header = ({ isMenuOpen, setMenuOpen, isScrolled }) => (
    <header className={`bg-black/60 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-indigo-500/10' : ''}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold">
                <GradientText>Manoj SJ</GradientText>
            </a>
            <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="hover:text-indigo-400 transition-colors duration-300">
                        {link.label}
                    </a>
                ))}
            </nav>
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
            {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block py-2 hover:text-indigo-400" onClick={() => setMenuOpen(false)}>
                    {link.label}
                </a>
            ))}
        </div>
    </header>
);

const Hero = () => (
    <section id="home" className="min-h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/4f46e5?text=Manoj+SJ')" }}>
        <div className="container mx-auto px-6 text-center">
            <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-lg inline-block">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Hi, I'm <GradientText>Manoj SJ</GradientText>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    A MERN Stack Developer with additional skills in Python, Core Java, SQL, and Linux.
                </p>
                <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 inline-block">
                    Get in Touch
                </a>
            </div>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img src="https://placehold.co/600x400/1f2937/ffffff?text=Developer+Setup" alt="About Me" className="rounded-xl shadow-2xl w-full" />
                </div>
                <div className="md:w-1/2">
                    <SectionTitle>About <GradientText>Me</GradientText></SectionTitle>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        I'm a passionate MERN stack developer focused on building modern, scalable web applications. My primary expertise is in creating dynamic user experiences with React, Node.js, Express, and MongoDB.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        I also leverage my skills in Core Java, SQL, Python, and Linux to build robust back-end services and handle a variety of development tasks. I'm dedicated to writing clean, efficient code to create elegant solutions for complex problems.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const Skills = () => (
    <section id="skills" className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
            <SectionTitle>My Technical <GradientText>Skills</GradientText></SectionTitle>
            <SectionSubtitle>
                I have experience with a variety of modern technologies for front-end and back-end development.
            </SectionSubtitle>
            <div className="group relative w-full overflow-hidden mt-12 skill-container">
                <div className="flex animate-scroll group-hover:animation-pause">
                    {[...skillsData, ...skillsData].map((skill, index) => (
                        <div key={index} className="flex-shrink-0 w-48 h-32 mx-4 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl flex justify-center items-center">
                            {skill.logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const Portfolio = () => (
    <section id="portfolio" className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
            <SectionTitle>My <GradientText>Portfolio</GradientText></SectionTitle>
            <SectionSubtitle>A glimpse into some of the projects I am proud of.</SectionSubtitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.map((item, index) => (
                    <img key={index} src={item.src} alt={item.alt} className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
                ))}
            </div>
        </div>
    </section>
);



const Footer = () => (
    <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; 2025 Manoj SJ. All rights reserved.</p>
        </div>
    </footer>
);

// --- Main App Component ---
export default function App() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-[#0a0a0a] text-gray-200 font-['Inter',_sans-serif]">
            <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} isScrolled={isScrolled} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
               
            </main>
            <Footer />
        </div>
    );
}
