import {useRouter} from "next/router";
import {FaSquareXTwitter} from "react-icons/fa6";
import {white} from "next/dist/lib/picocolors";

const SidebarLogo = () => {
    const router    = useRouter();

    return (
        <div onClick={() => router.push("/")}
            className={"rounded-full h-14 w-14 p-4 flex items-center " +
            "justify-center hover:bg-blue-300 hover:bg-opacity-10 " +
            "cursor-pointer transition"}>
            <FaSquareXTwitter  size={28} color={"white"}/>
        </div>
    )
}

export default SidebarLogo