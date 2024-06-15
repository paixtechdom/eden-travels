import { FC } from "react"
import { CardInterface } from "../../Interfaces"
import { Button } from "../Button"

export const Card:FC<CardInterface> = ({data}) => {
    return(
        <div className="flex flex-col gap-6 w-full shadow-lg rounded-xl p-2 bg-gray-100 h-full">
            <div className="center w-full overflow-hidden rounded-t-xl">
                <img src={data?.img} alt={data?.title} className="w-full transition-all duration-500 hover:scale-110 active:scale-110"/>
            </div>

            <div className="flex flex-col gap-3 p-3">
                <h3 className="font-bold">{data?.title}</h3>

                <div className="flex flex-wrap lg:flex-row gap-3">
                    {
                        data?.sub?.map((sub, i) => (
                            <p key={i} className="rounded-lg shadow-lg center bg-white p-2 text-gray-700 w-fit text-sm">
                                {sub?.title}
                            </p>
                        ))
                    }
                </div>
                    {
                        data?.sub?.map((sub, i) => (
                            i == 0 &&
                            sub?.title ?
                            <Button key={i} text="Read more"
                                className="bg-primary text-white font-semibold w-fit mt-4 text-sm"
                            /> : ""
                           
                        ))
                    }
            </div>
        </div>
    )
}