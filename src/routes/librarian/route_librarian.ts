import {Router} from "express";
import * as controller from "../../controller/librarian/controller_librarian";

const router = Router();
router.get("/",controller.Get_Librarian)
router.get("/:Librarian_ID",controller.Search_Librarian)
router.post("/",controller.Insert_Librarian)
router.put("/:Librarian_ID",controller.Edit_Librarian)
router.delete("/:Librarian_ID",controller.Delete_Librarian)

export default router;