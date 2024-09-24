import React from 'react'
import { RiSendPlane2Line } from "react-icons/ri";
import qr from "@i/qr.png";
import image from "@i/image.png";

const Footer = () => {
  return (
    <>
    
      <div className="footer">
    <div className="container">
        <div className="footer_box">
          <div className="footer_box_gmail">
            <h2 className="footer_box_gmail_title">Exclusive</h2>
            <h3 className="footer_box_gmail_subs">Subscribe</h3>
            <p className="footer_box_gmail_text">Get 10% off your first order</p>
            <div className="footer_box_gmail_in">
            <input type="email" className='footer_box_gmail_in_enter' placeholder='Enter your email'/>
                <RiSendPlane2Line className='footer_box_gmail_in_send'/>
            </div>
          </div>

          <div className="footer_box_support">
            <h2 className="footer_box_support_title">Support</h2>
            <h3 className="footer_box_support_subs">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h3>
            <p className="footer_box_support_text">exclusive@gmail.com</p>
            <a className='footer_box_support_nomer' href="tel:+88015-88888-9999">+88015-88888-9999</a>
          </div>


          <div className="footer_box_account">
            <h2 className="footer_box_account_title">Account</h2>
            <h3 className="footer_box_account_text">My Account</h3>
            <p className="footer_box_account_text">Login / Register</p>
            <p className='footer_box_account_text' href="#!">Cart</p>
            <p className='footer_box_account_text' href="#!">Wishlist</p>
            <p className='footer_box_account_text' href="#!">Shop</p>
          </div>

          <div className="footer_box_link">
            <h2 className="footer_box_link_title">Quick Link</h2>
            <h3 className="footer_box_link_text">Privacy Policy</h3>
            <p className="footer_box_link_text">Terms Of Use</p>
            <p className='footer_box_link_text' href="#!">FAQ</p>
            <p className='footer_box_link_text' href="#!">Contact</p>
          </div>

          <div className="footer_box_qr">
            <h2 className="footer_box_qr_title">Download App</h2>
            <img src={qr} alt="" />
            <img src={image} alt="" />
          </div>

          
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Footer