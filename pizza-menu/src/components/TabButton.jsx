

export default function TabButton({label,  onClick}) {
return(
    <li> <button onClick={onClick} >{label}</button></li>
    // <li><button></button></li>
)
}