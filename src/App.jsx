import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./comp/About";
import Home from "./comp/Home";
import Nav from "./comp/Nav";
import Vans from "./comp/Vans";
import "../src/comp/server";

// App will be our daddy
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/vans" element={<Vans />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
