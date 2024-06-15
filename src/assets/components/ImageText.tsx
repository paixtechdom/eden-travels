import { BsArrowRight } from "react-icons/bs"
import { Button } from "./Button"
import { ImageTextInterface } from "../Interfaces"
import { FC } from "react"

export const ImageText:FC<ImageTextInterface> = ({heading, span, desc, children, img}) => {
    return(
        <section className={`w-full center py-[10vh] pb-[15vh] lg:pb-[25vh] lg:py-[20vh] overflow-hidden relative flex-col lg:flex-row gap-[50px] lg:gap-[25px] xl:gap-[50px]`}>
                
                    <div className="w-11/12 lg:w-6/12 flex items-center justify-end">
                        <div className="flex flex-col gap-5  w-full lg:w-10/12">
                            <h2 className="text-3xl text-primary">
                                {heading}<span className="font-bold">
                                    {span}
                                </span>
                            </h2>

                            <p className="leading-relaxed tracking-wide">
                                {desc}
                            </p>

                            <Button 
                                className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                                text="Contact Us" 
                                navigateTo="contact"
                                icon={<BsArrowRight className="ml-3 "/>}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 relative">
                        {children}
                        <img src={img} alt="Property" className="w-full z-0 lg:rounded-l-xl"/>
                    </div>
                

            </section>
    )
}