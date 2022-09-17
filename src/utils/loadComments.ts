import axios from "axios";
import React from "react";
import { IComment } from "../types";
import { baseUrl } from "./baseURL";

export async function loadComments(
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>,
  id: string | undefined
): Promise<void> {
  try {
    const response = await axios.get(`${baseUrl}/pastes/${id}/comments`);
    const data: IComment[] = response.data;
    setComments(data);
  } catch (err) {
    console.error(err);
  }
}
