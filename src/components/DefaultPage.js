import thatsme from './images/thatsme.jpeg';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import github from './images/github.png';

import './images/MSC_mod_pic.png';
function DefaultPage({handleNavigation}){
    return (
        <div className="container mx-auto mt-40">
            <div className="flex flex-col lg:flex-row items-center justify-center">

                <div className="lg:w-1/3 lg:mb-0 relative">
                    <img className="w-full rounded-lg mb-16 transform -rotate-6 scale-70 lg:scale-85 mb-6" src={thatsme}
                         alt="Your Name"/>
                </div>

                <div className="lg:w-2/3 lg:ml-8">
                    <p className="mb-4 text-3xl font-thin">Hi! My name is David.</p>
                    <p className='font-thin text-xl'> I'm front-end developer from Czech Republic, you can learn more
                        about me <a onClick={() => handleNavigation("AboutMe")} href="#about"
                                    className="text-fuchsia-950 hover:text-gray-300">here</a>.
                    </p>
                    <p className='font-thin text-xl'> Also look at my previous
                      <a onClick={() => handleNavigation("Portfolio")} href="#portfolio"
                                    className="text-fuchsia-950 hover:text-gray-300"> projects</a>.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default DefaultPage;

