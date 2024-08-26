
export default function DiscountButoon ({label, onClick}){
    return(
        <li> <button onClick={onClick} >{label}</button></li>

    )
}