import {Request, Response} from "express";
import {return_book_type} from "../../db/table/table_return_book";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
export const Get_Return_book = async (req: Request, res: Response) => {
    try {
        const result = await prisma.return_book.findMany();
        res.status(200).json({
            code: 2000,
            message: 'Success',
            data: result
        });
    } catch (e: any) {
        return res.status(500).json({
            code: 5000,
            message: e.message
        })
    }
}

export const Search_Return_book = async (req: Request, res: Response) => {
    const {BorrowDetail_ID}: return_book_type = req.params;
    if (BorrowDetail_ID === null) {
        return res.status(400).json({
            code: 400,
            message: 'Bad Request'
        });
    }
    try {
        const result = await prisma.return_book.findFirst({where: {BorrowDetail_ID}})
        if (result === null) {
            return res.status(404).json({
                code: 4040,
                message: 'Not Found'
            });
        } else {
            return res.status(200).json({
                code: 2000,
                message: 'Success',
                data: result
            });
        }
    } catch (e: any) {
        return res.status(500).json({
            code: 5000,
            message: e.message
        })
    }
}

export const Insert_Return_book = async (req: Request, res: Response) => {
    const {Return_Date, BorrowDetail_ID, Member_ID, Librarian_ID} = req.body;
    if (Return_Date === null && BorrowDetail_ID == null && Member_ID === null && Librarian_ID === null) {
        return res.status(400).json({
            code: 4000,
            message: 'Bad Request'
        });
    }
    try {
        const values = {Return_Date, BorrowDetail_ID, Member_ID, Librarian_ID}
        const insertReturnBook = await prisma.return_book.create({
            data: values
        });
        return res.status(201).json({
            code: 2010,
            message: 'Create Success'
        });
    } catch (e: any) {
        return res.status(500).json({
            code: 5000,
            message: e.message
        })
    }
}
