import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from "./nav.module.css";
const NavBar = () => {
  return (
    <header>
      <ul>
        <Link to="/home">
          <button className={style.btn}>Home</button>
        </Link>{" "}
        <Link to="/form">
          <button className={style.btn}>Form</button>
        </Link>
      </ul>
      <SearchBar />
    </header>
  );
};

export default NavBar;
