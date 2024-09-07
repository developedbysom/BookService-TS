import express from "express";
import {
  getAllBooks,
  deleteBook,
  getBookByID,
  addBook,
} from "../Controller/BookController";

const router = express.Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookByID);
router.post("/books", addBook);
router.delete("/books/:id", deleteBook);

export default router;
