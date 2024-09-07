export interface BookModel {
  id: string;
  title: string;
  author: string;
}

export type NewBook = Omit<BookModel, "id">;

