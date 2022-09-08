//IMPORTS
import { IPaste } from "../types";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../utils/baseURL";

export function PasteCard({ pastebody, title, date, id }: IPaste): JSX.Element {
  function handleDelete(id: number | undefined) {
    console.log(id);
    axios.delete(`${baseUrl}/pastes/${id}`);
  }
  return (
    <>
      <Card className="pasteCard">
        {title !== null && <Card.Header>{title}</Card.Header>}
        <Card.Body>
          {" "}
          <Card.Text className="pastebody">{pastebody} </Card.Text>
          <Button variant="info" className="mr-1">
            Expand...
          </Button>
          <Button
            variant="info"
            className="mr-1"
            key={id}
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{date}</Card.Footer>
      </Card>
    </>
  );
}
