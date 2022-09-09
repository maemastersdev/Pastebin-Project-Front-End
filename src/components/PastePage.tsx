import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IComment, IPaste } from "../types";
import { baseUrl } from "../utils/baseURL";
import { CommentCard } from "./CommentCard";

export function PastePage(): JSX.Element {
  const { id } = useParams();

  const [paste, setPaste] = useState<IPaste>();
  const [comments, setComments] = useState<IComment[]>([]);
  async function loadSelectedPaste() {
    try {
      const response = await axios.get(`${baseUrl}/pastes/${id}`);
      const pasteData: IPaste = response.data[0];
      setPaste(pasteData);
      console.log(paste);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    loadSelectedPaste();
  }, [setPaste]);
  console.log("this is paste", paste);

  async function loadComments() {
    try {
      const response = await axios.get(`${baseUrl}/pastes/${id}/comments`);
      const data: IComment[] = response.data;
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    loadComments();
  }, [setComments]);
  function handleDeletePaste(id: string | undefined) {
    axios.delete(`${baseUrl}/pastes/${id}`);
  }
  console.log(paste);

  return (
    <>
      {paste && (
        <Card className="pasteCard">
          {paste.title !== null && <Card.Header>{paste.title}</Card.Header>}
          <Card.Body>
            {" "}
            <Card.Text>{paste.pastebody} </Card.Text>
            <Button
              variant="info"
              className="mr-1"
              key={id}
              onClick={() => handleDeletePaste(id)}
            >
              Delete
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">{paste.pastedate}</Card.Footer>
        </Card>
      )}
      {comments &&
        comments.map((comment) => (
          <CommentCard
            key={comment.commentid}
            commentbody={comment.commentbody}
            commentid={comment.commentid}
            commentdate={comment.commentdate}
            pasteid={comment.pasteid}
          />
        ))}
    </>
  );
}
