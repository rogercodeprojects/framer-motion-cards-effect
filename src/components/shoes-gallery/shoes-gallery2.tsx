'use client'
import {AnimatePresence} from "framer-motion";
import {ShoeCard} from "@/components/shoes-gallery/shoe-card";
import {useEffect, useState} from 'react';
import {useGalleryCards} from "@/components/store/gallery-store";

export function ShoesGallery2({shoess}: any) {
    const { galleryCards, updateGalleryCards }: any = useGalleryCards();
    console.log(shoess)

    useEffect(() => {
        updateGalleryCards(shoess);
    }, [shoess]);

    useEffect(() => {
    }, [galleryCards]);

    return (
        <AnimatePresence initial={false}>
            {console.log(galleryCards)}
            {galleryCards.map((shoe: any, index: any) => (
                <ShoeCard key={shoe.id} shoe={shoe} index={index}/>
            ))}
        </AnimatePresence>
    );
}
