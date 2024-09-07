import express from "express";
import BookRouters from "./Routers/BookRouters";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/api", BookRouters);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
