import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link exact to="/">
        <button>Home</button>
      </Link>

      <Link exact to="/projects">
        <button>Projects</button>
      </Link>
    </nav>
  );
}

export default Navbar;
