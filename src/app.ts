// @ts-ignore
import express, {Application, Request, Response} from "express";
// @ts-ignore
import bodyParser from "body-parser";
import './db/table'
import {connection} from "./config/connect_db";
import path from "path";

import member from './routes/member/index'
import librarian from "./routes/librarian";
import book from "./routes/book";
import borrow_book from "./routes/borrow_book";
import borrow_detail from "./routes/borrow_detail";
import return_book from "./routes/return_book";


require('dotenv').config();
const base = '/book_system'
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

app.use(`${base}/api/v1/member`, member)
app.use(`${base}/api/v1/librarian`, librarian)
app.use(`${base}/api/v1/book`, book)
app.use(`${base}/api/v1/borrow_book`, borrow_book)
app.use(`${base}/api/v1/borrow_detail`, borrow_detail)
app.use(`${base}/api/v1/return_book`, return_book)

//

app.get('/', (req: Request, res: Response) => {
    // res.send("SYSTEM LIBRARY");
    res.sendFile(path.join(__dirname, 'main', 'index.html'));
});

app.get('/name/:name', (req: Request, res: Response) => {
    res.send(" Hello " + req.params.name);
})

const port = process.env.PORT_CONFIG || 8088

const start = app.listen(port, async () => {
    console.log("connect");
    // const addMember = await create_member
    // const addLibrarian = await create_librarian
    // const addBook = await create_book
    // const addBorrow_book = await create_borrow_book
    // const addBorrow_detail = await create_borrow_detail

});