import {useRouter } from "next/router";
import { GiFeather } from "react-icons/gi";

const SidebarXsButton = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push("/")}>
            <div className="
            mt-6
            lg:hidden
            rounded-full
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center
            bg-sky-500
            hover:bg-sky-400
            hover:bg-opacity-80
            transition
            cursor-pointer
            ">
                <GiFeather size={35} color="white"/>
            </div>

            <div className="
            mt-6
            hidden
            lg:inline-flex
            px-7
            py-2
            rounded-full
            bg-sky-500
            hover:bg-opacity-90
            cursor-pointer
            transition
            ">
                <GiFeather size={35} color="white"/>

                <p className="
                px-4
                hidden
                lg:inline-flex
                text-center
                text-white
                font-semibold
                text-[20px]
                ">
                    Tweet
                </p>


            </div>
        </div>
    )
}

export default SidebarXsButton