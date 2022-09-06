//IMPORTS
import { IPaste } from "../types";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function PasteCard({ pastebody, title, date }: IPaste): JSX.Element {
  return (
    <>
    <Card>
      {title !== null && <Card.Header>{title}</Card.Header>}
      <Card.Body> <Card.Text> {pastebody} </Card.Text> 
    <Button variant="info" className="mr-1">
      Expand...
    </Button>

    </Card.Body>
    </Card>
    </>
  );
}
