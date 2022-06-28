import contactImg from '../../image/contact-2.png';
import './Contact.css';
function Contact() {
    return (
        <div className='contact_area pt_80 pb_80' id='Contact'>
            <div className="container relative">
                <div className="row justify_content_space_between">
                    <div className="col_2">
                    <div class="circle2 circle"></div>
                        <div className="contact_text">
                            <h2>Hire Me</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p><span>+88018128--302</span> or email <span>rafinsripon@gmail.com</span></p>
                        </div>
                        <div className="input_box">
                            <input type="text" className='name' placeholder='Your Name' required />
                            <input type="text" className='email' placeholder='Your Email' required />
                            <input type="text" className='subject' placeholder='Subject' required />
                            <textarea name="text" className='massage' id="massage" placeholder='Massage' cols="30" rows="10" required ></textarea>
                            <button className='contact btn pointer'>Contact Me</button>
                        </div>
                    </div>
                    <div className="col_2">
                        <div className="contact_img">
                            <img src={contactImg} alt="Img not found" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;