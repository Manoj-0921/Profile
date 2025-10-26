import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaVoicemail } from "react-icons/fa";


// Custom typing effect (no external library)
const TypingEffect = ({ sequence, speed = 70, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [seqIdx, setSeqIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset state when sequence changes
  useEffect(() => {
    setDisplayedText("");
    setSeqIdx(0);
    setCharIdx(0);
    setIsDeleting(false);
  }, [sequence]);

  useEffect(() => {
    const current = sequence[seqIdx];
    let timeout;
    if (typeof current === "string") {
      if (!isDeleting && charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + current.charAt(charIdx));
          setCharIdx((prev) => prev + 1);
        }, speed);
      } else if (isDeleting && charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIdx((prev) => prev - 1);
        }, speed / 2);
      } else if (!isDeleting && charIdx === current.length) {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIdx === 0) {
        setIsDeleting(false);
        setSeqIdx((prev) => (prev + 2) % sequence.length);
      }
    } else if (typeof current === "number") {
      timeout = setTimeout(
        () => setSeqIdx((prev) => (prev + 1) % sequence.length),
        current
      );
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, seqIdx, sequence, speed]);

  useEffect(() => {
    if (typeof sequence[seqIdx] === "string" && !isDeleting) setCharIdx(0);
  }, [seqIdx, sequence, isDeleting]);

  return (
    <h2 className={className}>
      {displayedText}
      <span className="inline-block w-1 h-8 bg-cyan-400 align-middle ml-1 animate-pulse" />
    </h2>
  );
};

const Hero = () => {
  const typingSequence = [
    "a Full Stack Developer",
    1000,
    "a Frontend Developer",
    1000,
    "a Backend Developer",
    1000,
    "an App Developer",
    1000,
  ];

  return (
    <div className="relative flex items-center justify-center h-screen text-center text-white overflow-hidden bg-gray-950">
      {/* Subtle Background Pulse Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-96 h-96 bg-cyan-800 rounded-full opacity-10 blur-3xl animate-pulse duration-[5000ms]"></div>
      </div>

      {/* Overlay for Content Contrast */}
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-6 py-20">
        <h1 className="text-5xl md:text-8xl font-black mb-4 drop-shadow-xl tracking-tighter">
          I'm Manoj S J
        </h1>
        <TypingEffect
          sequence={typingSequence}
          speed={70}
          className="text-2xl md:text-5xl font-extrabold mb-4 drop-shadow text-cyan-400"
        />
        <p className="text-lg md:text-xl text-gray-300 mb-12 font-light drop-shadow max-w-md mx-auto">
          Building and shipping high-quality, scalable web applications that solve
          real-world problems.
        </p>
        <a
          href="#portfolio"
          className="inline-block px-12 py-3 text-lg font-bold text-gray-900 bg-cyan-400 rounded-full shadow-2xl hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 mb-16 border-4 border-cyan-400 hover:border-cyan-300"
        >
          Explore My Work
        </a>
        <div className="flex justify-center gap-8 mt-4">
          <a
            href="https://www.linkedin.com/in/manoj-sj-75636b19b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors text-3xl opacity-75 hover:opacity-100"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/Manoj-0921"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors text-3xl opacity-75 hover:opacity-100"
            aria-label="GitHub Profile"
          >
            <FaGithub size={32} />
          </a>
       
        </div>
      </div>

    
    </div>
  );
};

export default Hero;
