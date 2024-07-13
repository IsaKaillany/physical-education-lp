import CardInfo from "./cards";
import { TbTargetArrow } from "react-icons/tb";
import { RiHeartPulseLine } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function SectionTwo() {
    return (
        <section
            id="about"
            className="flex flex-wrap gap-20 max-sm:gap-10 items-center justify-center py-28 bg-gradient-to-t from-[#16223D] to-gray-950"
        >
            <CardInfo
                icon={AiOutlineQuestionCircle}
                iconSize="28"
                title="What is it?"
                content="Senior TechFit will be an innovative application specially developed to meet the needs of senior citizens."
            />
            <CardInfo
                icon={TbTargetArrow}
                iconSize="28"
                title="Goal"
                content="The goal will be to encourage and facilitate the practice of physical exercise, promoting health and well-being among the elderly."
            />
            <CardInfo
                icon={RiHeartPulseLine}
                iconSize="28"
                title="Health Impact"
                content="With Senior TechFit facilitating the practice of physical exercise, the elderly will benefit in terms of their cardiovascular health, the control of chronic conditions and their mental well-being. "
            />
        </section>
    );
}
