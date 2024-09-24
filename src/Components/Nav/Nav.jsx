import { BsFillBasket3Fill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import React from 'react'
import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Nav = () => {
  return (
    <>
        <div className="bosh">
            <p className="bosh_text">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!ShopNow</p>

    <button className="bosh_btn">
        English 
    </button>
        </div>
        
        <nav className="nav">
            <div className="container">
                <div className="nav_box">
                    <div className="nav_box_child">
                        <h2 className="nav_box_child_title">Exclusive</h2>
                    </div>
                    
                    
                    <ul className="nav_box_child-2">
                        <li><a href='' className="nav_box_child-2_title">Home</a></li>
                        <li><a href="" className="nav_box_child-2_title">Contact</a></li>
                        <li><a href='' className="nav_box_child-2_title">About</a></li>
                        <li><a href='' className="nav_box_child-2_title">Sign Up</a></li>
                    </ul>
                    
                    <div className="nav_box_btn">
                        <div className="nav_box_btn_input">
                            <input type="text" placeholder='What are you looking for?'/>
                            <IoSearch />
                        </div>
                        <div className="nav_box_btn_like">
                            <FaRegHeart />
                            <BsFillBasket3Fill />
                        </div>
                    </div>
                </div>
            </div>

            <Header/>
            <Card/>
            <Footer/>
        </nav>
    </>
  )
}

export default Nav