const About =()=>{
const GradientText = ({ children }) => (
    <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
        {children}
    </span>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold mb-2">{children}</h2>
);


return(
     <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
   <div className="w-[25rem] h-[25rem] rounded-full overflow-hidden shadow-2xl border-4 border-gray-700 mx-auto">
  <img
    src="manu.jpeg"
    alt="About Me"
    className="w-full h-full object-cover"
  />
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
)
}


export default About;
