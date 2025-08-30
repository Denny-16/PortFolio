export default function Skills() {
  const skills = [
    "Python", "C++", "JavaScript", "React", "Node.js", "Express",
    "Django", "MongoDB", "Firebase", "Tailwind", "AWS", "Docker"
  ];

  return (
    <div className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
