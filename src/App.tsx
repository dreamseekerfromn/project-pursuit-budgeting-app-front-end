import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css'
import Spending from "./components/spending/Spending";
import SpendingNewEntryForm from "./components/spending/SpendingNewEntryForm";
import SpendingEditForm from "./components/spending/SpendingEditForm";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          {/* shows */}
          <Route path="/" element={<Home />} />
          <Route path="/spending" element={<Spending />} />
          <Route path="/spending/new" element={<SpendingNewEntryForm />} />
          <Route path="/spending/edit/:id" element={<SpendingEditForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
