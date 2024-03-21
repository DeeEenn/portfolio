function Contact(){
    return <div className="container mx-auto mt-72">
        <div className="flex flex-col lg:flex-row items-center justify-center">

            <div className="lg:w-1/3 mb-4 lg:mb-0">
                <img className="w-full rounded-lg" src="./images/MSC_mod_pic.png" alt="Thats me bro"/>
            </div>

            <div className="lg:w-2/3 lg:ml-8">
                <p className="mb-4 text-3xl font-thin">Hi! My name is David.</p>
                <p className='font-thin text-2xl'></p>
            </div>
        </div>

        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 font-thin">Další informace</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae mauris quis odio fringilla
                elementum. Integer in est eros. Nullam condimentum sapien eu nisi sodales, nec faucibus libero
                aliquam.</p>
        </div>
    </div>
}

export default Contact;