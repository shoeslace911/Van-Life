import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="text-3xl flex justify-between px-12 py-8 font-inter bg-yellow-100">
      <Link to="/">
        <h1 className="font-extrabold text-3xl">#VANLIFE</h1>
      </Link>
      <div className="link text-2xl">
        <Link to="/about" className="pr-5 hover:underline">
          About
        </Link>
        <Link to="/vans" className="pr-5 hover:underline">
          Vans
        </Link>
      </div>
    </nav>
  );
}
