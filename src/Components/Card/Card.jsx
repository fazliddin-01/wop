import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { IoWatch } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import blu from "@i/Bluetoos.png";
import card_1 from "@i/Cart-1.png";
import card_2 from "@i/Cart-2.png";
import card_3 from "@i/Cart-3.png";
import card_4 from "@i/Cart-4.png";

import rasm_1 from "@i/rasm-1.png";
import rasm_2 from "@i/rasm-2.png";
import rasm_3 from "@i/rasm-3.png";
import rasm_4 from "@i/rasm-3.png";
import rasm_5 from "@i/rasm-5.png";
import rasm_6 from "@i/rasm-6.png";
import rasm_7 from "@i/rasm-7.png";
import rasm_8 from "@i/rasm-8.png";
import play_1 from "@i/play-1.png";
import play_2 from "@i/play-2.png";
import play_3 from "@i/play-3.png";
import play_4 from "@i/play-4.png";
import Services_1 from "@i/Services-1.png";
import Services_2 from "@i/Services-2.png";
import Services_3 from "@i/Services-3.png";

console.log('00');
const Card = () => {
    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="box_card">
                        <IoPhonePortraitOutline className='box_card_io' />
                        <p className="box_card_text">Phones</p>
                    </div>

                    <div className="box_card">
                        <MdComputer className='box_card_io' />
                        <p className="box_card_text">Computers</p>
                    </div>

                    <div className="box_card">
                        <IoWatch className='box_card_io' />
                        <p className="box_card_text">SmartWatch</p>
                    </div>

                    <div className="box_card active">
                        <FaCamera className='box_card_io active' />
                        <p className="box_card_text active">Camera</p>
                    </div>

                    <div className="box_card">
                        <FaHeadphones className='box_card_io' />
                        <p className="box_card_text">HeadPhones</p>
                    </div>

                    <div className="box_card">
                        <IoGameControllerOutline className='box_card_io' />
                        <p className="box_card_text">Gaming</p>
                    </div>


                </div>

                <div className="card_box">
                    <div className="card">
                        <img src={card_1} alt="" className="card_img" />
                        <h2 className="card_title">The north coat</h2>
                        <p className="card_text"><span className='card_text_span'>$260</span> <span className='card_text_span_2'>$360</span></p>
                    </div>

                    <div className="card">
                        <img src={card_2} alt="" className="card_img" />
                        <h2 className="card_title">Gucci duffle bag</h2>
                        <p className="card_text"><span className='card_text_span'>$960</span> <span className='card_text_span_2'>$1160</span></p>
                    </div>

                    <div className="card">
                        <img src={card_3} alt="" className="card_img" />
                        <h2 className="card_title">RGB liquid CPU Cooler</h2>
                        <p className="card_text"><span className='card_text_span'>$160</span> <span className='card_text_span_2'>$170</span></p>
                    </div>

                    <div className="card">
                        <img src={card_4} alt="" className="card_img" />
                        <h2 className="card_title">Small BookSelf</h2>
                        <p className="card_text"><span className='card_text_span'>$360</span> </p>
                    </div>


                </div>

                <div className="img_box">
                    <img src={blu} alt="" className="img_box_1" />
                </div>

                <div className="card_box">
                    <div className="card">
                        <img src={rasm_1} alt="" className="card_img" />
                        <h2 className="card_title">Breed Dry Dog Food</h2>
                        <p className="card_text"><span className='rasm_card_text_span'>$100</span> </p>
                    </div>

                    <div className="card">
                        <img src={rasm_2} alt="" className="card_img" />
                        <h2 className="card_title">CANON EOS DSLR Camera</h2>
                        <p className="card_text"><span className='rasm_card_text_span'>$360</span> </p>
                    </div>

                    <div className="card">
                        <img src={rasm_3} alt="" className="card_img" />
                        <h2 className="card_title">RGB liquid CPU Cooler</h2>
                        <p className="card_text"><span className='rasm_card_text_span'>$700</span> </p>
                    </div>

                    <div className="card">
                        <img src={rasm_4} alt="" className="card_img" />
                        <h2 className="card_title">ASUS FHD Gaming Laptop</h2>
                        <p className="card_text"><span className='rasm_card_text_span'>$500</span> </p>
                    </div>

                    <div className="card">
                        <img src={rasm_5} alt="" className="card_img" />
                        <h2 className="card_title">Curology Product Set </h2>
                        <p className="card_text"><span className='rasm_card_text_span'>$960</span> </p>
                    </div>

                    <div className="card">
                        <img src={rasm_6} alt="" className="card_img" />
                        <h2 className="card_title">Jr. Zoom Soccer Cleats</h2>
                        <p className="card_text"><span className='rasm_card_text_span'>$1160</span> </p>
                    </div>

                    <div className="card">
                        <img src={rasm_7} alt="" className="card_img" />
                        <h2 className="card_title">GP11 Shooter USB Gamepad</h2>
                        <p className="card_text"><span className='rasm_card_text_span'>$660</span> </p>
                    </div>

                    <div className="card">
                        <img src={rasm_8} alt="" className="card_img" />
                        <h2 className="card_title">Quilted Satin Jacket</h2>
                        <p className="card_text"><span className='rasm_card_text_span'>$660</span> </p>
                    </div>
                </div>

                <div className="view">
                    <button className="view_title">View All Products</button>
                </div>

                <div className="play">
                    <div className="play_box">
                        <div className="play_box_left">
                            <img src={play_1} alt="" />
                            <div className="play_b">
                                <h2 className="play_box_left_title">PlayStation 5</h2>
                                <p className="play_box_left_text">Black and White version of the PS5 coming out on sale.</p>
                                <button className="play_box_left_btn">Shop Now</button>
                            </div>
                        </div>

                        <div className="play_box_right">
                            <div className="play_box_right_top">
                                <img src={play_2} alt="" />
                                <div className="play_b">
                                    <h2 className="play_box_right_top_title">Women’s Collections</h2>
                                    <p className="play_box_right_top_text">Featured woman collections that give you another vibe.</p>
                                    <button className="play_box_right_top_btn">Shop Now</button>
                                </div>
                            </div>
                            <div className="play_box_right_bottom">
                                <div className="play_box_right_bottom_right">
                                    <img src={play_3} alt="" />
                                    <div className="play_b">
                                        <h2 className="play_box_right_bottom_right_title">Speakers</h2>
                                        <p className="play_box_right_bottom_right_text">Amazon wireless speakers</p>
                                        <button className="play_box_right_bottom_right_btn">Shop Now</button>
                                    </div>
                                </div>

                                <div className="play_box_right_bottom_left">
                                    <img src={play_4} alt="" />
                                    <div className="play_b">
                                        <h2 className="play_box_right_bottom_left_title">Perfume</h2>
                                        <p className="play_box_right_bottom_left_text">GUCCI INTENSE OUD EDP</p>
                                        <button className="play_box_right_bottom_left_btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="Services">
                    <div className="Services_box">
                        <div className="Services_box_child">
                            <img className='Services_box_child_img' src={Services_1} alt="" />
                            <h2 className="Services_box_child_title">FREE AND FAST DELIVERY</h2>
                            <p className="Services_box_child_text">Free delivery for all orders over $140</p>
                        </div>

                        <div className="Services_box_child">
                            <img className='Services_box_child_img' src={Services_2} alt="" />
                            <h2 className="Services_box_child_title">FREE AND FAST DELIVERY</h2>
                            <p className="Services_box_child_text">Free delivery for all orders over $140</p>
                        </div>

                        <div className="Services_box_child">
                            <img className='Services_box_child_img' src={Services_3} alt="" />
                            <h2 className="Services_box_child_title">FREE AND FAST DELIVERY</h2>
                            <p className="Services_box_child_text">Free delivery for all orders over $140</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* Yengi */}
        </>
    )
}

export default Card