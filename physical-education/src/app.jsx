import Footer from "./components/footer";
import SectionFour from "./components/sectionFour";
import SectionOne from "./components/sectionOne";
import SectionThree from "./components/sectionThree";
import SectionTwo from "./components/sectionTwo";

export function App() {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <img src="/assets/about.png" alt="" className="w-full max-sm:hidden pb-16 bg-[#16223D]"/>
            <Footer />
        </div>
    );
}
