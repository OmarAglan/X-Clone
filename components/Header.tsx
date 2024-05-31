import {useRouter} from "next/router";
import {useCallback} from "react";

interface HeaderProps {
    label: string;
    showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({label, showBackArrow}) => {
    const router = useRouter()

    const handleClick = useCallback(() => {
        router.back()
    }, [router])
    return (
        <div className="
        border-b-[1px]
        border-neutral-800
        p-5
        ">
        </div>
    )
}

export default Header