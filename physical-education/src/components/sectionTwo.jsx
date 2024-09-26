import CardInfo from "./cards";
import { TbTargetArrow } from "react-icons/tb";
import { RiHeartPulseLine } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";

export default function SectionTwo() {
    return (
        <section
            id="about"
            className="flex flex-wrap gap-2 max-md:gap-6 items-center justify-center py-28 bg-gradient-to-t from-[#16223D] to-gray-950"
        >
            <CardInfo
                icon={AiOutlineQuestionCircle}
                title="O que é?"
                content="A Senior TechFit será uma aplicação inovadora especialmente desenvolvida para responder às necessidades dos cidadãos seniores."
            />
            <CardInfo
                icon={TbTargetArrow}
                title="Objetivo"
                content="O objetivo será incentivar e facilitar a prática de exercícios físicos, expondo exercícios simples e de fácil execução, promovendo a saúde e o bem-estar dos idosos. "
            />
            <CardInfo
                icon={RiHeartPulseLine}
                title="Impacto na saúde"
                content="Com o Senior TechFit facilitando a prática de exercício físico, os idosos beneficiarão em termos da sua saúde cardiovascular, do controle de doenças crônicas e do seu bem-estar mental."
            />
            <CardInfo
                icon={GrGroup}
                title="Impacto social"
                content="Na sociedade, o incentivo ao estilo de vida ativo para idosos reduz a sobrecarga no sistema de saúde e promove uma comunidade mais integrada, com maior interação social e menos isolamento."
            />
        </section>
    );
}
