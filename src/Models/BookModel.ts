export interface BookModel {
  id: string;
  title: string;
  author: string;
  year: number;
  genre?: string;
  rating?: number;
}

export type NewBook = Omit<BookModel, "id">;
