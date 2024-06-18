import { FC } from "react"
import { ListingCardInterface } from "../../Interfaces"
import { BsFillCheckCircleFill } from "react-icons/bs"

export const ListingCard:FC<ListingCardInterface> = ({data}) => {
    return(
        <div className="flex flex-col gap-6 w-full shadow-lg rounded-xl p- 2 bg-gray-100">
            <div className="center w-full overflow-hidden rounded-t-xl">
                <img src={data?.img} alt={data?.title} className="w-full transition-all duration-500 hover:scale-110 active:scale-110"/>
            </div>

            <div className="flex flex-col gap-3 p-3 px-6 pb-8">
                <h3 className="font-semibold text-lg">{data?.title}</h3>

                <div className="flex flex-col gap-3">
                    {
                        data?.sub?.map((sub: any, i) => (
                            <p key={i} className="flex items-start text-gray-700 w-fit text-sm">
                                <span><BsFillCheckCircleFill className="mr-2 mt-1"/></span>
                                {sub}
                            </p>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}