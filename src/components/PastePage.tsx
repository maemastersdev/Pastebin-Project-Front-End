import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { IComment, IPaste } from "../types";
import { baseUrl } from "../utils/baseURL";
import { CommentCard } from "./CommentCard";

interface IPastePage {
  IPaste: IPaste;
  IComment: IComment;
}

export function PastePage(
  { pastebody, title, id, pastedate }: IPaste,
  { commentbody, commentdate, commentid }: IComment
): JSX.Element {
  const [comments, setComments] = useState<IComment[]>([]);
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
  }, [comments]);
  function handleDeletePaste(id: number | undefined) {
    console.log(id);
    axios.delete(`${baseUrl}/pastes/${id}`);
  }
  return (
    <>
      <Card className="pasteCard">
        {title !== null && <Card.Header>{title}</Card.Header>}
        <Card.Body>
          {" "}
          <Card.Text>{pastebody} </Card.Text>
          <Button
            variant="info"
            className="mr-1"
            key={id}
            onClick={() => handleDeletePaste(id)}
          >
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{pastedate}</Card.Footer>
      </Card>

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
