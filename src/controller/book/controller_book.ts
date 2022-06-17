import {Request, Response} from "express";
import {type_book} from "../../db/table/table_book";
import formatClearData from "../../utils/helper/format/formatCleanData";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const Get_Book = async (req: Request, res: Response) => {
    try {
        const result = await prisma.book.findMany();
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

export const Search_Book = async (req: Request, res: Response) => {
    const {Book_ID}: type_book = req.params;
    try {
        const result = await prisma.book.findMany({where: {Book_ID}})
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

export const Insert_Book = async (req: Request, res: Response) => {
    const {
        Book_ID,
        Book_Name,
        Book_Category,
        Book_Publishing,
    } = req.body;
    if (Book_Name === null && Book_Category === null && Book_Publishing) {
        return res.status(400).json({
            code: 4000,
            message: 'Bad Request',
        });
    }
    try {
        const insertBook = await prisma.book.create({
            data: {
                Book_ID,
                Book_Name,
                Book_Category,
                Book_Publishing
            }
        });
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

export const Edit_Book = async (req: Request, res: Response) => {
    const {Book_ID}: type_book = req.params;
    const {
        Book_Name,
        Book_Category,
        Book_Publishing
    } = req.body;
    const object_data = {Book_Name, Book_Category, Book_Publishing}
    const values = formatClearData(object_data);
    console.log(values);
    console.log(typeof Book_ID)
    if (Book_ID == null || Book_Name == null) {
        return res.status(400).json({
            code: 4000,
            message: 'Bad Request'
        });
    }
    try {
        const id: number = parseInt(String(Book_ID))
        const value = await prisma.book.findFirst({where: {Book_ID: id}})
        if (value === null) {
            return res.status(404).json({
                code: 4040,
                message: 'Not Found'
            });
        }
        const result = await prisma.book.update({
            where: {Book_ID: id},
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
    // return res.status(200).json(result)
}
export const Delete_Book = async (req: Request, res: Response) => {
    const {Book_ID}: type_book = req.params;
    try {
        const id: number = parseInt(String(Book_ID))
        const value = await prisma.book.findFirst({where: {Book_ID: id}})
        if (value === null) {
            return res.status(404).json({
                code: 4040,
                message: 'Not Found'
            });
        } else {
            const result = await prisma.book.delete({where: {Book_ID: id}})
            return res.status(200).json({
                code: 2000,
                message: 'Delete Success',
            });
        }
    } catch (e: any) {
        return res.status(500).json({
            code: 5000,
            message: e.message
        })
    }
}