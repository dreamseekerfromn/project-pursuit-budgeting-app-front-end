import { Link } from "react-router-dom";
//import './Nav.css';

export default function Nav() {
  return (
    <header>
      <nav>
        <h1>
          <Link to="/">
            Budget App
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/spending">Spending</Link>
          </li>
        </ul>
        <button>
          <Link to="/spending/new">New Spending</Link>
        </button>
        <button>
          <Link to="/income/new">New Income</Link>
        </button>
      </nav>
    </header>
  );
}
