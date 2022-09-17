//IMPORTS
import { IPasteCard } from "../types";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { handleDelete } from "../utils/deletePaste";

export function PasteCard({
  id,
  pastebody,
  title,
  pastedate,
  setPastes,
}: IPasteCard): JSX.Element {
  return (
    <>
      <Card className="pasteCard">
        {title !== null && <Card.Header>{title}</Card.Header>}
        <Card.Body>
          {" "}
          <Card.Text className="pastebody">{pastebody} </Card.Text>
          <Button variant="info" className="mr-1">
            <Link to={`/pastes/${id}`} key={id}>
              Expand...
            </Link>
          </Button>
          <Button
            variant="info"
            className="mr-1"
            key={id}
            onClick={() => handleDelete(setPastes, id)}
          >
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{pastedate}</Card.Footer>
      </Card>
    </>
  );
}
