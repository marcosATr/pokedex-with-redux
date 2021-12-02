import Header from "./components/header/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
