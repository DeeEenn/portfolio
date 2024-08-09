
function Header({handleNavigation}){
    return (
        <header className="text-white py-4 fixed top-0 w-full z-50 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-black text-2xl font-thin">
                        <a onClick={() => handleNavigation("DefaultPage")} href="#home">DAVID NIC</a>
                    </h1>
                </div>
                <nav className="space-x-4 text-2xl text-,0
                black font-thin">
                    <a onClick={() => handleNavigation("AboutMe")} href="#about" className="text-black hover:text-gray-300">ABOUT ME</a>
                    <a onClick={() => handleNavigation("Portfolio")} href="#portfolio" className="text-black hover:text-gray-300">PORTFOLIO</a>
                    <a onClick={() => handleNavigation("Contact")} href="#contact" className="text-black hover:text-gray-300">CONTACT</a>
                </nav>
            </div>
            <hr className='border-1 m-3'/>
        </header>
    )
}

export default Header;