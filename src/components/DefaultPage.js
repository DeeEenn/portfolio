import thatsme from './images/thatsme.jpeg';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import github from './images/github.png';

import './images/MSC_mod_pic.png';
function DefaultPage(){
    return (
        <div className="container mx-auto mt-48">
            <div className="flex flex-col lg:flex-row items-center justify-center">

                <div className="lg:w-1/3 mb-4 lg:mb-0 relative">
                    <img className="w-full rounded-lg transform -rotate-6 scale-70 lg:scale-85" src={thatsme}
                         alt="Your Name"/>
                </div>

                <div className="lg:w-2/3 lg:ml-8">
                    <p className="mb-4 text-3xl font-thin">Hi! My name is David.</p>
                    <p className='font-thin text-2xl'> I'm front-end developer, you'll be able to learn more about me
                        down below or directly in About Me page.
                    </p>
                </div>
            </div>

            <div className="mt-28">
                <h2 className="text-2xl mb-4 font-thin">Where else can I find you?</h2>
                <p className="font-thin text-xl">
                    I'm on all these social sites, I'm responding in a days time!
                </p>
            </div>
            <div className="mt-8 flex items-center justify-start space-x-8">
                <img src={instagram} alt="instagram"
                     className="w-8 h-8 transform transition duration-300 hover:scale-110"/>
                <img src={twitter} alt="twitter"
                     className="w-8 h-8 transform transition duration-300 hover:scale-110"/>
                <img src={github} alt="github"
                     className="w-8 h-8 transform transition duration-300 hover:scale-110"/>
                {/* Další ikony zde */}
            </div>
            <div className="container mx-auto mt-48"></div>
        </div>





    )

}

export default DefaultPage;

