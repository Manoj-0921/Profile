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
export default Portfolio