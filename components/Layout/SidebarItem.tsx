import {IconType} from "react-icons";
interface SidebarItemProps{
    label:string;
    icon:IconType;
    href?:string;
    onclick?:() => void;
}
const SideBarItem: React.FC<SidebarItemProps> =({
    label,
    icon:Icon,
    href,
    onclick
                                                }) =>{
    return (
        <div>
        </div>
    )
}

export default SideBarItem