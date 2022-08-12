import React from 'react';
import './Footer.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import SendIcon from '@mui/icons-material/Send';

function Footer() {

    return ( 
        <div id='footer-bg'>
        <div id='footer-wrapper'>
            {/* Secondary Div */}
            <div id='footer-div1'>
                <h1>Contact Us</h1>
                <Form id='footer-form'>
                    <Form.Control type="text" placeholder="First Name" className='contact-form'/>
                    <Form.Control type="email" placeholder="Last Name" className='contact-form'/>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Write your message here'>-</textarea>
                <Button variant="contained" endIcon={<SendIcon />}>Submit</Button>
                </Form>
            </div>
            <div id='footer-div2'>
                <div>
                    <h1>Contacts</h1>
                    <p><span>Email: </span><a href="mailto:fridgeassist@hotmail.com">fridgeassist@hotmail.com</a></p>
                    <p><span>Phone: </span><a href="tel:5042368584">(504) 123-4567</a></p>
                    <p><span>Fax: </span><a href="fax:504.555.1234567">504 555 1234567</a></p>
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
            </div>
        </div>
        <p id='footer-copyright'>Developed by <a href="https://www.linkedin.com/in/daniel70125">Daniel Wright</a> </p>
        </div>
     );
}

export default Footer;