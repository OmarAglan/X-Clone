import {IconType} from "react-icons";
interface SidebarItemProps{
    label:string;
    icon:IconType;
    href?:string;
    onclick?:() => void;
}
const SidebarItem: React.FC<SidebarItemProps> =({
    label,
    icon:Icon,
    href,
    onclick}) =>{
    return (
        <div className={"flex flex-row items-center"}>
            <div className={"relative rounded-full h-14 w-14 flex items-center justify-center" +
                " p-4 hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer lg:hidden"}>
                <Icon size={28} color={"white"}/>
            </div>
            <div className="
            relative
            hidden
            lg:flex
            items-center
            gap-4
            p-4
            rounded-full
            hover:bg-blue-300
            hover:bg-opacity-10
            cursor-pointer
            ">
                <Icon size={24} color={"white"}/>
                <p className={"hidden lg:block text-white text-xl"}>
                    {label}
                </p>
            </div>
        </div>
    )
}

export default SidebarItem