import thatsme from "./images/thatsme.jpeg";

function AboutMe({handleNavigation}){
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="lg:flex lg:items-center lg:justify-between bg-white ml-96 p-8 rounded-lg">

                <div className="lg:w-2/3 lg:ml-8 flex flex-col items-center justify-center text-center">
                    <p className="font-thin text-xl align-middle mb-6">
                        I'm passionate about building beautiful and functional websites. My journey started in the Czech
                        Republic,
                        and I've developed a keen interest in front-end development. I love to create user-friendly
                        interfaces that
                        not only look good but also provide an exceptional user experience.
                    </p>
                    <p className="font-thin text-xl mb-6">
                        When I'm not coding, you can find me exploring new places, learning new technologies, or
                        indulging in my
                        love for art and design. I'm constantly on the lookout for new challenges and opportunities to
                        grow my
                        skills.
                    </p>
                    <p className="font-thin text-xl">
                        Feel free to check out my <a onClick={() => handleNavigation("Portfolio")} href="#portfolio"
                                                     className="text-fuchsia-950 hover:text-gray-300">projects</a> or
                      <a
                        onClick={() => handleNavigation("Contact")} href="#contact"
                        className="text-fuchsia-950 hover:text-gray-300"> contact me</a>.
                    </p>
                </div>
            </div>
        </div>

    )

}

export default AboutMe;