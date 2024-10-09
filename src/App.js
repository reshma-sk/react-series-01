import React from 'react';
import ReactDOM from 'react-dom/client';
import { MdStarRate } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import  './index.css';
import { restaurantList } from './utils/constants';
import { CDN_URL } from './utils/site-links';

const Header = ()=>{
    return(
        <div className = "flex justify-between items-center border border-black">
            <div>
                <img className='p-4' src="" alt="Logo_img" />
            </div>
            <div className="p-4">
                <ul className='flex font-bold'>
                    <li className='m-3 hover:bg-orange-300'>Home</li>
                    <li className='m-3 hover:bg-orange-300'>About</li>
                    <li className='m-3 hover:bg-orange-300'>Contact Us</li>
                    <li className='m-3 hover:bg-orange-300'>Cart</li>
                    <li className='m-3 hover:bg-orange-300'> Login</li>
                    
                </ul>
            </div>

        </div>
    )
}

const Body = ()=>{
    return(
        <div className='flex flex-col justify-center items-center mt-3'>
            <div className='flex border border-black'>
                <input type="text" className='w-50 shadow-lg' placeholder='search'  />
                <CiSearch></CiSearch>
            </div>
            <div className='flex flex-wrap'>
                {restaurantList.map((restaurant)=>(
                    <RestaurantCard key = {restaurant.info.id} restaurantData={restaurant}/>        
                ))}

            </div>
        </div>
    )
}
const RestaurantCard = ({restaurantData})=>{
    const{name,costForTwo,cloudinaryImageId,avgRating} = restaurantData?.info;
    
    return(
        <div className='flex flex-col m-3 border border-yellow-400 w-44'>
            <img src={CDN_URL +cloudinaryImageId } alt="" />
            <h5>{name.slice(0,13)}
                {name.length > 13 ? '...' : ''}
            </h5>
            <h4>{costForTwo}</h4>
            <h4 className='flex'>
                <MdStarRate className="border-6" style={avgRating > 4 ? {backgroundColor:'green'}:{backgroundColor:'red'}}/>
                <span className='ml-1'>{avgRating}</span>
            </h4>
        </div>
    )
}
const Footer = ()=>{
    return(
        <div className='w-full text-center p-5'>
            Created by
            <span>❤️</span>
            <a href="#">Reshma Shaik </a>
            <span>&copy; </span>
            <strong>
                Spoons & <span>Forks</span>
            </strong>
        </div>
    )
}
const AppLayOut = ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayOut/>)