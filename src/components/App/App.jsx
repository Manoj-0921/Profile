import React, { useState, useEffect, useRef } from 'react';
import Contact from '../Contact'; // Assuming Contact.jsx is in the same directory or adjust path
import Portfolio from '../Portfolio';
import About  from '../About';
import Hero from "../Hero/Hero"
import './App.css';

// --- Reusable Data ---
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
];

// --- SVG Logo Components ---
const ReactLogo = ({ className = "" }) => (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);

const MongoDbLogo = ({ className = "" }) => (
    <img src="/mongodb.svg" alt="MongoDB Logo" className={className} />
);

const ExpressLogo = ({ className = "" }) => (
    <img src="/express.svg" alt="Express.js Logo" className={className} />
);

const NodejsLogo = ({ className = "" }) => (
    <img src="/nodejs.svg" alt="Node.js Logo" className={className} />
);

const TypescriptLogo = ({ className = "" }) => (
    <img src="/typescript.svg" alt="TypeScript Logo" className={className} />
);

const JavascriptLogo = ({ className = "" }) => (
    <img src="/javascript.svg" alt="JavaScript Logo" className={className} />
);
const TailwindLogo = ({ className = "" }) => (
    <img src="/tailwind.svg" alt="Tailwind Logo" className={className} />
);
const PythonLogo = ({ className = "" }) => (
    <img src="/python.svg" alt="Python Logo" className={className} />
);
;
const SqlLogo = ({ className = "" }) => (
    <img src="/sql.svg" alt="SQL Logo" className={className} />
);
const LinuxLogo = ({ className = "" }) => (
    <img src="/linux.svg" alt="Linux Logo" className={className} />
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

// const Hero = () => (
//     <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
//         <video 
//             autoPlay 
//             loop 
//             muted 
//             className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         >
//             <source src="/react1.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//         </video>
//         <div className="relative z-10 container mx-auto px-6">
//             <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-lg inline-block">
//                 <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//                     Hi, I'm <GradientText>Manoj SJ</GradientText>
//                 </h1>
//                 <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//                     A MERN Stack Developer with additional skills in Python, Core Java, SQL, and Linux.
//                 </p>
//                 <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 inline-block">
//                     Get in Touch
//                 </a>
//             </div>
//         </div>
//     </section>
// );

const Skills = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let reqId;
        let speed = 0.7; // Adjust for desired speed

        function scrollStep() {
            if (!scrollContainer) return;
            // If we've scrolled past the first set, reset to start
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            } else {
                scrollContainer.scrollLeft += speed;
            }
            reqId = requestAnimationFrame(scrollStep);
        }

        reqId = requestAnimationFrame(scrollStep);

        // Pause on hover
        const pause = () => cancelAnimationFrame(reqId);
        const resume = () => { reqId = requestAnimationFrame(scrollStep); };

        scrollContainer.addEventListener('mouseenter', pause);
        scrollContainer.addEventListener('mouseleave', resume);

        return () => {
            cancelAnimationFrame(reqId);
            scrollContainer.removeEventListener('mouseenter', pause);
            scrollContainer.removeEventListener('mouseleave', resume);
        };
    }, []);

    return (
        <section id="skills" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <SectionTitle>My Technical <GradientText>Skills</GradientText></SectionTitle>
                <SectionSubtitle>
                    I have experience with a variety of modern technologies for front-end and back-end development.
                </SectionSubtitle>
                <div
                    ref={scrollRef}
                    className="relative w-full overflow-x-hidden mt-12 skill-container whitespace-nowrap"
                    style={{ cursor: 'grab' }}
                >
                    <div className="inline-flex">
                        {[...skillsData, ...skillsData].map((skill, index) => (
                            <div key={index} className="flex-shrink-0 w-24 h-24 md:w-48 md:h-32 mx-2 md:mx-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-8 rounded-xl flex justify-center items-center">
                                {React.cloneElement(skill.logo, { className: "w-12 h-12 md:w-16 md:h-16" })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// const Portfolio = () => (
//     <section id="portfolio" className="py-20 md:py-32">
//         <div className="container mx-auto px-6 text-center">
//             <SectionTitle>My <GradientText>Portfolio</GradientText></SectionTitle>
//             <SectionSubtitle>A glimpse into some of the projects I am proud of.</SectionSubtitle>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {portfolioData.map((item, index) => (
//                     <img key={index} src={item.src} alt={item.alt} className="rounded-lg shadow-lg w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
//                 ))}
//             </div>
//         </div>
//     </section>
// );



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
