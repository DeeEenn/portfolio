import {useState} from "react";
function Home( {onButtonClick} ){
    const [name, setName] = useState('');
    const [toggle, setToggle] = useState(true);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        setToggle(false);
        event.preventDefault();
    }

    const handleClick = () => {
        onButtonClick();
    };


    if(toggle === true) {
        return <div>
            <div className="flex flex-col items-center font-thin">
                <h2 className="text-4xl text-center mb-4">Hello, what is your name?</h2>
               <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={name} onSubmit={handleSubmit}
                       className="font-thin border border-gray-400 px-4 py-2 rounded-md focus:outline-none"
                       placeholder="Enter your name"/>
               </form>
            </div>
        </div>
    } else {
        return (
            <div className="flex flex-col items-center font-thin">
                <h2 className="text-4xl text-center mb-4">Hello, {name}!</h2>
                <p>Welcome to my portfolio!</p>
                <button onClick={handleClick} className='font-thin rounded-full border-2 w-24 m-3'>Continue</button>
            </div>
        )
            ;
    }
}

export default Home;