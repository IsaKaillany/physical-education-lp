import { useState } from "react";
import titleLogo from "../assets/titleLogo.png";
import { MdOutlineFileDownload } from "react-icons/md";

export function Header() {
    const [activeLink, setActiveLink] = useState("Início");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="flex items-center justify-between bg-[#0C1221] w-full gap-4 text-white sticky top-0 z-50 px-14 max-sm:px-8">
            <img
                src={titleLogo}
                className="max-sm:size-1/2 my-1 max-[768px]:size-1/4"
            />
            <div className="flex gap-10 justify-center items-center bg-[#0C1221] w-[480px] h-16 rounded-full lg:ring lg:ring-[#21325A] p-5 max-md:hidden text-lg font-semibold">
                <a
                    href="#"
                    className={`cursor-pointer ${
                        activeLink === "Início"
                            ? "text-[#EA9F0C]"
                            : "hover:text-[#EA9F0C]"
                    }`}
                    onClick={() => handleLinkClick("Início")}
                >
                    Início
                </a>
                <a
                    href="#about"
                    className={`cursor-pointer ${
                        activeLink === "Sobre"
                            ? "text-[#EA9F0C]"
                            : "hover:text-[#EA9F0C]"
                    }`}
                    onClick={() => handleLinkClick("Sobre")}
                >
                    Sobre
                </a>
                <a
                    href="#app"
                    className={`cursor-pointer ${
                        activeLink === "App"
                            ? "text-[#EA9F0C]"
                            : "hover:text-[#EA9F0C]"
                    }`}
                    onClick={() => handleLinkClick("App")}
                >
                    App
                </a>
                <a
                    href="#contact"
                    className={`cursor-pointer ${
                        activeLink === "Contato"
                            ? "text-[#EA9F0C]"
                            : "hover:text-[#EA9F0C]"
                    }`}
                    onClick={() => handleLinkClick("Contato")}
                >
                    Contato
                </a>
            </div>
            <button className="w-36 h-16 rounded-full bg-[#0C1221] flex justify-center items-center gap-2 p-4 hover:text-[#EA9F0C] font-semibold lg:ring lg:ring-[#21325A]">
                Download <MdOutlineFileDownload className="size-6" />
            </button>
        </nav>
    );
}
