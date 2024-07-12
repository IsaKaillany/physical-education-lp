import { useEffect, useState } from "react";
import titleLogo from "../assets/titleLogo.png";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`flex items-center justify-between gap-4 text-white sticky top-0 transition-all duration-300 px-14 max-sm:px-8 ${
                isScrolled ? "bg-[#0C1221] w-full" : "bg-transparent"
            }`}
        >
            <img src={titleLogo} className="max-sm:size-1/2 my-1" />
            <div className="flex gap-8 justify-center items-center bg-[#0C1221] w-[480px] h-16 rounded-full p-5 max-md:hidden">
                <a className="cursor-pointer hover:text-[#0284C7]">Home</a>
                <a className="cursor-pointer hover:text-[#0284C7]">About</a>
                <a className="cursor-pointer hover:text-[#0284C7]">App</a>
                <a className="cursor-pointer hover:text-[#0284C7]">Contact</a>
            </div>
            <button className="w-36 h-16 rounded-full bg-[#0C1221] flex justify-center items-center p-4 hover:text-[#0284C7]">
                Download App
            </button>
        </nav>
    );
}
