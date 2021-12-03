import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
