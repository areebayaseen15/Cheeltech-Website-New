"use client";

import React from "react";

// Components
import CorporateAgencyBannerTwo from "@/components/banner/CorporateAgencyBannerTwo";
import CorporateAgencyAbout from "@/components/about/CorporateAgencyAbout";
import AboutStartupHero from "@/components/hero-banner/AboutStartupHero";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import SearchArea from "@/components/search-area/SearchArea";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";
import HomeMainWork from "@/components/work/HomeMainWork";
// import AboutBenifit from "@/components/benefits/aboutBenefit";
import ITSolutionBrandThree from "@/components/brand/itsolutionbrandthree";


// Hooks
import { useCursorAndBackground } from "@/hooks/useCursorAndBackground";
import useScrollSmooth from "@/hooks/useScrollSmooth";
import { useGSAP } from "@gsap/react";
import { fadeAnimation, panelAnimation, eyeAnimation } from "@/hooks/useGsapAnimation";
import CorporateAgencyBannerTo from "@/components/banner/baner";

const AboutStartupMain = () => {
  // Background and cursor effect
  useCursorAndBackground();

  // Smooth scroll
  useScrollSmooth();

  // GSAP animations — use directly in useGSAP, no nested useEffect
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      panelAnimation();
      eyeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {/* Magic Cursor */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      {/* Global Component */}
      <BackToTop />
      <SearchArea />
      <ITSolutionHeader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <AboutStartupHero />
            <CorporateAgencyBannerTwo />
               <AboutStartupHero />
            <CorporateAgencyBannerTo />
            <CorporateAgencyAbout />

            <ITSolutionBrandThree />
            {/* <CorporateAgencyService /> */}
            <HomeMainWork />
            {/* <AboutBenifit /> */}
          </main>
          <ITSolutionFooter />
        </div>
      </div>
    </>
  );
};

export default AboutStartupMain;
