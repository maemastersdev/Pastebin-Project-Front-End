//IMPORTS
import { IPaste } from "../types";

export function PasteCard({ pastebody, title, date }: IPaste): JSX.Element {
  return (
    <>
      {title !== null && <h1>{title}</h1>}
      <p> {pastebody} </p>
      <p> {date} </p>
    </>
  );
}
