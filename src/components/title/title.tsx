'use client'
import {motion} from "framer-motion";
import {dancingScript} from "../../../utils/fonts";

export const Title = () => {
    return (
        <motion.a
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className={`text-6xl  font-roboto text-gray-900 px-6 ${dancingScript.className}`}>Zapatos
        </motion.a>)
}