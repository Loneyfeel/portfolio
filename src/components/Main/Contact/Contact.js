import './contact.css'
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import telegram_icon from '../../../resources/icons/telegram_icon.svg'
import instagram_icon from '../../../resources/icons/instagram_icon.svg'
import sendPlaneFillIcon from "../../../resources/icons/send-plane-fill.svg";
import curved_arrow from '../../../resources/images/curved-arrow.svg'
import {motion} from "framer-motion";
import {appOnTheLeftAnimation, appOnTheRightAnimation} from '../../helpers/animation'

function Contact() {
    const [message, setMessage] = useState('')
    const form = useRef()
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_subject: '',
        message: '',
    })
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_mdfo5lp', 'template_c2o1pnl', form.current, 'WPhtvTnUlUnxyLp6y')
            .then(() => {
                setMessage('Message sent successfully ✅')
                setTimeout(() => {
                    setMessage('')
                }, 5000);
                setFormData({
                    user_name: '',
                    user_email: '',
                    user_subject: '',
                    message: '',
                })
            })
            .catch(() => {
                setMessage('Message not sent (service error) ❌')
            })
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <section className="contact section" id="contact">
                <div className="contact__container">
                    <motion.div className="contact__data"
                                variants={appOnTheLeftAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}>
                        <div className="title section__title-2">
                            <p>Contact me</p>
                        </div>
                        <p className="contact__description">
                            I read all the emails. Send me any message you want and I will answer you. <br/><br/> Also, a good
                            option would be to write to me in Telegram.
                        </p>
                        <div className="geometric-box"></div>
                    </motion.div>
                    <motion.div className="contact__mail"
                                variants={appOnTheRightAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}>
                        <div className="title contact__title">
                            Send Me A Message
                        </div>
                        <form action="" className="contact__form" id="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="contact__group">
                                <div className="contact__box">
                                    <input type="text" name="user_name" className="contact__input" id="name" required
                                           placeholder="Name" value={formData.user_name} onChange={handleInputChange}/>
                                    <label htmlFor="name" className="contact__label">Name</label>
                                </div>
                                <div className="contact__box">
                                    <input type="email" name="user_email" className="contact__input" id="email" required
                                           placeholder="Email Address" value={formData.user_email} onChange={handleInputChange}/>
                                    <label htmlFor="email" className="contact__label">Email Address</label>
                                </div>
                            </div>
                            <div className="contact__box">
                                <input type="subject" name="user_subject" className="contact__input" id="subject"
                                       required placeholder="Subject" value={formData.user_subject} onChange={handleInputChange}/>
                                <label htmlFor="subject" className="contact__label">Subject</label>
                            </div>
                            <div className="contact__box contact__area">
                                <textarea name="message" id="message" className="contact__input" required
                                          placeholder="Message" value={formData.message} onChange={handleInputChange}/>
                                <label htmlFor="message" className="contact__label">Message</label>
                            </div>
                            <p className="contact__message" id="contact-message">{message}</p>
                            <button type="submit" value="Send" className="contact__button button">
                                <img className="sendPlaneFillIcon" src={sendPlaneFillIcon} alt=""/><p>Contact me</p>
                            </button>
                        </form>
                    </motion.div>
                </div>
                <div className="contact__social">
                    <img src={curved_arrow} alt="" className="contact__social-arrow"/>
                    <div className="contact__social-data">
                        <p className="contact__social-description">
                            Write me on my social networks
                        </p>
                    </div>
                    <div className="contact__social-links">
                        <a href="https://t.me/Feel_moor/" target="_blank" className="contact__social-link">
                            <div className="contact__link-box"><img src={telegram_icon} alt=""/></div>
                        </a>
                        <a href="https://instagram.com/_m_o_o_r_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"
                           className="contact__social-link">
                            <div className="contact__link-box"><img src={instagram_icon} alt=""/></div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact