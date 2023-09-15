'use client'
import {useState} from 'react';
import {motion} from "framer-motion";
import {Modal} from "./modal";

export const ModalNewShoe = () => {
    // Declare state variables
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <div>
            <motion.svg width="50" height="50"
                        onClick={openModal}
                        className="text-green-900 stroke-black transition transition-colors hover:stroke-gray-600 hover:cursor-pointer transition-transform duration-200 hover:scale-110"
                        viewBox="0 0 24 24" fill="none" initial="hidden" animate="visible"
                        xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                             stroke-width="1"
                             initial={{pathLength: 0}}
                             animate={{pathLength: 1}}
                             transition={{
                                 duration: 0.9,
                                 ease: "easeInOut",
                                 // repeat: Infinity,
                                 // repeatType: "loop",
                                 repeatDelay: 1
                             }}
                             stroke-linecap="round"/>
                <motion.path
                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                    stroke-width="1" stroke-linecap="round"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        // repeat: Infinity,
                        // repeatType: "loop",
                        repeatDelay: 1
                    }}
                />
            </motion.svg>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal}/>
        </div>
    );
};
