// import { useTranslation } from 'react-i18next';
import './lp-contact.scss';
import React, { useState } from 'react';

export const LPContact: React.FC = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        const isValidated = true; // TODO VALIDATION
        if (isValidated) {   
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            
            const data = await response.json();
            setResult(data.success ? "Success!" : "Error");
        }
    };

    return (
        <div className="contact-section">
            <div className='contact-content'>

                <img className='contact-logo' src="/assets/images/logo/mb-logo.png" alt="" />

                <div className='contact-text-container'>
                    <h2>Kontakt</h2>
                </div>

                <div className="contact-form-container">
                    <form className='contact-form' onSubmit={onSubmit}>
                        <label className='contact-lbl' htmlFor="name">Name:</label>
                        <input className='contact-input' type="text" name="name" required />
                        <label className='contact-lbl' htmlFor="email">E-Mail:</label>
                        <input className='contact-input' type="email" name="email" required />
                        <label className='contact-lbl' htmlFor="message">Nachricht:</label>
                        <textarea className='contact-msg' name="message" required></textarea>
                        <button className='contact-btn' type="submit">Senden</button>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};