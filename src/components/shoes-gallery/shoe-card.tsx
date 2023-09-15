'use client'

import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {removeShoe} from "@/components/modal-new-shoe/save-shoe";
import {useGalleryCards} from "@/components/store/gallery-store";

export function ShoeCard({shoe, index, onRemove}: any) {
    const router = useRouter()
    const {removeGalleryCard}: any = useGalleryCards()


    return (

        <motion.div
            layout
            key={index}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.2,
                },
            }}
            transition={{type: "spring", duration: 0.6}}
        >
            <div
                className="py-10 px-5 overflow-hidden"
                onClick={() => {
                    router.push(`/${index}`)
                }}
            >
                <div
                    className="relative group max-w-sm rounded overflow-visible shadow-lg hover:cursor-pointer transition-transform duration-300 hover:scale-101"
                >
                    <svg
                        onClick={(event) => {
                            event.stopPropagation();
                            removeShoe(shoe.id);
                            removeGalleryCard(shoe.id)
                            // onRemove(shoe.id);
                        }}
                        className="z-[10] transition-transform duration-200 hover:scale-110 absolute top-[-10px] right-[-10px] bg-yellow p-1 rounded-full bg-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="25px"
                        height="25px"
                    >
                        <path
                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
                    </svg>
                    <img
                        className="transition duration-300 group-hover:grayscale w-full"
                        src="/images/stock/shoes-434918_1280.jpg"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-700">
                            {shoe.name}
                        </div>
                        <p className="text-gray-700 text-base">
                            {shoe.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                                    <span
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        #photography
                                    </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        #travel
                                    </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        #winter
                                    </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}