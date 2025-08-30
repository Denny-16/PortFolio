export default function Skills() {
  const categories = {
    "Languages": ["Python", "C++", "C", "Java", "JavaScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Django", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Tailwind CSS", "FastAPI", "Streamlit", "LangChain"],
    "Databases": ["MySQL", "MongoDB", "SQLite", "Redis", "Firebase"],
    "Cloud & APIs": ["AWS SageMaker", "Rekognition", "Lex", "OpenAI API", "Firebase Auth", "REST APIs", "WebSockets", "WebRTC"],
    "Tools & Other": ["Git", "GitHub", "Docker", "JWT Auth", "Middleware", "API Security", "Rate Limiting"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Skills</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(categories).map(([category, items], idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
            <ul className="text-gray-700 space-y-2">
              {items.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
