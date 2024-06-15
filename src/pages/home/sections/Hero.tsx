import { BsTelephoneFill } from "react-icons/bs"
import { Button } from "../../../assets/components/Button"
import hero from "../../../assets/images/hero.png"



export const Hero: React.FC = () => {
    return(
        <div className="min-h-screen bg-secondary w-full center relative pt-[12vh] md:pt-[15vh] pb-[10vh] lg:py-0"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center justify-between z-10 gap-[50px]">
                <div className="flex flex-col gap-5 w-full lg:w-6/12">
                    <h1 className="font-bold text-5xl text-primary">Seamless Travel, Expertly Planned for Your Next Journey</h1>

                    <p className="leading-relaxed tracking-wide text-gray-100">
                        From personalized tour packages and hassle-free bookings to professional training in travel services, we offer everything you need for an exceptional travel experience. Let us guide you on your next adventure.
                    </p>

                    <div className="flex gap-3 items-center md:w-9/12">
                        <Button
                            text="Contact us"
                            className="bg-primary text-white lg:w-full"
                            navigateTo="contact"
                            icon={
                                <BsTelephoneFill />
                            }
                        />

                        <Button
                            text="Learn more"
                            className="border border-primary bg-transparent text-white lg:w-full"
                            scrollTo="imagelisting"
                        />

                    </div>
                </div>
                <img src={hero} alt="Hero Image" className="w-full lg:w-5/12 rounded-xl border-2 border-white"/>

               

            </div>
        </div>
    )
}