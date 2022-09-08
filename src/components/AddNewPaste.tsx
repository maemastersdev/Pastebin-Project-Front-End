import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../utils/baseURL";
import { Button } from "react-bootstrap";

export function AddNewPaste(): JSX.Element {
  const [titleInput, setTitleInput] = useState<string>("");
  const [bodyInput, setBodyInput] = useState<string>("");
  function submitPaste() {
    axios
      .post(`${baseUrl}/pastes/newpaste`, {
        pastebody: bodyInput,
        title: titleInput,
      })
      .then(() => setBodyInput(""))
      .then(() => setTitleInput(""));
  }
  return (
    <>
      <div className="form-outline">
        <input
          type="text"
          className="form-control"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Title (optional)"
        />
      </div>
      <div className="form-group purple-border">
        <textarea
          className="form-control"
          rows={5}
          placeholder="type paste here..."
          value={bodyInput}
          onChange={(e) => setBodyInput(e.target.value)}
        ></textarea>
      </div>
      <Button variant="info" className="mr-1" onClick={() => submitPaste()}>
        Submit
      </Button>
    </>
  );
}
