import express, {Request, Response, Router} from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('index', {pageTitle: 'start home page'})
})

export default router;
