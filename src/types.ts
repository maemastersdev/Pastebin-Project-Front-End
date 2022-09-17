export interface IPaste {
  id?: number;
  pastebody: string;
  title: string | null;
  pastedate: string;
}

export interface IComment {
  commentid: number;
  pasteid: number;
  commentbody: string;
  date: string;
}
export interface IPasteCard {
  id?: number;
  pastebody: string;
  title: string | null;
  pastedate: string;
  setPastes: React.Dispatch<React.SetStateAction<IPaste[]>>;
}
