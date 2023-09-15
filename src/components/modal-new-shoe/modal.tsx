'use client'

import {AnimatePresence, motion} from 'framer-motion';
import {dancingScript} from "../../../utils/fonts";
import {useState} from "react";
import {saveShoe} from "@/components/modal-new-shoe/save-shoe";
import {useGalleryCards} from "@/components/store/gallery-store";

export const Modal = ({isModalOpen, closeModal}: any) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const {addGalleryCard}: any = useGalleryCards()
    const [isStockValid, setIsStockValid] = useState(true);  // New state variable
    const handleStockChange = (e: any) => { // Updated stock handler
        const value = e.target.value;
        if (isNaN(value)) {
            setIsStockValid(false);
        } else {
            setIsStockValid(true);
        }
        setStock(value);
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{
                        opacity: 0, transition: {
                            duration: 0.2
                        }
                    }}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                >
                    <motion.div
                        initial={{y: -100}}
                        animate={{y: 0}}
                        exit={{
                            y: -100, transition: {
                                duration: 0.2
                            }
                        }}
                        className="bg-white p-8 rounded-lg w-1/3"
                    >
                        <div className="flex flex-row-reverse pb-10">
                            <motion.svg
                                onClick={closeModal}

                                className="hover:cursor-pointer transition-transform duration-200 hover:scale-125 stroke-black right-px"
                                width="20px" height="20px" viewBox="0 0 24 24" initial="hidden" animate="visible"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    initial={{pathLength: 0}}
                                    animate={{pathLength: 1}}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    }}
                                    d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <motion.path
                                    initial={{pathLength: 0}}
                                    animate={{pathLength: 1}}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    }}
                                    d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </motion.svg>
                        </div>
                        <h2 className={`text-2xl mb-8 text-black ${dancingScript.className}`}>Añadir zapato</h2>
                        <label className="block text-gray-700 text-sm font-bold mb-2 pt-10" htmlFor="name">
                            Name
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text"
                            placeholder="name"/>
                        <label className="block text-gray-700 text-sm font-bold mb-2 pt-10" htmlFor="name">
                            Description
                        </label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text"
                            placeholder="description"/>
                        <label className="block text-gray-700 text-sm font-bold mb-2 pt-10" htmlFor="name">
                            Stock
                        </label>
                        <input
                            onChange={handleStockChange} // Updated handler
                            className={`shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!isStockValid ? 'border-red-500' : ''}`}
                            id="stock"
                            type="text"
                            placeholder="stock"
                        />
                        {!isStockValid && <span className="text-red-500 text-xs">Please enter a valid number</span>}
                        <div className="pt-10">

                            <button
                                onClick={() => {
                                    closeModal();
                                    if (isStockValid) {
                                        saveShoe(name, description, parseInt(stock, 10));
                                        addGalleryCard({name, description, stock, id: 1200})
                                    }
                                }} // Add saveShoe function here
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                Save
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};