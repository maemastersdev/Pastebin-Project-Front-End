import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IComment } from "../types";
import { baseUrl } from "../utils/baseURL";
import { loadComments } from "../utils/loadComments";

interface IAddNewComment {
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}
export function AddNewComment({ setComments }: IAddNewComment): JSX.Element {
  const { id } = useParams();
  const [commentInput, setCommentInput] = useState<string>("");
  async function submitComment() {
    axios
      .post(`${baseUrl}/pastes/${id}/comments`, {
        commentbody: commentInput,
      })
      .then(() => setCommentInput(""))
      .then(() => loadComments(setComments, id));
  }
  return (
    <>
      <h2 className="secondTitle">Comments</h2>
      <input
        placeholder="type comment here"
        type="text"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        className="form-control"
      ></input>
      <Button variant="info" className="mr-1" onClick={() => submitComment()}>
        Submit
      </Button>
    </>
  );
}
