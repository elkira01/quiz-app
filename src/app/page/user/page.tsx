'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import userController from "@/app/page/user/userController";
import {useEffect} from "react";

export default function User() {
    const {users, list} = userController()

    useEffect(() => {
        list()
    },[])

    return<div>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Email addr</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Date added</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users?.map(u =>
                    <TableRow>
                        <TableCell className="font-medium">{u.name}</TableCell>
                        <TableCell>{u.email}</TableCell>
                        <TableCell>{u.role}</TableCell>
                        <TableCell className="text-right">{u.createdAt.toString()}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </div>
}