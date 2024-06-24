import React, { Component } from 'react';
import './Contact.scss'

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
                            <p>Div 1</p>
                        </div>
                        <div className='contact-flex-div'>
                            <p>Div 2</p>
                        </div>
                        <div className='contact-flex-div'>
                            <p>Div 3</p>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;