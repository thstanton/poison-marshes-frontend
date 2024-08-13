export interface Email {
  id: number;
  to?: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}
