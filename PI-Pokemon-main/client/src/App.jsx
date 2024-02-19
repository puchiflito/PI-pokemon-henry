import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import Home from "./Views/Home";
import Detail from "./Views/Detail";
import Form from "./Views/Form";
import Nav from "./Components/NavBar/NavBar";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
