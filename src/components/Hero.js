export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-50 to-blue-100">
      <h1 className="text-5xl font-bold">
        Hi, I’m <span className="text-blue-600">Denny Satyala</span>
      </h1>
      <p className="mt-4 text-xl text-gray-700">Full Stack Developer</p>
      <a
        href="/resume.pdf"
        download
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
}
