import React from 'react';
import './Footer.scss';
// import Logo from '../../Pictures/fridge-assist-logo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Post from '../../Pictures/who-are-we.jpg';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import SendIcon from '@mui/icons-material/Send';

function Footer() {

    return ( 
        <div style={{"background":"black"}}>
            <div id='footer-cont'>
            <div className='footer-divs' id='footer-logo-cont'>
                {/* <img alt='fridge assist logo' src={Logo} /> */}
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde neque ipsam id soluta ducimus itaque, possimus maiores dolorem voluptates ex obcaecati.</p>
            </div>
            <div id='footer-support-cont'>
                <h2>Support</h2>
                <ul id='footer-support-ul'>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Security</li>
                </ul>
            </div>
            <div id='footer-icon-cont'>
                <h2>Follow Us</h2>
                <ul>
                    <li><TwitterIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><YouTubeIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><GoogleIcon /></li>
                    <li><LinkedInIcon /></li>
                </ul>
            </div>
            <div id='footer-gallery-cont'>
            <h2>Gallery</h2>
            <div id='footer-gallery'>
                <img alt='image-1' src='https://themexbd.com/poket/restaurant/wp-content/uploads/2021/02/shop-06-300x300.jpg' />
                <img alt='image-2' src='https://themexbd.com/poket/restaurant/wp-content/uploads/2021/02/shop-05-300x300.jpg' />
                <img alt='image-3' src='https://themexbd.com/poket/restaurant/wp-content/uploads/2021/02/shop-04-300x300.jpg' />
                <img alt='image-4' src='https://themexbd.com/poket/restaurant/wp-content/uploads/2021/02/shop-01-300x300.jpg' />
                <img alt='image-5' src='https://themexbd.com/poket/restaurant/wp-content/uploads/2021/02/shop-02-300x300.jpg' />
                <img alt='image-6' src='https://themexbd.com/poket/restaurant/wp-content/uploads/2021/02/shop-03-300x300.jpg' />
            </div>
            </div>
        </div>
        <div id='footer-copyright-cont'>
            <p id='footer-copyright'>Developed by <a className='footer-nav-links' href="https://www.linkedin.com/in/daniel70125">Daniel Wright</a> </p>
        </div>
        </div>
     );
}

export default Footer;