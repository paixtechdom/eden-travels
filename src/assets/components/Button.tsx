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
       className={`p-2 px-6 center rounded-full rounded-l-xl rounded-br-xl text-sm ${className}`}>
        {text}
        {icon}
       </button>
    )
}