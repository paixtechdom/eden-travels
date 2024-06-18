import { BsTelephoneFill } from "react-icons/bs"
import { Button } from "../../../assets/components/Button"



export const Hero: React.FC = () => {
    return(
        <div className="min-h-screen bg-heroGradient bg-cover bg-center w-full center relative lg:py-0"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center justify-center z-10 gap-[50px]">
                <div className="flex flex-col gap-2 w-full md:w-9/12 text-center">
                    <p className="leading-relaxed text-xl tracking-wide text-gray-400">
                    Your adventure begins at
                    </p>


                    <h1 className="font-semibold text-4xl tracking-wide lg:leading-[60px] md:text-5xl text-primary "><span className="font-bold text-primary">Eden Classic Travels & Tours Ltd</span></h1>


                    <p className="leading-relaxed text-xl tracking-wide text-gray-100 mt-5">
                    Embark on your adventure with curated travel experiences and aviation courses offered by Eden Classic Travels & Tours Ltd.
                    </p>

                    <div className="flex gap-3 items-center justify-center mt-6">
                        <Button
                            text="Contact us"
                            className="bg-black  text-primary border border-secondary w-fit"
                            navigateTo="contact"
                            icon={
                                <BsTelephoneFill />
                            }
                        />

                        <Button
                            text="Learn more"
                            className="border border-primary bg-transparent text-white w-fit"
                            scrollTo="imagelisting"
                        />

                    </div>
                </div>

               

            </div>
        </div>
    )
}