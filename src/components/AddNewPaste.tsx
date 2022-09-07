import axios from "axios";
import { useState } from "react";

export function AddNewPaste(): JSX.Element {
  const [titleInput, setTitleInput] = useState<string>("");
  const [bodyInput, setBodyInput] = useState<string>("");
  function submitPaste() {
    axios
      .post(`https://mae-sevgi-pastebin.herokuapp.com/pastes`, {
        pastebody: bodyInput,
        title: titleInput,
      })
      .then(() => setBodyInput(""))
      .then(() => setTitleInput(""));
  }
  return (
    <>
      <input
        type="text"
        placeholder="title (optional)"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="type paste here..."
        value={bodyInput}
        onChange={(e) => setBodyInput(e.target.value)}
      ></input>
      <button onClick={() => submitPaste()}>Submit</button>
    </>
  );
}
