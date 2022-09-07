import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { IPaste } from "../types";
import { PasteCard } from "./PasteCard";
import { AddNewPaste } from "./AddNewPaste";

export function MostRecentPastes(): JSX.Element {
  const [pastes, setPastes] = useState<IPaste[]>([]);
  async function loadPastes() {
    try {
      const response = await axios.get(
        `https://mae-sevgi-pastebin.herokuapp.com/pastes`
      );
      const data: IPaste[] = response.data;
      setPastes(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    loadPastes();
  }, [pastes]);

  return (
    <>
      <AddNewPaste />
      {pastes &&
        pastes.map((paste) => (
          <PasteCard
            key={paste.id}
            pastebody={paste.pastebody}
            title={paste.title}
            date={paste.date}
          />
        ))}
    </>
  );
}
