import { Request, Response } from "express";
import { BookService } from "../Services/BookService";
import { ApiReponse } from "../Utils/ApiResponse";

const bookService = new BookService();

export const getBooksGroupedByAuthor = (req:Request, res:Response)=>{
  const booksByAuthor = bookService.getBookByAuthor()
  res.json(ApiReponse.success(booksByAuthor))
}

export const getAllBooks = (req: Request, res: Response) => {
  const book = bookService.getAllBooks();
  res.json(ApiReponse.success(book));
};

export const getBookByTitle = (req: Request, res: Response) => {
  const book = bookService.getBookByID(req.params.title, true);
  if (book) {
    res.json(ApiReponse.success(book));
  } else {
    res.status(404).json(ApiReponse.error("Book not found"));
  }
};
export const getBookByID = (req: Request, res: Response) => {
  const book = bookService.getBookByID(req.params.id);
  if (book) {
    res.json(ApiReponse.success(book));
  } else {
    res.status(404).json(ApiReponse.error("Book not found!"));
  }
};

export const deleteBook = (req: Request, res: Response) => {
  if (bookService.deleteBook(req.params.id)) {
    res.json(ApiReponse.success(null));
  } else {
    res.status(404).json(ApiReponse.error("Book not found!"));
  }
};

export const addBook = (req: Request, res: Response) => {
  const newbook = bookService.addnewBook(req.body);
  if (newbook) {
    res.json(ApiReponse.success(newbook));
  } else {
    res.status(409).json(ApiReponse.error("Book already exits!"));
  }
};
