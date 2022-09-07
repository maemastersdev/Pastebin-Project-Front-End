import { MostRecentPastes } from "./components/MostRecentPastes";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <h1 className="title">Mae and Sevgi's Pastebox</h1>
      <MostRecentPastes />
    </>
  );
}

export default App;
