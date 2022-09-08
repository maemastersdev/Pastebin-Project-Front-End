import { MostRecentPastes } from "./components/MostRecentPastes";
import "./App.css";
import { AddNewPaste } from "./components/AddNewPaste";

function App(): JSX.Element {
  return (
    <>
      <h1 className="title">Mae and Sevgi's Pastebox</h1>
      <AddNewPaste />
      <MostRecentPastes />
    </>
  );
}

export default App;
