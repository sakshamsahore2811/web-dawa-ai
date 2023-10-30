
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';

// import location from "../../../../public/images/location.png";
// import email from "../../../../public/images/email.png";
// import call from "../../../../public/images/call.png";

import calls from "../../../../public/images/calls.png";
import map from "../../../../public/images/map.png";
import mail from "../../../../public/images/mail.png";
import location1 from"../../../../public/images/location-1.png"
import msg from "../../../../public/images/msg.png"
import phone from "../../../../public/images/phone.png"





const Contact = () => {
    return (
        <div className={styles.container} id="contact">
            <h1>CONTACT US</h1>
            <div className={styles.main}>
                <div className={styles.contact}>
                    <div>
                        <Image src={location1} alt='img' />  <span>Location</span>
                        <p>
                            203/A1 Rukhmini Apt., Friends Colony. Katal Road Nagpur, <br />
                            Maharashtra
                        </p>
                    </div>
                    <div>
                        <Image src={msg} alt='img' />
                        <span>Email</span>
                        <p>
                            kushal@dawaai.co.in
                        </p>
                    </div>
                    <div>
                        <Image src={phone} alt='img' />
                        <span>Call</span>
                        <p>
                            +91 7770071144
                        </p>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14881.58160038246!2d79.026528!3d21.1764461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1b76dc52d5d%3A0x73ce5c28a94a3b3e!2sRukmani%20Apartment!5e0!3m2!1sen!2sin!4v1670948988466!5m2!1sen!2sin"
                        frameBorder="0" style={{ border: '0', padding: "10px", width: '100%', height: '250px' }} allowFullScreen></iframe>
                </div>

                <div className={styles.left_contact}>
                    <div className={styles.label}>
                    <div className={styles.nameinput}>
                            <p>Your Name</p>

                            <input type="text" />
                            </div>
                        <div>
                        <div className={styles.emailinput}>
                            <p>Your Email</p>
                            
                            <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.subject}>
                        <div className={styles.subjecttitle}>
                        <p>Subject</p>
                        
                        <input type="text" />
                        </div>
                    </div>
                    <div className={styles.subject}>
                        <div className={styles.msgtitle}>
                        <p>Message</p>
                        {/* <textarea cols="50" rows="10"></textarea> */}
                        <textarea cols="40" rows="5"></textarea>
                        </div>
                    </div>
                    <div className={styles.minput}>
                        <input type="text" />
                    </div>
                    <button className={styles.send}><div className={styles.sendtitle}>Send Message</div></button>
                </div>
            </div>
            </div>
    )
}

export default Contact;
