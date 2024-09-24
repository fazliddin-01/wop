import React from 'react'
import Iphone from "../../assets/images/Iphone.png";
import { HiChevronRight } from "react-icons/hi";
import card_1 from "@i/card-1.png";
import card_2 from "@i/card-2.png";
import card_3 from "@i/card-3.png";
import card_4 from "@i/card-4.png";

const Header = () => {
  return (
    
    <>
        <div className="box">
            <div className="container">
                <div className="box_child">
                    <ul className="box_child_left">
                        <li><a href="" className="box_child_left_title">Woman’s Fashion<span>
<HiChevronRight /></span></a></li>
                        <li><a href="" className="box_child_left_title">Men’s Fashion <span>
<HiChevronRight /></span></a></li>
                        <li><a href="" className="box_child_left_title">Electronics</a></li>
                        <li><a href="" className="box_child_left_title">Home & Lifestyle</a></li>
                        <li><a href="" className="box_child_left_title">Medicine</a></li>
                        <li><a href="" className="box_child_left_title">Sports & Outdoor</a></li>
                        <li><a href="" className="box_child_left_title">Baby’s & Toys</a></li>
                        <li><a href="" className="box_child_left_title">Groceries & Pets</a></li>
                        <li><a href="" className="box_child_left_title">Health & Beauty</a></li>
                    </ul>
                    
                    <div className="box_child_right">
                        <img src={Iphone} alt="" className="box_child_right_img" />
                    </div>
                </div>
                
                <div className="card_box">
                <div className="card">
                    <img src={card_1} alt="" className="card_img" />
                    <h2 className="card_title">HAVIT HV-G92 Gamepad</h2>
                    <p className="card_text"><span className='card_text_span'>$120</span> <span className='card_text_span_2'>$160</span></p>
                </div>
                
                <div className="card">
                    <img src={card_2} alt="" className="card_img" />
                    <h2 className="card_title">AK-900 Wired Keyboard</h2>
                    <p className="card_text"><span className='card_text_span'>$960</span> <span className='card_text_span_2'>$1160</span></p>
                </div>
                
                <div className="card">
                    <img src={card_3} alt="" className="card_img" />
                    <h2 className="card_title">IPS LCD Gaming Monitor</h2>
                    <p className="card_text"><span className='card_text_span'>$370</span> <span className='card_text_span_2'>$400</span></p>
                </div>
                
                <div className="card">
                    <img src={card_4} alt="" className="card_img" />
                    <h2 className="card_title">S-Series Comfort Chair </h2>
                    <p className="card_text"><span className='card_text_span'>$375</span> <span className='card_text_span_2'>$400</span></p>
                </div>
                
                
                </div>
                <div className="view">
                    <button className="view_title">View All Products</button>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default Header