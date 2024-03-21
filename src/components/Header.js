
function Header({handleNavigation}){
    return (
        <header className="text-white py-4 fixed top-0 w-full z-50 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-black text-2xl font-thin">
                        <a onClick={() => handleNavigation("DefaultPage")} href="#default">DAVID NIC</a>
                    </h1>
                </div>
                <nav className="space-x-4 text-2xl text-black font-thin">
                    <a onClick={() => handleNavigation("AboutMe")} href="#about" className="hover:text-gray-300">ABOUT ME</a>
                    <a onClick={() => handleNavigation("Portfolio")} href="#portfolio" className="hover:text-gray-300">PORTFOLIO</a>
                    <a onClick={() => handleNavigation("Contact")} href="#contact" className="hover:text-gray-300">CONTACT</a>
                </nav>
            </div>
            <hr className='border-1 m-3'/>
        </header>
    )
}

export default Header;