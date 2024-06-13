import { FC } from "react"
import { Card } from "./Card"
import { CardParentInterface } from "../../Interfaces"

export const CardParent:FC<CardParentInterface> = ({data, heading, description}) => {
    return(
        <div className="w-full center flex-col gap-9 pb-[20vh]">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="font-semibold text-4xl md:text-5/12">{heading}</h2>
                <p className="w-11/12 lg:w-9/12">{description}</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:w-10/12 gap-9">
                {
                    data.map((d, i) => (
                        <Card key={i} data={d}/>
                    ))
                }
            </div>
        </div>
    )
}