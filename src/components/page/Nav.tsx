import { Link } from "react-router-dom";
//import './Nav.css';

/**
 * Nav()
 * =========================================
 * renders a navigator bar on the top of the page.
 *  
 * @returns {React.ReactElement}
 */
export default function Nav() {
  return (
    <header>
      <nav>
        <h2 style={{font:"Comic Sans MS"}}>
          <Link to="/">
            SY's Budget App
          </Link>
        </h2>
        <ul>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/spending">Spending</Link>
          </li>
        </ul>
        <button>
          <Link to="/new">New Entry</Link>
        </button>
      </nav>
    </header>
  );
}
