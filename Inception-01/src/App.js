import React from 'react';
import ReactDOM from 'react-dom/client';
import  './index.css';
const Header = ()=>{
    return(
        <div className = "flex justify-between items-center border border-black">
            <div className>
                <img className='p-4' src="" alt="Logo_img" />
            </div>
            <div className="p-4">
                <ul className='flex font-bold'>
                    <li className='m-3 hover:bg-orange-300'>Home</li>
                    <li className='m-3 hover:bg-orange-300'>About</li>
                    <li className='m-3 hover:bg-orange-300'>Contact Us</li>
                    <li className='m-3 hover:bg-orange-300'>Cart</li>
                    <li>LogIn</li>
                </ul>
            </div>

        </div>
    )
}

const AppLayOut = ()=>{
    return(
        <div>
            <Header/>
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayOut/>)