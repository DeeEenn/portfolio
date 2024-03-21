
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import DefaultPage from "./DefaultPage";
function Content({page}){
    return(
    <div>
        {page === "DefaultPage"&&<DefaultPage/>}
        {page === "AboutMe" && <AboutMe />}
        {page === "Portfolio" && <Portfolio />}
        {page === "Contact" && <Contact />}
    </div>
    )

}
export default Content;