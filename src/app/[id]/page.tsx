'use client'


import {dancingScript} from "../../../utils/fonts";
import {motion} from "framer-motion";

export default function ShoeId({
                                   params,
                               }: {
    params: { id: string }
}) {
    return (
        <div className="bg-white flex-grow h-full flex">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="flex h-auto items-center">
                <div className="w-full p-10">
                    <img
                        className="transition duration-300 group-hover:grayscale w-full rounded-md shadow-2xl"
                        src="/images/stock/shoes-434918_1280.jpg" alt="Sunset in the mountains"/>
                </div>
                <div className="w-full p-10 flex flex-col">
                    <h1 className={`text-black text-6xl pb-10 font-bold ${dancingScript.className}`}>Nike 342 Pro</h1>
                    <a className="text-black pb-14 ont-bold text-xl">Este es un zapato muy bonito. Puedes comprarlo a
                        plazos si quieres. Estoy rellenando esto.</a>
                    <div className="flex flex-col items-center">
                        <div className="pb-5 ">
                            <span className="text-5xl font-bold tracking-tight text-gray-900 font-sans">$349</span>
                            <span
                                className="text-sm  pl-3 font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                        </div>
                        <button
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] w-20 dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Buy
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}