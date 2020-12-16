import React from 'react';
import iconPaymentMastercard from '../../assets/images/mastercard_inverse.svg';
import iconPaymentJcb from '../../assets/images/jcb_inverse.svg'
import iconPaymentPaypal from '../../assets/images/paypal_inverse.svg'
import iconPaymentVisa from '../../assets/images/visa_inverse.svg'
import iconPaymentAmazon from '../../assets/images/amazon_inverse.svg'
import './Footer.scss';

interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
    return (
        <div className="footer-container">
            <div className="content">
                <div className="contact-info">
                    <div className="content-head">
                        Contact Info
                    </div>
                    <div className="content-body">
                        <p>Phone: (+91) 9876 543 210</p>
                        <p>Address:1418 Riverwood Drive,</p>
                        <p>Suite 3245 Cottonwood, </p>
                        <p>CA 96052, United State</p>
                    </div>
                </div>

                <div className="categories">
                    <div className="content-head">
                        Categories
                    </div>
                    <div className="content-body">
                        <ul>
                            <li className="pointer">Accessories (45)</li>
                            <li className="pointer">Jeans (278)</li>  
                            <li className="pointer">Tops (64)</li>
                            <li className="pointer">Jackets (3)</li>
                        </ul>
                    </div>
                </div>

                <div className="stay-in-touch">
                    <div className="content-head">
                        Let’s stay in touch

                    </div>
                    <div className="content-body">
                        <div className="subscribe-holder">
                            <form>
                                <input placeholder="Your email address" className="subscribe-input" />
                                <button type="submit">Subscribe</button>
                            </form>
                            <p>Keep up to date with our latest news and special offers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="payment-links">
                <p>We accept:</p>
                <ul>
                    <li><img src={iconPaymentMastercard} /></li>
                    <li><img src={iconPaymentJcb} /></li>
                    <li><img src={iconPaymentPaypal} /></li>
                    <li><img src={iconPaymentVisa} /></li>
                    <li><img src={iconPaymentAmazon} /></li>
                </ul>
            </div>
            <div className="copyrights">
                <div className="copyright-text left">
                    © 2020, Little Tags Website
                </div>

                <div className="right-reserved right">
                    All Rights Reserved.
                </div>
            </div>
        </div>
    )
}
