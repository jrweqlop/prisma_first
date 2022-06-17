import {Request, Response} from "express";
import {borrow_book_type} from "../../db/table/table_borrow_book";
import formatClearData from "../../utils/helper/format/formatCleanData";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const Get_Borrow_book = async (req: Request, res: Response) => {
    try {
        const result = await prisma.borrow_book.findMany();
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

export const Search_Borrow_book = async (req: Request, res: Response) => {
    const {Borrow_ID}: borrow_book_type = req.params;
    try {
        const id: number = parseInt(String(Borrow_ID))
        const result = await prisma.borrow_book.findFirst({where: {Borrow_ID: id}})
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

export const Insert_Borrow_book = async (req: Request, res: Response) => {
    const {Borrow_ID, Member_ID, Librarian_ID, Borrow_Date} = req.body;
    if (Borrow_ID === null && Member_ID === null && Librarian_ID === null && Borrow_Date === null) {
        return res.status(400).json({
            code: 4000,
            message: 'Bad Request',
        });
    }
    try {
        const object_data = {Borrow_ID, Member_ID, Librarian_ID, Borrow_Date}
        const values = formatClearData(object_data);
        const insertBorrowBook = await prisma.borrow_book.create({
            data: values
        });
        console.log(Member_ID, Librarian_ID)
        return res.status(201).json({
            code: 2010,
            message: 'Create Success',
        });
    } catch (e: any) {
        return res.status(500).json({
            code: 5000,
            message: e.message
        })
    }
}

export const Edit_Borrow_book = async (req: Request, res: Response) => {
    const {Borrow_ID}: borrow_book_type = req.params;
    const {
        Member_ID,
        Librarian_ID,
        Borrow_Date
    } = req.body;

    try {
        if (Member_ID == null || Librarian_ID == null) {
            return res.status(400).json({
                code: 4000,
                message: 'Bad Request'
            });
        }
        const object_data = {Member_ID, Librarian_ID, Borrow_Date}
        const values = formatClearData(object_data);
        console.log(values);
        console.log(typeof Borrow_ID)
        const id: number = parseInt(String(Borrow_ID))
        const value = await prisma.borrow_book.findFirst({where: {Borrow_ID: id}})
        if (value === null) {
            return res.status(404).json({
                code: 4040,
                message: 'Not Found'
            });
        }
        const result = await prisma.borrow_book.update({
            where: {Borrow_ID},
            data: values
        });
        return res.status(200).json({
            code: 2000,
            message: 'Update Success',
        });
    } catch (e: any) {
        return res.status(500).json({
            code: 5000,
            message: e.message
        })
    }
}

export const Delete_Borrow_book = async (req: Request, res: Response) => {
    const {Borrow_ID}: borrow_book_type = req.params;
    try {
        const id: number = parseInt(String(Borrow_ID))
        const value = await prisma.borrow_book.findFirst({where: {Borrow_ID: id}})
        if (value === null) {
            return res.status(400).json({
                code: 4000,
                message: 'Bad Request'
            });
        }
        const result = await prisma.borrow_book.delete({where: {Borrow_ID}})
        return res.status(200).json({
            code: 2000,
            message: 'Delete Success',
        });
    } catch (e: any) {
        return res.status(500).json({
            code: 5000,
            message: e.message
        })
    }
}