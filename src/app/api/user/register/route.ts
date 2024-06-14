import prismaClient from "@/lib/PrismaClient";
import {User} from "@/backend/domain/model/User";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    console.log(req)
    const data : User = req.body;

    const newTask = await prismaClient.user.create({
        data: data,
    });

    return res.json(newTask);
}