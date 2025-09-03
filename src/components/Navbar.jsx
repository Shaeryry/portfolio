export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">My Portfolio</a>
        <div className="space-x-4">
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="mailto:your@email.com" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}