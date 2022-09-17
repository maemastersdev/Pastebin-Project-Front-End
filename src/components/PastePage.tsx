import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IComment, IPaste } from "../types";
import { baseUrl } from "../utils/baseURL";
import { loadComments } from "../utils/loadComments";
import { AddNewComment } from "./AddNewComment";
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
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    loadSelectedPaste();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPaste]);

  async function handleDelete(id: string | undefined) {
    console.log(id);
    await axios.delete(`${baseUrl}/pastes/${id}`);
  }

  useEffect(() => {
    loadComments(setComments, id);
  }, [setComments, id]);

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
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">{paste.pastedate}</Card.Footer>
        </Card>
      )}
      <AddNewComment setComments={setComments} />
      {comments &&
        comments.map((comment) => (
          <CommentCard
            key={comment.commentid}
            commentbody={comment.commentbody}
            commentid={comment.commentid}
            date={comment.date}
            pasteid={comment.pasteid}
            setComments={setComments}
            id={id}
          />
        ))}
    </>
  );
}
