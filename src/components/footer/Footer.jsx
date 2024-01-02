import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Oyinkansola</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    {/* <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li> */}
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/oyinkansola_adetoyinbo" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/oyinkansola_adetoyinbo" className="footer__social-link" target="_blank">
                        <i class='bx bxl-linkedin-square'></i></a>
                        
                    <a href="https://github.com/oyinkansola_adetoyinbo
" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Adetoyinbo Oyinkansola. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer