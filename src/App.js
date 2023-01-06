import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
