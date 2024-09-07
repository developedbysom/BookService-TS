import {
  BookModel,
  NewBook,
  BookWithMetadata,
  BookByAuthor,
} from "../Models/BookModel";

export class BookService {
  private Book: BookModel[] = [];

  public getAllBooks(): BookModel[] {
    return this.Book;
  }

  public getBookByID(id: string): BookModel | undefined;
  public getBookByID(title: string, byTitle: boolean): BookModel | undefined;

  public getBookByID(
    identifier: string,
    byTitle?: boolean
  ): BookModel | undefined {
    if (byTitle) {
      return this.Book.find(
        (book) => book.title.toLowerCase() === identifier.toLowerCase()
      );
    }
    return this.Book.find((book) => (book.id == identifier));
  }
  private checkIfAlreadyExist(title: string): boolean {
    console.log(title);
    
    return this.Book.some(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
  }
  public addnewBook<
    T extends NewBook & { [key: string]: string | number | undefined }
  >(data: T): BookWithMetadata | null {
    const book = {
      id: this.generateid(),
      ...data,
    } as unknown as BookWithMetadata;
    if (!this.checkIfAlreadyExist(book.title as string)) {
      this.Book.push(book);
    } else {
      return null;
    }

    return book;
  }

  private generateid(): string {
    // console.log('OK....')
    return Math.random().toString(36).substring(2, 9);
  }

  public deleteBook(id: string): boolean {
    const initialLength = this.Book.length;

    this.Book = this.Book.filter((book) => book.id != id);
    return this.Book.length < initialLength;
  }

  public getBookByAuthor(): BookByAuthor {
    // console.log('OK....')
    return this.Book.reduce((acc, book) => {
      if (!acc[book.author]) {
        acc[book.author] = [];
      }
      acc[book.author].push(book);
      return acc;
    }, {} as BookByAuthor);
  }
}
