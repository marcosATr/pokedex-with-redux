import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import NotFound from "./pages/NotFound";
import Legendary from "./pages/Legendary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/pokedex" element={<Pokedex />} />
          <Route exact path="/legendary" element={<Legendary />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
