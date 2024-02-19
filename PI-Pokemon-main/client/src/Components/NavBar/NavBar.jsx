import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/form">
          <button>Form</button>
        </Link>
      </ul>
      <SearchBar />
    </div>
  );
};

export default NavBar;
