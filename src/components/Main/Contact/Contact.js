import './contact.css'
import telegram_icon from '../../../resources/icons/telegram_icon.svg'
import instagram_icon from '../../../resources/icons/instagram_icon.svg'
function Contact(){
    return (
        <>
            <section className="contact section" id="contact">
                <div className="contact__container">
                    <div className="contact__data">
                        <div className="title section__title-2">
                            <p>Contact me</p>
                        </div>
                        <p className="contact__description-1">
                            I read all the emails. Send me any message you want and I will answer you. Also, a good option would be to write to me in Telegram.
                        </p>
                        <div className="geometric-box"></div>
                    </div>
                    <div className="contact__mail">
                        <div className="title contact__title">
                            Send Me A Message
                        </div>
                        <form action="" className="contact__form" id="contact__form">
                            <div className="contact__group">
                                <div className="contact__box">
                                    <input type="text" name="user_name" className="contact__input" id="name" required placeholder=""/>
                                    <label htmlFor="name" className="contact__label"></label>
                                </div>
                                <div className="contact__box">
                                    <input type="text" name="user_name" className="contact__input" id="name" required placeholder=""/>
                                    <label htmlFor="name" className="contact__label"></label>
                                </div>
                                <div className="contact__box">
                                    <input type="text" name="user_name" className="contact__input" id="name" required placeholder=""/>
                                    <label htmlFor="name" className="contact__label"></label>
                                </div>
                                <div className="contact__box contact__area">
                                    <textarea name="" id="message" className="contact__input" required placeholder=""></textarea>
                                    <label htmlFor="name" className="contact__label"></label>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="contact__social">

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact