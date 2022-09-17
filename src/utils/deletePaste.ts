import axios from "axios";
import { IPaste } from "../types";
import { baseUrl } from "./baseURL";
import { loadPastes } from "./loadPastes";

export async function handleDelete(
  setPastes: React.Dispatch<React.SetStateAction<IPaste[]>>,
  id: number | undefined
) {
  console.log(id);
  await axios.delete(`${baseUrl}/pastes/${id}`);
  loadPastes(setPastes);
}
