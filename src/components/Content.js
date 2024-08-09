
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import DefaultPage from "./DefaultPage";
function Content({page, handleNavigation}){
    return(
    <div>
        {page === "DefaultPage"&&<DefaultPage handleNavigation={handleNavigation}/>}
        {page === "AboutMe" && <AboutMe handleNavigation={handleNavigation} />}
        {page === "Portfolio" && <Portfolio />}
        {page === "Contact" && <Contact />}
    </div>
    )

}
export default Content;