import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-row">

                <div className="footer-links">
                    <h4>Social media</h4>
                    <div className='social-links'>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">YouTube</a>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Delivery</h4>
                    <ul>
                        <li><a href="#">Uber</a></li>
                        <li><a href="#">Rappi</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Information</h4>
                    <ul>
                        <li><a href='./About'>About</a></li>
                        <li><a href='./Menu'>Menu</a></li>
                        <li><a href='./Shop'>Shop</a></li>
                        <li><a href='./Contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Footer }