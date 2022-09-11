import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { IPaste } from "../types";
import { PasteCard } from "./PasteCard";
import { baseUrl } from "../utils/baseURL";
import { loadPastes } from "../utils/loadPastes";

export function MostRecentPastes(): JSX.Element {
  const [pastes, setPastes] = useState<IPaste[]>([]);
  
  useEffect(() => {
    loadPastes(setPastes);
  }, [setPastes]);

  return (
    <>
      <h2 className="secondTitle">Latest Ten Pastes</h2>
      {pastes &&
        pastes.map((paste) => (
          <PasteCard
            id={paste.id}
            key={paste.id}
            pastebody={paste.pastebody}
            title={paste.title}
            pastedate={paste.pastedate}
          />
        ))}
    </>
  );
}
