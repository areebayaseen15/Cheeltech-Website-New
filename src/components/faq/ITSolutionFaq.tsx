import faqImg1 from '../../../public/assets/img/images/about-shape-1.png';
import faqImg2 from '../../../public/assets/img/home-11/faq/faq-2.png';
import { FAQItemDT } from '@/types/custom-d-t';
import Image from 'next/image';
import React from 'react';

const ITSolutionFaq = () => {
    // FAQ data array
    const faqData: FAQItemDT[] = [
        {
            id: 'collapseOne1',
            question: 'What core web development services does Cheeltech offer?',
            answer: 'We specialize in custom web development, WordPress, and PHP solutions. Our team is equipped to handle everything from initial strategy and design to full-scale development for diverse projects.',
            isOpen: true
        },
        {
            id: 'collapseTwo2',
            question: 'Is there a mobile app available Can you help modernize an existing, outdated website?',
            answer: 'Yes. We excel at transforming outdated sites into modern, high-performing platforms. We focus on improving site speed, optimizing ad placements, and significantly boosting user engagement.'
        },
        {
            id: 'collapseThree3',
            question: 'Is Cheeltech a good fit for early-stage startups?',
            answer: 'Absolutely. We are committed to bringing new ideas to life by offering innovative strategies and sensibly priced services designed to help startups launch and grow effectivel.'
        },
        {
            id: 'collapseFour4',
            question: 'How does the team handle complex project requirements?',
            answer: 'We thrive on challenges. Our team works tirelessly, often through long hours, to ensure that bespoke requirements are met with precision, technical finesse, and attention to detail.'
        },
        {
            id: 'collapseFive5',
            question: 'What is the typical process for a new project?',
            answer: 'Our journey begins with strategy, followed by custom design and expert development. We align our technical execution with your business vision to deliver a valuable final product.'
        },
        {
            id: 'collapseSix6',
            question: 'Does Cheeltech work with clients outside of Pakistan?',
            answer: 'Yes. While we are a leading agency in Pakistan, we serve a global clientele, providing high-quality digital solutions and maintaining effective communication regardless of your location.'
        }
    ];

    return (
        <div className="app-faq-area p-relative pb-120">
            <div className="it-faq-shape-1">
                <Image data-speed=".9" src={faqImg1} alt="faq-image" />
            </div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="app-faq-heading p-relative mb-40">
                            <span className="tp-section-subtitle border-bg bg-color">FAQ</span>
                            <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right mb-70">
                                Got any <br />Questions?
                            </h3>
                            <Image
                                data-speed="1.1"
                                className="it-faq-shape-2"
                                src={faqImg2}
                                alt="faq-image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="app-faq-wrap pl-70 z-index-1 tp_fade_anim" data-fade-from="right">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample1">
                                    {faqData.map((faq) => (
                                        <div className="accordion-items" key={faq.id}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-buttons ${faq.isOpen ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${faq.id}`}
                                                    aria-expanded={faq.isOpen ? 'true' : 'false'}
                                                    aria-controls={faq.id}
                                                >
                                                    {faq.question}
                                                    <span className="accordion-icon"></span>
                                                </button>
                                            </h2>
                                            <div
                                                id={faq.id}
                                                className={`accordion-collapse collapse ${faq.isOpen ? 'show' : ''}`}
                                                data-bs-parent="#accordionExample1"
                                            >
                                                <div className="accordion-body">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionFaq;