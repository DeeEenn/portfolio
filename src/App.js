import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {useState} from "react";

function App() {

    const [page, setPage] = useState("DefaultPage");

    const handleNavigation = (pageName) => {
        setPage(pageName);
    }

        return (
            <div>
                <Header handleNavigation={handleNavigation}/>
                <Content page={page} handleNavigation={handleNavigation}/>
                <Footer/>
            </div>
        )
}
export default App;
