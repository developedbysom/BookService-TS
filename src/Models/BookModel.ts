export interface BookModel {
  id: string;
  title: string;
  author: string;
  year?: number;
  genre?: string;
}

//concept of index signature. Like 
export interface BookWithMetadata extends BookModel {
  [key: string]: string | number | undefined;
}
export type NewBook = Omit<BookWithMetadata, "id">;

export  type BookByAuthor = Record<string, BookModel[]>
