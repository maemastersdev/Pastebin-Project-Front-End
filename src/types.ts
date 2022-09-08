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
  commentdate: string;
}
