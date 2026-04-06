"use client";

import React, { useState } from "react";
import { buttonBounceAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import PortfolioColFour from '@/components/portfolio/PortfolioColFour';
import BreadcurmbTwo from '@/components/breadcurmb/BreadcurmbTwo';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';

const PortfolioColFourMain = () => {

    useCursorAndBackground();
    useScrollSmooth();

    const [activeCategory, setActiveCategory] = useState("All Projects");

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            buttonBounceAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className='cursor-white-bg'>
                <div id="ball"></div>
            </div>

            <BackToTop />
            <ITSolutionHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>

                        <BreadcurmbTwo
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />

                        <PortfolioColFour
                            activeCategory={activeCategory}
                        />

                    </main>

                    <ITSolutionFooter />
                </div>
            </div>
        </>
    );
};

export default PortfolioColFourMain;