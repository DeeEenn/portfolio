import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import github from "./images/github.png";

function Contact(){
    return <div className="container mx-auto mt-72">
        <div className="flex flex-col lg:flex-row items-center justify-center">

            <div className="lg:w-1/2 mb-4 lg:mb-0">
                <img className="w-5/12 rounded-lg" src="./images/MSC_mod_pic.png" alt="Thats me bro"/>
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
        <div className="mt-28">
            <h2 className="text-2xl mb-4 font-thin">Where else can I find you?</h2>
            <p className="font-thin text-xl">
                I'm on all these social sites, I'm responding in a days time!
            </p>
        </div>
        <div className="mt-8 flex items-center justify-start space-x-8">
            <img src={instagram} alt="instagram" href="https://www.instagram.com/" onClick={() =>
                window.open('https://www.instagram.com/davidnic__/', '_blank')}
                 className="w-8 h-8 transform transition duration-300 hover:scale-110"/>
            <img src={twitter} alt="twitter" onClick={() =>
                window.open('https://www.instagram.com/davidnic__/', '_blank')}
                 className="w-8 h-8 transform transition duration-300 hover:scale-110"/>
            <img src={github} alt="github" onClick={() =>
                window.open('https://www.instagram.com/davidnic__/', '_blank')}
                 className="w-8 h-8 transform transition duration-300 hover:scale-110"/>
            {/* Další ikony zde */}
        </div>
    </div>
}

export default Contact;