import { FC } from "react"
import { Card } from "./Card"
import { CardParentInterface } from "../../Interfaces"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"

export const CardParent:FC<CardParentInterface> = ({data, heading, description,  parentNav }) => {
    
    return(
        <div id={heading?.replace(" ", "")?.replace(" ", "")?.replace(" ", "")?.replace(" ", "")} className="w-full center flex-col gap-9 pt-[20vh]">
            <div className="flex flex-col items-center text-center gap-4 w-11/12 lg:w-9/12">
                <h2 className="font-semibold text-center text-4xl md:text-5/12">{heading}</h2>
                <Link to={`/${parentNav}`} className="underline center flex-wrap">
                    {description}
                    <BsArrowRight className="ml-1"/>
                </Link>
                
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:w-10/12 gap-9">
                {
                    data?.map((d, i) => (
                        <Card key={i} data={d} navigateTo={`/${parentNav}/${d.title}`}/>
                    ))
                }
            </div>
        </div>
    )
}