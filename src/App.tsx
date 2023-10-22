import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
import Nav from "./components/page/Nav";
import Footer from "./components/page/Footer";
import './App.css';
import Spending from "./components/spending/Spending";
import SpendingNewEntryForm from "./components/spending/SpendingNewEntryForm";
import SpendingEditForm from "./components/spending/SpendingEditForm";
import SpendingSingleItemDetail from "./components/spending/SpendingSingleItemDetail";
import Income from "./components/income/Income";
import IncomeSingleItemDetails from "./components/income/IncomeSingleItemDetail";
import IncomeNewEntryForm from "./components/income/IncomeNewEntryForm";
import IncomeEditForm from "./components/income/IncomeEditForm";
import FourOFour from "./components/page/FoF";
import NewEntryForm from "./components/page/NewEntryForm";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          {/* shows */}
          <Route path="/" element={<Home />} />
          <Route path="/spending" element={<Spending />} />
          <Route path="/new" element={<NewEntryForm />} />
          <Route path="/spending/:id" element={<SpendingSingleItemDetail />} />
          <Route path="/spending/:id/edit" element={<SpendingEditForm />} />
          <Route path="/income" element={<Income />} />
          <Route path="/income/:id" element={<IncomeSingleItemDetails />} />
          <Route path="/income/:id/edit" element={<IncomeEditForm />} />
          <Route path='*' element={<FourOFour />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
