export interface IPaste {
  id?: number;
  pastebody: string;
  title: string | null;
  date: string;
}

export interface IComment {
  commentid: number;
  pasteid: number;
  commentbody: string;
  date: string;
}
