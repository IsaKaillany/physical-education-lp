import titleLogo from "../assets/titleLogo.png";

export function Header() {
    return (
        <nav className="flex items-center justify-between gap-4 text-white">
            <img src={titleLogo} className="max-sm:size-1/2" />
            <div className="flex gap-8 justify-center items-center bg-[#0C1221] w-[480px] h-16 rounded-full p-5 max-md:hidden">
                <a className="cursor-pointer hover:text-[#0284C7]">Home</a>
                <a className="cursor-pointer hover:text-[#0284C7]">About</a>
                <a className="cursor-pointer hover:text-[#0284C7]">App</a>
                <a className="cursor-pointer hover:text-[#0284C7]">Contact</a>
            </div>
            <button className="w-36 h-16 rounded-full bg-[#0C1221] flex justify-center items-center p-4">Download App</button>
        </nav>
    );
}
