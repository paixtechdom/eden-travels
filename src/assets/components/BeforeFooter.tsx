import { BsTelephoneFill } from "react-icons/bs"
import { Button } from "./Button"
import { FC } from "react"

interface text {
     text: string
    }

export const BeforeFooter:FC<text> = ({text}) => {
    return(
        <section className="bg-secondary py-[10vh] center text-center flex-col gap-5 min-h-[30vh] w-full mt-[20vh] mb-[0vh]">
        <h2 className="text-primary font-semibold text-4xl md:text-5/12 w-11/12 lg:w-5/12 tracking-wide">
            {text}
        </h2>

        <Button 
            text="Contact us now"
            className="bg-black border border-secondary text-primary min-w-[200px]"
            navigateTo="contact"
            icon={
                <BsTelephoneFill />
            }
        />
</section>
    )
}