import {Request, Response} from "express";
import {member_type} from "../../db/table/table_member";
import formatClearData from "../../utils/helper/format/formatCleanData";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const Get_Member = async (req: Request, res: Response) => {
    try {
        const result = await prisma.member.findMany();
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

export const Search_Member = async (req: Request, res: Response) => {
    const {Member_ID}: member_type = req.params;
    try {
        const id: number = parseInt(String(Member_ID))
        const result = await prisma.member.findFirst({where: {Member_ID: id}})
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

export const Insert_Member = async (req: Request, res: Response) => {
    const {
        Member_Student_ID,
        Member_Name,
        Member_Add,
        Member_Phone,
        Member_Issue,
        Member_Expiry,
        Member_Category
    } = req.body;
    if (Member_Student_ID === null && Member_Name === null && Member_Add === null && Member_Phone === null && Member_Issue === null && Member_Expiry === null && Member_Category === null) {
        return res.status(404).json({
            code: 4040,
            message: 'Not Found'
        });
    }
    try {
        const insert_Member = await prisma.member.create({
            data: {
                Member_Student_ID,
                Member_Name,
                Member_Add,
                Member_Phone,
                Member_Issue,
                Member_Expiry,
                Member_Category
            }
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

export const Edit_Member = async (req: Request, res: Response) => {
    const {Member_ID}: member_type = req.params;
    const {
        Member_Student_ID,
        Member_Name,
        Member_Add,
        Member_Phone,
        Member_Issue,
        Member_Expiry,
        Member_Category
    } = req.body;
    console.log(typeof (Member_Student_ID))
    console.log(typeof (Member_Name))
    console.log(typeof (Member_Add))
    console.log(typeof (Member_Phone))
    console.log(typeof (Member_Issue))
    console.log(typeof (Member_Expiry))
    console.log(typeof (Member_Category))
    if (Member_ID === null) {
        return res.status(400).json({
            code: 4000,
            message: 'Bad Request'
        });
    }
    try {
        const object_data = {
            Member_Student_ID,
            Member_Name,
            Member_Add,
            Member_Phone,
            Member_Issue,
            Member_Expiry,
            Member_Category
        }
        const values = formatClearData(object_data);
        console.log(values);
        const id: number = parseInt(String(Member_ID))
        const value = await prisma.member.findFirst({where: {Member_ID: id}})
        if (value === null) {
            return res.status(404).json({
                code: 4040,
                message: 'Not Found'
            });
        }
        const result = await prisma.member.update({
            where: {Member_ID: id},
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

export const Delete_Member = async (req: Request, res: Response) => {
    const {Member_ID}: member_type = req.params;
    try {
        const id: number = parseInt(String(Member_ID))
        const value = await prisma.member.findFirst({where: {Member_ID: id}})
        if (value === null) {
            return res.status(404).json({
                code: 4040,
                message: 'Not Found'
            });
        } else {
            const result = await prisma.member.delete({where: {Member_ID: id}})
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