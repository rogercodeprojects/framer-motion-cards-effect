import {ModalNewShoe} from "@/components/modal-new-shoe/modal-new-shoe";
import {Title} from "@/components/title/title";
import {ShoesGallery} from "@/components/shoes-gallery/shoes-gallery";

export default async function Home(props: any) {

    return (

            <div className="px-20 overflow-hidden flex flex-grow bg-white flex-col">
                <div className="py-24 flex flex-row flex-grow justify-between">
                    <div>
                        <Title></Title>
                    </div>
                    <div>
                        <div className="tooltip flex justify-end mt-6" data-tip="Add shoe">
                            <ModalNewShoe/>
                        </div>
                    </div>
                </div>
                    <ShoesGallery ></ShoesGallery>
            </div>

    )
}
