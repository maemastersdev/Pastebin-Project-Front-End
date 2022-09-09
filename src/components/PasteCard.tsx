//IMPORTS
import { IPaste } from "../types";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../utils/baseURL";

export function PasteCard({
  pastebody,
  title,
  pastedate,
  id,
}: IPaste): JSX.Element {
  function handleDelete(id: number | undefined) {
    console.log(id);
    axios.delete(`${baseUrl}/pastes/${id}`);
  }
  function handleExpand(id: number | undefined) {
    console.log(id);
  }
  return (
    <>
      <Card className="pasteCard">
        {title !== null && <Card.Header>{title}</Card.Header>}
        <Card.Body>
          {" "}
          <Card.Text className="pastebody">{pastebody} </Card.Text>
          <Button
            variant="info"
            className="mr-1"
            onClick={() => handleExpand(id)}
          >
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
        <Card.Footer className="text-muted">{pastedate}</Card.Footer>
      </Card>
    </>
  );
}
