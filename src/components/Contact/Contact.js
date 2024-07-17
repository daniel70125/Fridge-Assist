import React, { Component } from 'react';
import './Contact.scss'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='contact-wrapper'>
                <div id='img-cont'></div>
                
                <div id='get-in-touch-cont'>
                    <h1 className='main-color'>Get In Touch</h1>
                    <div id='get-in-touch-child-cont'>
                        <div className='get-in-touch-child-children'>
                            <p><EmailIcon /> E-Mail Us</p>
                            <a href= "mailto: fridgeassist@gmail.com"> fridgeassist@gmail.com </a>
                        </div>
                        <div className='get-in-touch-child-children'>
                            <p><ContactPhoneIcon  /> Call Us</p>
                            <a href="tel:+11231234567">(123)123-4567</a>
                        </div>
                        <div className='get-in-touch-child-children'>
                            <p><PlaceIcon /> Come See Us</p>
                            <p>123 Imaginary Lane. Waverly Place, NV 12345</p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;