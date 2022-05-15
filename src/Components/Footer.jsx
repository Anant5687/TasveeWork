import React from 'react';
import logo from '../assets/logo2.png';
import './footer.css';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            {/* <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div> */}

            {/* <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={logo} alt="tasvee_logo" />
                    <p>By Saphite Technologies Pvt. Ltd, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>About Us</p>
                    <p>Join Us</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Tasvee for photographers</p>
                    <p>+91 9702796695</p>
                    <p>officialtasvee@gmail.com</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>@2022 Tasvee. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;