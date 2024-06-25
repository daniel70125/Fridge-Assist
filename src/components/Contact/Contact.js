import React, { Component } from 'react';
import './Contact.scss'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='contact-wrapper'>
                <div id='placeholder-div'>
                    <div>
                        <span>Contact Us</span>
                    </div>
                </div>
                <div id='contact-flex-cont'>
                        <div className='contact-flex-div'>
                            <h1>Get In Touch</h1>
                            <div id='contact-flex-get-in-touch'>
                                <div>
                                    <ContactPhoneIcon />
                                    <span className='contact-div1-span'>Call Us</span>
                                    <a href="tel:+15041234567">+1(504)123-4567</a>
                                </div>
                                <div>
                                    <EmailIcon />
                                    <span className='contact-div1-span'>Email Us</span>
                                    <a href= "mailto: fridgeassist@aol.com"> fridgeassist@aol.com </a>
                                </div>
                                <div>
                                    <PlaceIcon />
                                    <span className='contact-div1-span'>Come see Us</span>
                                    <span>123 Martin Luther King St. New Orleans, LA</span>
                                </div>
                            </div>
                        </div>
                        <div className='contact-flex-div'>
                        <h1>Come See Us</h1>
                        </div>
                        <div className='contact-flex-div'>
                            <h1>Message Us</h1>
                            <div>
                                <p>
                                    Want to add your own recipes and become star chef of the month? Or you just like the website and want to
                                    tell us how much you love our site? Leave your name and number like the 90's house phones and we'll 
                                    get right back to you!
                                </p>
                                <input placeholder='Name' type='text' />
                                <input placeholder='Email or phone number' type='text' />
                                <Button>Send! <SendIcon /></Button>
                            </div>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;