import { useEffect, useState } from "react";
import titleLogo from "../assets/titleLogo.png";
import { MdOutlineFileDownload } from "react-icons/md";

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
                <a href="#" className="cursor-pointer hover:text-[#EA9F0C]">
                    Home
                </a>
                <a
                    href="#about"
                    className="cursor-pointer hover:text-[#EA9F0C]"
                >
                    About
                </a>
                <a href="#app" className="cursor-pointer hover:text-[#EA9F0C]">
                    App
                </a>
                <a
                    href="#contact"
                    className="cursor-pointer hover:text-[#EA9F0C]"
                >
                    Contact
                </a>
            </div>
            <button className="w-36 h-16 rounded-full bg-[#0C1221] flex justify-center items-center gap-2 p-4 hover:text-[#EA9F0C]">
                Download <MdOutlineFileDownload className="size-6" />
            </button>
        </nav>
    );
}
