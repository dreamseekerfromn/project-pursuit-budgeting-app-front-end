import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          {/* shows */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
