import { Children } from "react";


export default function TabButton({label,  onClick, isSelected}) {
return(
    <li> <button className={isSelected ? 'active' : undefined} onClick={onClick} >{Children}</button></li>
    // <li><button></button></li>
)
}