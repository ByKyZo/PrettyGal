import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {

     return (
         <footer className='footer'>

            <div className='footer__content'>

                <div className='footer__top'>
                    <div className='footer__top__social footer__top__item'>

                        <h4>STAY CONNECTED</h4>

                        <ul className='footer__top__social__list'>
                            <li><FontAwesomeIcon icon={faFacebookF}/></li>
                            <li><FontAwesomeIcon icon={faTwitter}/></li>
                            <li><FontAwesomeIcon icon={faPinterestP}/></li>
                            <li><FontAwesomeIcon icon={faInstagram}/></li>
                        </ul>
                                                
                    </div>

                    <div className='footer__top__mail footer__top__item'>

                        <h4>BE OUR FRIEND</h4>

                        <input type='text' placeholder='Enter your email here*'></input>

                        <button>Subscribe Now</button>

                    </div>

                    <div className='footer__top__assistance footer__top__item'>

                        <h4>NEED ASSISTANCE?</h4>
                            <ul>
                                <li>123-456-7890</li>
                                <li>info@mysite.com</li>
                            </ul>
                    </div>
                </div>

                <div className='footer__createBy'>
                    <p>© 2023 by PRETTY GAL. Proudly created with Wix.com</p>
                </div>

            </div>

         </footer>
     )

}

export default Footer;