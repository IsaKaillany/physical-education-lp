import { MdOutlineSportsGymnastics } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";
import { RiArrowDownWideLine } from "react-icons/ri";

export default function SectionThree() {
    return (
        <section className="flex flex-col items-center justify-center bg-[#21325A] px-14 max-md:px-11">
            <div className="flex max-sm:flex-col items-center justify-center gap-14 py-20">
                <div
                    className="flex flex-col items-center justify-center gap-4"
                    data-aos="fade-down"
                >
                    <div className="bg-zinc-100 text-[#16223D] rounded-full p-5">
                        <RiBook2Line size={60} />
                    </div>
                    <p className="text-white text-center text-xl max-md:text-xl font-semibold">
                        A ideia para a criação deste aplicativo surgiu a partir
                        do trabalho de Thiago Santos de Araújo, autor do{" "}
                        <span className="text-[#EA9F0C]">
                            &quot;Manual do Idoso Ativo&quot;
                        </span>
                        . Esse manual oferece uma série de exercícios
                        classificados por categorias específicas, como
                        exercícios cardiovasculares e cognitivos, voltados para
                        a população idosa, com o objetivo de melhorar sua saúde
                        e qualidade de vida.
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-center gap-4"
                    data-aos="fade-down"
                >
                    <div className="bg-zinc-100 text-[#16223D] rounded-full p-5">
                        <MdOutlineSportsGymnastics size={60} />
                    </div>

                    <p className="text-white text-center text-xl max-md:text-xl font-semibold">
                        Inspirados por essa iniciativa e com o intuito de apoiar
                        o projeto{" "}
                        <span className="text-[#EA9F0C]">
                            &quot;Academia ao Ar Livre&quot;
                        </span>{" "}
                        do governo federal brasileiro, surgiu o conceito do
                        Senior TechFit. Este aplicativo é o primeiro passo de um
                        grande projeto, pensado para levar o conceito de
                        &quot;academia nas mãos&quot; para o público da terceira
                        idade, de maneira acessível e positiva.
                    </p>
                </div>
            </div>
            <a href="#app" className="cursor-pointer" data-aos="fade-up">
                <RiArrowDownWideLine
                    size={65}
                    className="text-white hover:text-[#EA9F0C]"
                />
            </a>
        </section>
    );
}
