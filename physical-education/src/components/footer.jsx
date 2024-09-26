import { BsTelephone, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#21325A]">
            <div className="text-white flex max-md:flex-col max-md:gap-6 max-md:items-center items-start justify-evenly py-10">
                <div>
                    <h1 className="font-bold text-lg pb-2 ">Orientadores:</h1>
                    <ul>
                        <li>Flavius da Luz e Gorgônio</li>
                        <li>Karliane Medeiros Ovídio Vale</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold text-lg pb-2 ">
                        Desenvolvedores:
                    </h1>
                    <ul>
                        <li>Felipe Souza Benício da Silva</li>
                        <li>Isa Kaillany Soares Pereira</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold text-lg pb-2">Contatos:</h1>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-4 items-center">
                            <BsTelephone size={20} /> <p>0000-0000</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <BsInstagram size={20} /> <p>@labican.ufrn</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <AiOutlineMail size={22} />{" "}
                            <p>labican.ufrn@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center border-t-2 max-md:mx-10 mx-52">
                <img src="/physical-education-lp/assets/ufrn-logo.png" alt="" />
                <img src="/physical-education-lp/assets/labican-logo.png" alt="" />
                <img src="/physical-education-lp/assets/personal-life-logo.png" alt="" />
            </div>
        </footer>
    );
}
