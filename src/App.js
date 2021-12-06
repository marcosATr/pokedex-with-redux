import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/pokedex" element={<Pokedex />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
