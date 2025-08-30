// src/components/Projects.js
import musicImg from "../images/music.png";
import stockImg from "../images/stock.png";
import dsaImg from "../images/dsa.png";
import waterImg from "../images/water.png";
import quantumImg from "../images/quantum.png";
import codeconnectImg from "../images/codeconnect.png";

export default function Projects() {
  const projects = [
    {
      title: "🎵 Music Player",
      description: "Spotify-inspired music player.",
      img: musicImg,
      github: "https://github.com/Denny-16/Music_player",
    },
    {
      title: "📈 Stock Market Portfolio",
      description: "Track investments & charts.",
      img: stockImg,
      github: "https://github.com/Denny-16/StockMarketPortFolio",
    },
    {
      title: "📊 DSA Visualizer",
      description: "DSA visualization + AI.",
      img: dsaImg,
      github: "https://github.com/Denny-16/Dsa_visualizer",
    },
    {
      title: "💧 Smart Water Management",
      description: "IoT water system.",
      img: waterImg,
      github: "https://github.com/Denny-16/SmartWaterManagement",
    },
    {
      title: "⚛ Quantum Portfolio",
      description: "Quantum-powered optimizer.",
      img: quantumImg,
      github: "https://github.com/Denny-16/quantum-portfolio-fronten",
    },
    {
      title: "🤝 Code & Connect",
      description: "Coding + collaboration.",
      img: codeconnectImg,
      github: "https://github.com/Denny-16/code-Connect",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Projects</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-lg shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* Project Image */}
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />

            {/* Project Info */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>

              {/* GitHub Link */}
              <div className="mt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
