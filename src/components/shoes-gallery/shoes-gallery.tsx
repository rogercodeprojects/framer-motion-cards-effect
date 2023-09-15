import {PrismaClient} from "@prisma/client";
import {ShoesGallery2} from "@/components/shoes-gallery/shoes-gallery2";

export async function ShoesGallery() {
    const prisma = new PrismaClient()
    const shoes = await prisma.shoe.findMany()

    return (
        <div className="flex flex-wrap items-center justify-center overflow-hidden">
            <ShoesGallery2 shoess={shoes} />
        </div>
    )
}