import { useNavigate } from "react-router-dom"
import { button } from "../Interfaces"
import { FC } from "react"


export const Button:FC<button> = ({text , navigateTo, className, icon, scrollTo}) => {
    const navigate = useNavigate()
    return(
       <button onClick={() => {
        if(navigateTo){
            navigate(`/${navigateTo.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}`)
        }else{
            document.querySelector(`#${scrollTo}`)?.scrollIntoView({
                behavior: "smooth"
            })
        }
       }}
       className={`p-2 px-6 center rounded-tl-xl rounded-br-xl transition-all duration-500 hover:scale-90 active:scale-90 ${className} cursor-pointer`}>
        {text}
        {icon}
       </button>
    )
}