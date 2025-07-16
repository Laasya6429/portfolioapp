import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4d385b86-557f-47d1-97a2-950b4c7d3541");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Form submitted successfully.....")
        }
      };

  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme_pattern"/>
      </div>
      <div className="contact-section">
      <div className="contact-left"> 
           <h1>Let's talk</h1>
           <p>I am currently seeking opportunities to showcase my skills and experience. Feel free to reach out to me!</p>
           <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="mail-icon"/><p>laasya6429@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt="location-icon"/>Hyderabad, Telangana<p></p>
                </div>
                <div className="contact-detail">
                 <img src={call_icon} alt="call-icon"/><p>+918247363523</p>
                </div>
           </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
         <label htmlFor=''>Your Name</label>
         <input type="text" placeholder='Enter Your Name' name="name"/>
         <label htmlFor=''>Your Email</label>
         <input type="email" placeholder='Enter Your Email' name="email"/>
         <label htmlFor=''>Write your message here</label>
         <textarea name="meassage" rows="8" placeholder='Enter your message'></textarea>
         <button type="submit" className="contact-submit">Submit now</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
