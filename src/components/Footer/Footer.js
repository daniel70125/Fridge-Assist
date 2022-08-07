import React, { Component } from 'react';
import './Footer.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Footer() {

    return ( 
        <div id='footer-wrapper'>
            {/* Secondary Div */}
            <div>
                <h1>Contact Us</h1>
                <Form style={{"overflowX":"hidden","textAlign":"center"}}>
                    <Form.Control type="text" placeholder="First Name" className='contact-form'/>
                    <Form.Control type="email" placeholder="Last Name" className='contact-form'/>
                    <Form.Control style={{"height":"10vh"}} type="text" placeholder="Message" className='contact-form'/>
                </Form>
            </div>
            <div id='footer-div1'>
                <div>
                    <h1>Contacts</h1>
                    <a href="mailto:fridgeassist@hotmail.com">fridgeassist@hotmail.com</a>
                    <p>Phone: (504) 123-4567</p>
                    <p>Fax: (504) 123-4567</p>
                </div>
                    <h1>Follow</h1>
                <div id='footer-icons'>
                    <span><TwitterIcon className='footer-follow-icons'/></span>
                    <span><FacebookIcon className='footer-follow-icons'/></span>
                    <span><YouTubeIcon className='footer-follow-icons'/></span>
                    <span><InstagramIcon className='footer-follow-icons'/></span>
                    <span><GoogleIcon className='footer-follow-icons'/></span>
                    <span><LinkedInIcon className='footer-follow-icons'/></span>
                </div>
                <div>
                    <h2ss>Opening Hours</h2ss>
                </div>
            </div>
        </div>
     );
}

export default Footer;