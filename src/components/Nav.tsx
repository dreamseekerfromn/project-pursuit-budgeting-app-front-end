import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Budget App
          </Link>
        </h1>
      </article>
      <nav>
        <ul>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/spening">Spending</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
