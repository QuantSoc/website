import { useEffect } from 'react';
import './index.less';

import { IoIosMail } from "react-icons/io";


const NewsLetterForm = () => {
    useEffect(() => {
        // Load MailerLite script dynamically
        const script = document.createElement('script');
        script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    function handleSuccess() {
        const successRow = document.querySelector('.ml-subscribe-form-23253533 .row-success');
        const formRow = document.querySelector('.ml-subscribe-form-23253533 .row-form');
        if (successRow && formRow) {
            successRow.style.display = 'block';
            formRow.style.display = 'none';
        }
    }

    return (
        <div id="mlb2-23253533" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-23253533">
            <div className="ml-form-align-left">
                <div className="ml-form-embedWrapper embedForm">
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                        <div className="ml-form-embedContent" style={{ marginBottom: "0px" }}></div>
                        <form
                            className="ml-block-form"
                            action="https://assets.mailerlite.com/jsonp/829979/forms/147821366068905374/subscribe"
                            method="post"
                            target="_self"
                            onSubmit={handleSuccess}
                        >
                            <div className="ml-form-formContent">
                                <div className="ml-form-fieldRow ml-last-item">
                                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                        <div id='article-email'>
                                            <input
                                                aria-label="email"
                                                aria-required="true"
                                                type="email"
                                                className="form-control"
                                                name="fields[email]"
                                                placeholder="Email"
                                                autoComplete="email"
                                                required
                                            />
                                                                                        <IoIosMail id='article-email-icon' />

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="ml-submit" value="1" />
                            <div className="ml-form-embedSubmit">
                                <button type="submit" className="primary">Subscribe</button>
                                <button disabled style={{ display: 'none' }} type="button" className="loading">
                                    <div className="ml-form-embedSubmitLoad"></div>
                                    <span className="sr-only">Loading...</span>
                                </button>
                            </div>
                            <input type="hidden" name="anticsrf" value="true" />
                        </form>
                    </div>
                    <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                        <div className="ml-form-successContent">
                            <h4>Thank you!</h4>
                            <p>You have been sent an email to confirm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetterForm;