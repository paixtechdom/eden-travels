import { BsTelephoneFill } from "react-icons/bs"
import { Button } from "../../../assets/components/Button"
import { Parallax } from "../../../assets/components/Parallax"
import airplane from "../../../assets/images/airplane.png"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { PiCheck } from "react-icons/pi"
import { FaPlane } from "react-icons/fa6"
import { FC } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"



export const Hero: React.FC = () => {
    return(
        <div className="min-h-screen bg-white heroGradient2 md:bg-white -heroGradient bg-cover bg-center w-full center relative pt-[15vh] lg:py-0 "> 
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items- center justify-center z-10 gap-[50px] lg:gap-[150px]">
                <div className="flex flex-col gap-2 w-full md:w-9/12">
                    <Parallax id="heroadve">

                    <p className="leading-relaxed text-xl tracking-wide text-gray-800">
                    Your adventure begins at
                    </p>
                    </Parallax>

                    <Parallax id="herohone">

                    <h1 className="font-semibold text-4xl tracking-wide lg:leading-[60px] md:text-5xl text-secondary"><span className="font-bold">Eden Classic Travels & Tours Ltd</span></h1>
                    </Parallax>
                    

                    <Parallax id="heropdesc">
                    <p className="leading-relaxed text-xl tracking-wide text-gray-900 mt-5">
                    Embark on your adventure with curated travel experiences and aviation courses offered by Eden Classic Travels & Tours Ltd.
                    </p>
                    </Parallax>

                    <Parallax id="herobtns">
                    <div className="flex gap-3 items-center justify-ce nter mt-6">
                        <Button
                            text="Contact us"
                            className="bg-secondary shadow-xl text-white w-fit"
                            navigateTo="contact"
                            icon={
                                <BsTelephoneFill />
                            }
                        />

                        <Button
                            text="Learn more"
                            className="border border-secondary bg-transparent text-secondary w-fit"
                            scrollTo="imagelisting"
                            />

                    </div>
                    </Parallax>
                </div>


                <div className="w-9/12 md:w-10/12 center lg:w-6/12 relative">
                    <LazyLoadImage 
                            src={airplane} 
                            placeholderSrc={"Airplane and destinations"} 
                            effect='blur'
                            className="w-full z-[50]"
                    
                    />

                    <div className="absolute top-5 right-[50%] z-[50]">
                        <ImageExtras 
                              icon={<PiCheck className="text-lg"/>}
                              iconBg={"bg-green-700"}
                              topText={<p className="font-bold">100%</p>}
                              bottomText={<p className="text-gray-400">
                                Successful Flights
                              </p>}
                        />
                     </div>
                    <div className="absolute bottom-0 left-[40%] z-[50]">
                        <ImageExtras 
                              icon={<FaPlane className="text-lg"/>}
                              iconBg={"bg-purple-700"}
                              topText={<p className="font-bold">100%</p>}
                              bottomText={<p className="text-gray-400">
                                 Easy Booking
                              </p>}
                        />
                     </div>

                    <div className="absolute top-10 -z-[5] w-full">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full scale-[2] opacity-20 backdrop-blur-lg">
                            <path fill="#93C5FD" d="M37.5,-49.2C50.5,-42.2,64.1,-33.8,72.5,-20.6C80.9,-7.4,84,10.4,77.4,23.4C70.7,36.3,54.4,44.4,39.9,44.5C25.4,44.7,12.7,36.9,1,35.6C-10.8,34.3,-21.6,39.4,-33.5,38.4C-45.4,37.4,-58.5,30.4,-63.5,19.6C-68.5,8.8,-65.3,-5.7,-59.7,-18.2C-54,-30.8,-45.9,-41.4,-35.5,-49.2C-25.2,-57,-12.6,-61.9,-0.2,-61.7C12.3,-61.5,24.6,-56.1,37.5,-49.2Z" transform="translate(100 100)" />
                        </svg>

                    </div>
                </div>


            </div>


        </div>
    )
}

// add image extras
// not cumpolsory it is behind the image
type BlobType = {
    path: string
}

export const BlobOne:FC<BlobType> = ({path}) => {
    return(
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill={path} d="M45.9,-39.9C59.7,-32.2,71.2,-16.1,71.7,0.6C72.3,17.2,62,34.5,48.3,39.1C34.5,43.8,17.2,35.9,2.3,33.5C-12.6,31.2,-25.2,34.5,-38.1,29.8C-51,25.2,-64.2,12.6,-66.2,-2C-68.2,-16.6,-59,-33.1,-46.1,-40.9C-33.1,-48.7,-16.6,-47.7,-0.2,-47.4C16.1,-47.2,32.2,-47.7,45.9,-39.9Z" transform="translate(100 100)"/>
        </svg>
    )
}
export const BlobTwo:FC<BlobType> = ({path}) => {
    return(
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill={path} d="M20.1,-4.9C23.7,4.7,22.8,17.5,13.8,25.6C4.8,33.7,-12.4,37.2,-28.1,28.2C-43.8,19.3,-58,-2.1,-53.1,-13.5C-48.2,-25,-24.1,-26.4,-7.9,-23.8C8.2,-21.3,16.4,-14.6,20.1,-4.9Z" transform="translate(100 100)" />
        </svg>
    )
}


