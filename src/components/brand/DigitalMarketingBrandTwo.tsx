"use client"
import Image from 'next/image';
import React from 'react';
import brand1 from "../../../public/assets/img/cheeltech-logos/Untitled-2.png";
import brand2 from "../../../public/assets/img/cheeltech-logos/assendive-logo.png";
import brand3 from "../../../public/assets/img/cheeltech-logos/bnc-logo.png";
import brand4 from "../../../public/assets/img/cheeltech-logos/brandopurtunity-logo.png";
import brand5 from "../../../public/assets/img/cheeltech-logos/imp-logo.png";
import brand6 from "../../../public/assets/img/cheeltech-logos/markable-logo.png";
import brand7 from "../../../public/assets/img/cheeltech-logos/prepaynation-logo.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const DigitalMarketingBrandTwo = () => {
    const brands = [
        { id: 1, image: brand1 },
        { id: 2, image: brand2 },
        { id: 3, image: brand3 },
        { id: 4, image: brand4 },
        { id: 5, image: brand5 },
        { id: 6, image: brand6 },
        { id: 7, image: brand7 },
        //   { id: 8, image: brand1 },
    ];

    return (
        <div className="dgm-brand-area fix mt-50">
            <div className="dgm-brand-wrapper">
                <div className="dgm-brand-active">
                    <Swiper
                        slidesPerView={6}
                        loop={true}
                        autoplay={true}
                        spaceBetween={0}
                        speed={1000}
                        breakpoints={{
                            '1600': { slidesPerView: 6 },
                            '1400': { slidesPerView: 5 },
                            '1200': { slidesPerView: 4 },
                            '992': { slidesPerView: 4 },
                            '768': { slidesPerView: 3 },
                            '576': { slidesPerView: 3 },
                            '0': { slidesPerView: 2 },
                        }}
                        modules={[Autoplay]}
                    >
                        {brands.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="dgm-brand-item">
                                    <Image src={brand.image} alt={`brand-${brand.id}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    );
};
export default DigitalMarketingBrandTwo;