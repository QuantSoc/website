import './index.less';

import ContactForm from 'routes/ContactPage/ContactForm/ContactForm';

const ContactPage = () => {

    return (
        <div className='page'>
            <div className="hero-section" id='contact-hero-section'>
                <div className="hero-text-container">

                <ContactForm / >
                </div>
            </div>
        
        </div>
    );
}

export default ContactPage;