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
      img: musicImg, 
      github: "https://github.com/Denny-16/Music_player", 
      desc: "Spotify-inspired music player." 
    },
    { 
      title: "📈 Stock Market Portfolio", 
      img: stockImg, 
      github: "https://github.com/Denny-16/StockMarketPortFolio", 
      desc: "Track investments & charts." 
    },
    { 
      title: "📊 DSA Visualizer", 
      img: dsaImg, 
      github: "https://github.com/Denny-16/Dsa_visualizer", 
      desc: "DSA visualization + AI." 
    },
    { 
      title: "💧 Smart Water Management", 
      img: waterImg, 
      github: "https://github.com/Denny-16/SmartWaterManagement", 
      desc: "IoT water system." 
    },
    { 
      title: "⚛ Quantum Portfolio", 
      img: quantumImg, 
      github: "https://github.com/Denny-16/quantum-portfolio-fronten", 
      desc: "Quantum-powered optimizer." 
    },
    { 
      title: "🤝 Code & Connect", 
      img: codeconnectImg, 
      github: "https://github.com/Denny-16/code-Connect", 
      desc: "Coding + collaboration." 
    },
  ];

  return (
    <div className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-50 rounded-lg shadow hover:shadow-xl transition overflow-hidden">
            {/* ✅ Correct usage */}
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>

              <a 
                href={p.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
