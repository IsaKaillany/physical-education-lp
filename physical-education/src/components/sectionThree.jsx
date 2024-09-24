import BenefitsCard from "./benefitsCard";

export default function SectionThree() {
    return (
        <section
            id="app"
            className="flex flex-col max-md:gap-6 items-center justify-center bg-[#16223D] p-6"
        >
            <h1 className="text-white text-center font-semibold text-4xl max-sm:text-2xl pb-16 max-md:pb-8">
                O que a{" "}
                <strong className="text-[#EA9F0C]">Senior TechFit</strong> tem a
                oferecer
            </h1>

            <div className="flex flex-col gap-4 pb-28 max-md:pb-20">
                <BenefitsCard
                    animation="fade-right"
                    image="/assets/img1.png"
                    content="Uma variedade de exercícios que podem ser realizados usando apenas o peso do corpo."
                />
                <BenefitsCard
                    animation="fade-right"
                    image="/assets/img2.png"
                    content="Instruções e animações claras para garantir que os usuários executem os movimentos corretamente e com segurança."
                />
                <BenefitsCard
                    animation="fade-right"
                    image="/assets/img1.png"
                    content="Programas de exercícios personalizados adaptados às capacidades e limitações individuais."
                />
            </div>

            <img data-aos="fade-up" src="/about.png" alt="" />
        </section>
    );
}
