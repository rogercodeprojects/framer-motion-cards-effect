import {create} from 'zustand'

export const useGalleryCards = create((set) => ({
    galleryCards: [],
    updateGalleryCards: (galleryCards: any) => set({galleryCards}),
    addGalleryCard: (galleryCard: any) => set((state: any) => ({
        galleryCards: [...state.galleryCards, galleryCard]
    })),
    removeGalleryCard: (id: number) => set((state: any) => ({
        galleryCards: state.galleryCards.filter((shoe: any) => shoe.id !== id)
    }))
}));
