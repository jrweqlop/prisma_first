import {Router} from "express";
import * as controller from "../../controller/return_book/return_book";

const router = Router();
router.get("/",controller.Get_Return_book)
router.get("/:BorrowDetail_ID",controller.Search_Return_book)
router.post("/",controller.Insert_Return_book)

export default router;