import portfolioData from "./portfolioData";

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


const PortfolioItem = ({ item }) => (
    <div className="rounded-lg shadow-lg bg-gray-900/50 p-6 flex flex-col h-full transition-transform duration-300 hover:scale-105">
        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
        {item.description && <p className="text-gray-400 mb-4 flex-grow">{item.description}</p>}
        
        {item.technologies && (
            <div className="flex flex-wrap gap-2 my-4">
                {item.technologies.map((tech, i) => (
                    <span key={i} className="text-sm bg-white/5 px-2 py-1 rounded-full border border-white/10 text-gray-300">{tech}</span>
                ))}
            </div>
        )}

        <div className="mt-auto flex gap-4">
            {item.liveUrl && (
                <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live Demo
                </a>
            )}
            {item.sourceUrl && (
                <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                    Source Code
                </a>
            )}
        </div>
    </div>
);

const Portfolio = () => (
    <section id="portfolio" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
            <div className="text-center">
                <SectionTitle>My <GradientText>Portfolio</GradientText></SectionTitle>
                <SectionSubtitle>A glimpse into some of the projects I am proud of.</SectionSubtitle>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                ))}
            </div>
        </div>
    </section>
);

export default Portfolio;