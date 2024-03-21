import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {useState} from "react";
import DefaultPage from "./components/DefaultPage";


function App() {
    const [showHome, setShowHome] = useState(true);

    const [page, setPage] = useState("DefaultPage");



    const handleButtonClick = () => {
        setShowHome(false);
    }

    const handleNavigation = (pageName) => {
        setPage(pageName);
    }

    if(showHome){
        return (
            <div className="flex items-center justify-center h-screen">
                <Home  onButtonClick={handleButtonClick}/>
            </div>
        )
    } else {
        return (
            <div>
                <Header handleNavigation={handleNavigation}/>
                <Content page={page}/>
                <Footer/>
            </div>
        )
    }

}

export default App;
