import { FC } from "react"
import { imageListInterface } from "../Interfaces"

export const ImageListing : FC <imageListInterface> =  ({data, heading}) => {
    return(
<>
            <section id="imagelisting" className="w-full center flex-col text-center gap-9 pt-[10vh] lg:pt-[20vh]">
                    <h2 className="text-3xl font-semibold tracking-[1.2px] leading-[35px] w-full">
                        {heading}
                    </h2>
                <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl gap-6">
                    
                    {
                        data.map((d, i) => (
                            <div key={i} className="center relative rounded-xl overflow-hidden w-full cursor-pointer">
                                <img src={d.img} alt={d.text} className="w-full hover:scale-110 transition-all duration-500"/>

                                <p className="absolute top-3 left-3 text-sm font-bold px-3 bg-gray-200 p-2 bg-opacity-75 rounded-lg w-fit shadow">{d.text}</p>
                            </div>
                          
                        ))
                    }
                </div>
            </section>
            
        </>
    )
}