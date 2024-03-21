function Footer() {
    return (
        <footer className="text-white py-4 text-center relative bottom-0 left-0 w-full z-10">
            <hr className={'border-1 m-2'}/>
            <div className="container mx-auto text-black font-thin">
                <p>&copy; {new Date().getFullYear()} DAVID NIC. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;