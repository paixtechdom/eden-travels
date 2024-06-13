import { useNavigate } from "react-router-dom"
import { button } from "../Interfaces"


export const Button :React.FC <button> = ({text , navigateTo, className, icon}) => {
    const navigate = useNavigate()
    return(
       <button onClick={() => {
        if(navigateTo){
            navigate(`/${navigateTo}`)
        }
       }}
       className={`p-2 px-6 center rounded-tl-xl rounded-br-xl transition-all duration-500 hover:scale-90 active:scale-90 ${className} cursor-pointer`}>
        {text}
        {icon}
       </button>
    )
}