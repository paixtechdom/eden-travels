import { FC } from "react"
import { ListingCardParentInterface } from "../../Interfaces"
import { ListingCard } from "./ListingCard"
import { RiPlaneFill } from "react-icons/ri"

export const ListingCardParent:FC<ListingCardParentInterface> = ({data, heading}) => {
    
    return(
        <div id={heading?.replace(" ", "")?.replace(" ", "")?.replace(" ", "")?.replace(" ", "")} className="w-full center flex-col gap-9 pt-[20vh]">
            <div className="flex items-center gap-2 w-11/12 lg:w-10/12 text-primary">
                <div className="text-4xl">
                    <RiPlaneFill />
                </div>     
                <h2 className="font-semibold text-left text-4xl w-full">{heading}</h2>  

            </div>


            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-11/12 lg:w-10/12 gap-9`}>
                {
                    data?.map((d, i) => (
                        <ListingCard key={i} data={d}/>
                    ))
                }
            </div>
        </div>
    )
}