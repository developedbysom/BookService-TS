import express from "express";
import {
  getAllBooks,
  deleteBook,
  getBookByID,
  getBookByTitle,
  addBook,
  getBooksGroupedByAuthor,
} from "../Controller/BookController";

const router = express.Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookByID);
router.get("/books/title/:title", getBookByTitle);
router.get("/books/author/by-author", getBooksGroupedByAuthor);
router.post("/books", addBook);
router.delete("/books/:id", deleteBook);

export default router;
