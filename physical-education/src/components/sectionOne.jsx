import { Header } from "./header";

export default function SectionOne() {
    return (
        <section
            id="#"
            className="sm:bg-[url('./assets/bg-seniors.png')] bg-gradient-to-b from-[#16223D] to-gray-950 min-w-full h-[800px] bg-cover bg-no-repeat py-4"
        >
            <Header />
            <div className="mx-14 max-sm:mx-8">
                <section
                    data-aos="fade-right"
                    className="text-white w-[580px] mt-36 text-justify max-sm:w-full"
                >
                    <p className="text-4xl max-sm:text-3xl">
                        Aprenda a
                        <span className="text-[#FFB11A]"> exercitar</span> e
                        <span className="text-[#FFB11A]"> cuidar</span> do seu
                        corpo de forma simples e saudável.
                    </p>
                    <p className="text-xl mt-2">
                        A academia em suas mãos, com a melhor avaliação do
                        mercado.{" "}
                        <span className="text-[#FFB11A]">
                            Sinta-se jovem novamente
                        </span>
                        .
                    </p>
                </section>
            </div>
        </section>
    );
}
