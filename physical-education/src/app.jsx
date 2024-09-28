import Footer from "./components/footer";
import { Header } from "./components/header";
import SectionFour from "./components/sectionFour";
import SectionOne from "./components/sectionOne";
import SectionThree from "./components/sectionThree";
import SectionTwo from "./components/sectionTwo";

export function App() {
    return (
        <div>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </div>
    );
}
