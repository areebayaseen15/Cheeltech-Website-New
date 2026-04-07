'use client';

import { ArrowTwenty } from '@/svg/ArrowIcons';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const ContactFormArea = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formRef.current) return;
        
        setLoading(true);
        setStatus({ type: null, message: '' });

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setStatus({
                type: 'success',
                message: 'Message sent successfully! We\'ll get back to you soon.'
            });
            formRef.current.reset();
            
            setTimeout(() => {
                setStatus({ type: null, message: '' });
            }, 4000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="tp-contact-form-ptb pb-100" id="contact-form-section">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-contact-form-heading tp_fade_anim mb-50">
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-15">
                                <span className="tp-section-subtitle pre">Contact Us</span>
                                <div className="ar-about-us-4-icon">
                                    <ArrowTwenty />
                                </div>
                            </div>
                            <h3 className="tp-section-title lts">{`Let's`} make <br />
                                your brand <br />
                                brilliant!</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-contact-form-wrap">
                            <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Full name*</label>
                                            <input name="name" type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Email address*</label>
                                            <input name="email" type="email" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Website link / Subject</label>
                                            <input name="subject" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>How Can We Help You*
                                            </label>
                                            <textarea name="message" required></textarea>
                                        </div>
                                        <div className="tp-contact-form-btn">
                                            <button className="w-100" type="submit" disabled={loading}>
                                                <span>
                                                    <span className="text-1">{loading ? 'Sending...' : 'Send Message'}</span>
                                                    <span className="text-2">{loading ? 'Sending...' : 'Send Message'}</span>
                                                </span>
                                            </button>
                                            <p className="ajax-response mt-5"></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            
                            {status.message && (
                                <div className={`mt-3 p-3 rounded transition-opacity duration-300 ${
                                    status.type === 'success' 
                                        ? 'bg-success-subtle text-success-emphasis border border-success-subtle' 
                                        : 'bg-danger-subtle text-danger-emphasis border border-danger-subtle'
                                }`}>
                                    {status.message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormArea;