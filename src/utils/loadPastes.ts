import axios from "axios";
import { IPaste } from "../types";
import { baseUrl } from "./baseURL";
interface ILoadPastes{
    setPastes:React.Dispatch<React.SetStateAction<IPaste[]>>;
}
export async function loadPastes({setPastes}:ILoadPastes) {
    try {
      const response = await axios.get(`${baseUrl}/pastes`);
      const data: IPaste[] = response.data;
      setPastes(data);
    } catch (err) {
      console.error(err);
    }
  }