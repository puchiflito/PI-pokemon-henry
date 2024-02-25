import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the PokeDex</h1>
      <h4>
        We will be able to see, create, the pokemon that you like the most
      </h4>

      <Link to="/home">
        <h4>let's start</h4>
      </Link>
    </div>
  );
};

export default LandingPage;
