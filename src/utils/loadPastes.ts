import axios from "axios";
import { IPaste } from "../types";
import { baseUrl } from "./baseURL";

export async function loadPastes(
  setPastes: React.Dispatch<React.SetStateAction<IPaste[]>>
): Promise<void> {
  try {
    const response = await axios.get(`${baseUrl}/pastes`);
    const data: IPaste[] = response.data;
    setPastes(data);
  } catch (err) {
    console.error(err);
  }
}
