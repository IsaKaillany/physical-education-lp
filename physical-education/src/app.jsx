import Content from "./components/content";
import { Header } from "./components/header";

export function App() {
    return (
        <div className="md:bg-[url('./assets/bg-seniors.png')] bg-slate-700 min-w-full min-h-screen bg-cover bg-no-repeat py-4">
            <Header />
            <Content />
        </div>
    );
}
