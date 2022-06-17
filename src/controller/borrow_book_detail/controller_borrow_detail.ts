import {Request, Response} from "express";
import {borrow_detail_type} from "../../db/table/table_borrow_detail";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const Get_Borrow_detail = async (req: Request, res: Response) => {
    try {
        const result = await prisma.borrow_detail.findMany();
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

export const Search_Borrow_detail = async (req: Request, res: Response) => {
    const {Borrow_ID}: borrow_detail_type = req.params;
    try {
        const id: number = parseInt(String(Borrow_ID))
        const result = await prisma.borrow_detail.findFirst({where: {Borrow_ID: id}})
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

export const Insert_Borrow_detail = async (req: Request, res: Response) => {
    const {
        BorrowDetail_ID,
        Borrow_ID,
        Book_ID
    } = req.body;
    console.log(Borrow_ID, Book_ID)
    if (BorrowDetail_ID === null && Borrow_ID === null && Book_ID === null) {
        return res.status(400).json({
            code: 4000,
            message: 'Bad Request',
        });
    }
    try {
        const insertBorrowDetail = await prisma.borrow_detail.create({
            data: {
                BorrowDetail_ID,
                Borrow_ID,
                Book_ID
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