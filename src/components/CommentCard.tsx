import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { IComment } from "../types";
import { baseUrl } from "../utils/baseURL";

export function CommentCard({
  commentbody,
  date,
  pasteid,
  commentid,
}: IComment): JSX.Element {
  function handleDeleteComment(commentid: number) {
    console.log(commentid);
    console.log(pasteid);
    axios.delete(`${baseUrl}/pastes/${pasteid}/comments/${commentid}`);
  }

  return (
    <>
      <Card className="comment-card">
        <Card.Body>
          <Card.Text>{commentbody}</Card.Text>
          <Button
            variant="info"
            className="mr-1"
            key={commentid}
            onClick={() => handleDeleteComment(commentid)}
          >
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{date}</Card.Footer>
      </Card>
    </>
  );
}
