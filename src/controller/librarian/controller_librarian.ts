import {Request, Response} from "express";
import {librarian_type} from "../../db/table/table_librarian";
import formatClearData from "../../utils/helper/format/formatCleanData";

import {PrismaClient} from '@prisma/client'
import {parse} from "dotenv";

const prisma = new PrismaClient()

export const Get_Librarian = async (req: Request, res: Response) => {
    try {
        const result = await prisma.librarian.findMany();
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

export const Search_Librarian = async (req: Request, res: Response) => {
    const {Librarian_ID}: librarian_type = req.params;
    console.log(Librarian_ID)
    console.log(typeof (Librarian_ID))
    try {
        const id: number = parseInt(String(Librarian_ID))
        const result = await prisma.librarian.findMany({where: {Librarian_ID: id}})
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
            error: 'ใส่ข้อมูลไม่ได้สัส',
            message: e.message
        })
    }
}

export const Insert_Librarian = async (req: Request, res: Response) => {
    const {
        Librarian_Name,
        Librarian_Phone,
        Librarian_Issue,
        Librarian_Expiry
    } = req.body;
    try {
        const insertLibrarian = await prisma.librarian.create({
            data: {
                Librarian_Name,
                Librarian_Phone,
                Librarian_Issue,
                Librarian_Expiry
            }
        });
        return res.status(201).json({
            code: 2010,
            message: 'Create Success',
        });
    } catch (e: any) {
        return res.status(500).json({
            code: 5000,
            error: 'ใส่ข้อมูลไม่ได้สัส',
            message: e.message
        })
    }
}

export const Edit_Librarian = async (req: Request, res: Response) => {
    const {Librarian_ID}: librarian_type = req.params;
    const {
        Librarian_Name,
        Librarian_Phone,
        Librarian_Issue,
        Librarian_Expiry
    } = req.body;

    const object_data = {Librarian_Name, Librarian_Phone, Librarian_Issue, Librarian_Expiry}
    const values = formatClearData(object_data);
    console.log(values);
    console.log(typeof Librarian_Name)
    if (Librarian_ID == null || Librarian_Name == null) {
        return res.status(400).json({
            code: 4000,
            message: 'Bad Request'
        });
    }

    try {
        const id: number = parseInt(String(Librarian_ID))
        const value = await prisma.librarian.findFirst({where: {Librarian_ID: id}})
        if (value === null) {
            return res.status(404).json({
                code: 4040,
                message: 'Not Found'
            });
        }
        const result = await prisma.librarian.update({
            where: {Librarian_ID: id},
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
export const Delete_Librarian = async (req: Request, res: Response) => {
    const {Librarian_ID}: librarian_type = req.params;
    const id: number = parseInt(String(Librarian_ID))
    try {
        const value = await prisma.librarian.findFirst({
            where: {
                Librarian_ID: id,
            },
        })
        if (value === null) {
            return res.status(404).json({
                code: 4040,
                message: 'Not Found'
            });
        } else {
            const result = await prisma.librarian.delete({
                where: {
                    Librarian_ID: id,
                },
            })
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