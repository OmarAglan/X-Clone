import {BsBellFill, BsHouseFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi";

import SidebarLogo from "@/components/Layout/SidebarLogo";
import SidebarItem from "@/components/Layout/SidebarItem";
import SidebarXsButton from "@/components/Layout/SidebarXsButton";


const Sidebar = () => {
    const Items = [
        {
            label: "Home",
            href: "/",
            icon: BsHouseFill
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: "Profile",
            href: "/users/123",
            icon: FaUser
        }
    ];
    return (
        <div className={"col-span-1 h-full pr-4 md:pr-6"}>
            <div className={"flex flex-col items-end"}>
                <div className={"space-y-2 md:w-[230px]"}>
                    <SidebarLogo/>
                    {Items.map((item) => (
                        <SidebarItem key={item.href}
                                     href = {item.href}
                                     label = {item.label}
                                     icon = {item.icon}
                        />
                    ))}
                    <SidebarItem onclick={()=>{}} icon={BiLogOut} label={"Logout"}/>
                    <SidebarXsButton/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar