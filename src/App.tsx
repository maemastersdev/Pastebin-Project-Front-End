import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
  return (
    <>
      <h1 className="title">Mae and Sevgi's Pastebox</h1>
      <nav className="links">
        <button className="linkButton">
          <Link to="/pastes">View most recent pastes</Link>
        </button>
        <button>
          <Link to="/pastes/newpaste">Add a new paste</Link>
        </button>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
