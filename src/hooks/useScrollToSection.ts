'use client';

import { ScrollSmoother } from 'gsap/ScrollSmoother';

export function scrollToSectionById(id: string) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id "${id}" not found`);
        return;
    }

    const smoother = ScrollSmoother.get();
    
    if (smoother) {
        smoother.scrollTo(element, true, 'top');
    } else {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
