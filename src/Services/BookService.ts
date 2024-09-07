import { BookModel, NewBook } from "../Models/BookModel";

export class BookService {
  private Book: BookModel[] = [];

  public getAllBooks(): BookModel[] {
    return this.Book;
  }

  public getBookByID(id: string): BookModel | undefined {
    return this.Book.find((book) => book.id == id);
  }
  private checkIfAlreadyExist(title: string): boolean {
    return this.Book.some(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
  }
  public addnewBook<T extends NewBook>(data: T): BookModel | null {
    const book = {
      id: this.generateid(),
      ...data,
    };
    if (!this.checkIfAlreadyExist(book.title as string)) {
      this.Book.push(book);
    } else {
      return null;
    }

    return book;
  }

  private generateid(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  public deleteBook(id: string): boolean {
    const initialLength = this.Book.length;

    this.Book = this.Book.filter((book) => book.id != id);
    return this.Book.length < initialLength;
  }
}
