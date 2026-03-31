import { CareerShape } from '@/svg/HeroShape';
import React from 'react';

const ServiceFourHero = () => {
    return (
        <div className="tp-service-4-area tp-service-4-border p-relative">
            <div className="service-shape-style">
                <span><CareerShape /></span>
            </div>
            <div className="container container-1320">
                <div className="ar-about-us-4-hero-ptb">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-title-box tp_fade_anim z-index-1" data-delay=".3">
                                <h3 className="tp-service-4-title">Building Scalable Software <br/> Solutions.</h3>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tp-service-4-text pt-150 tp_fade_anim z-index-1" data-delay=".5">
                                <p>We engineer powerful digital platforms that 
drive engagement and scale your brand. From expert design to technical execution, we deliver 
premium, professional solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFourHero;