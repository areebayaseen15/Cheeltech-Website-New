"use client";

import { useEffect } from "react";
import { contactBgAnimation, fadeAnimation } from "@/hooks/useGsapAnimation";
import { useCursorAndBackground } from "@/hooks/useCursorAndBackground";
import ContactFormArea from "@/components/contacts/ContactFormArea";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import InnerMapArea from "@/components/contacts/InnerMapArea";
import ContactHero from "@/components/contacts/ContactHero";
import useScrollSmooth from "@/hooks/useScrollSmooth";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";
import ContactUsAbout from "@/components/about/ContactUsAbout";

const ContactMain = () => {
  useCursorAndBackground({ bgColor: "#fff" });
  useScrollSmooth();

  useEffect(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      contactBgAnimation();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      <BackToTop />
      <ITSolutionHeader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContactHero />
            <InnerMapArea />
            <ContactFormArea />
            <ContactUsAbout />
          </main>

          <ITSolutionFooter />
        </div>
      </div>
    </>
  );
};

export default ContactMain;
