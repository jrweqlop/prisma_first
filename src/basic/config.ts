
// @ts-ignore
import express, { Application, Request, Response } from "express";
// @ts-ignore
import bodyParser from "body-parser";

interface Book {
    id: string;
    name: string;
}

const books = require("../public/db.json");
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Config host");
});

app.get("/books", async (req: Request, res: Response) => {
    await res.json(books);
});

app.get("/books/:id", async (req: Request, res: Response) => {
    await res.json(books.find((book: Book) => book.id === req.params.id));
});

app.post("/books", async (req: Request, res: Response) => {
    await books.push(req.body);
    res.status(201).json(books);
});

app.put("/books/:id", async (req: Request, res: Response) => {
    const updateIndex = books.findIndex(
        (book: Book) => book.id === req.params.id
    );
    console.log(updateIndex);
    await res.json(Object.assign(books[updateIndex], req.body));
});

app.delete("/books/:id", async (req: Request, res: Response) => {
    const deleteIndex = books.findIndex(
        (book: Book) => book.id === req.params.id
    );
    await books.splice(deleteIndex, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log("hello");
    console.log("connect server port 3000");
});