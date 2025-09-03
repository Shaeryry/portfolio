import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">My Portfolio</Link>
        <div className="space-x-4">
          <Link to="/#skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/#projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
