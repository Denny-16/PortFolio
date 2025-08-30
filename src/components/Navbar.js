const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-gray-800">Denny Satyala</h1>

        {/* Menu + Resume button */}
        <div className="flex gap-6 items-center">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button (highlighted like Swiggy Order Now) */}
          
        </div>
      </div>
    </nav>
  );
}
