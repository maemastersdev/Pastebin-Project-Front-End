//IMPORTS
import { IPaste } from "../types";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../utils/baseURL";
import { Link } from "react-router-dom";
import { useState } from "react";


export function PasteCard({
  pastebody,
  title,
  pastedate,
  id,
}: IPaste): JSX.Element {
  const [selectedPasteid, setSelectedPasteid] = useState<number>();
  async function handleDelete(id: number | undefined) {
    console.log(id);
    await axios.delete(`${baseUrl}/pastes/${id}`);
   
  }

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
function loadPastes() {
  throw new Error("Function not implemented.");
}

