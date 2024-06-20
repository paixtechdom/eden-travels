import { FC } from "react"
import { imageextras } from "../Interfaces"

export const ImageExtras:FC<imageextras> = ({iconBg, icon, topText, bottomText}) => {
    return(
        <div className="center bg-white rounded-xl p-2 gap-4 px-4 shadow-2xl z-10 w-fit min-w-[200px]">
            <div className={`rounded-full ${iconBg} center h-[32px] w-[32px] text-white`}>
                {icon}
            </div>
            
            <div className="flex flex-col text-sm w-fit">
                {topText}
                {bottomText}
            </div>
        </div>
    )
}