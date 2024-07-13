import { Header } from "./header";

export default function SectionOne() {
    return (
        <section id="#" className="sm:bg-[url('./assets/bg-seniors.png')] bg-gradient-to-b from-[#16223D] to-gray-950 min-w-full  h-[800px] bg-cover bg-no-repeat py-4">
            <Header />
            <div className="mx-14 max-sm:mx-8">
                <section className="text-white w-[580px] mt-36 text-justify max-sm:w-full">
                    <p className="text-4xl max-sm:text-3xl">
                        Learn how to{" "}
                        <span className="text-[#FFB11A]">exercise</span> and{" "}
                        <span className="text-[#FFB11A]">take care</span> of
                        your body in a simple and healthy way.
                    </p>
                    <p className="text-xl mt-2">
                        The gym in your hands, with the best evaluation on the
                        market. Feel young again.
                    </p>
                </section>
            </div>
        </section>
    );
}
