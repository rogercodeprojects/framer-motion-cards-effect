'use server'

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function saveShoe(
    name: string,
    description: string,
    stock: number
) {

    await prisma.shoe.create({
        data: {
            name,
            description,
            stock,
        }
    });
}

export async function removeShoe(
    id: number,
) {
    await prisma.shoe.delete({
        where: {
            id: id,
        },
    })
}