import {Router} from "express";
import * as controller from "../../controller/user/controller_user";

const router = Router();
router.get("/",controller.Get_User)
router.get("/:Member_ID",controller.Search_User)
router.post("/",controller.Insert_User)
router.put("/:Member_ID",controller.Edit_User)
router.delete("/:Member_ID",controller.Delete_User)

export default router;