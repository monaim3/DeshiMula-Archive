import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { cartContext } from '../../App';


const Header = () => {
  
 const { cart, wishList, setCart, setWishList } = useContext(cartContext);
    return (
        <nav className="bg-gray-200 text-white py-4 px-6 flex justify-between items-center">
            {/* Left - Logo */}
            <div className="text-xl font-bold">
              <Link to="/">
                <img src="https://i.ibb.co.com/Fbx0vd0x/radish.png" alt=""  width={80} height={80}/>
              </Link> 
            </div>

       
         
        </nav>
    );
};

export default Header;
