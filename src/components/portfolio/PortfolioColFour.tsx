"use client";

import portfolioData from '@/data/portfolioData';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

type Props = {
  activeCategory: string;
};
const PortfolioColFour = ({ activeCategory }: Props) => {
const allProjects = portfolioData.filter(
  (item) => item.id >= 34 && item.id <= 47
);
const filteredProjects =
  activeCategory === "All Projects"
    ? allProjects
    : allProjects.filter((item) => {
        if (!item.category) return false;

        if (Array.isArray(item.category)) {
          return item.category.includes(activeCategory);
        }

        return item.category === activeCategory;
      });
    return (
        <div className="tp-portfolio-inner-ptb pb-70">
            <div className="container container-1830">
                <div className="row">

                    {filteredProjects.map(item => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                            <div className="tp-portfolio-inner-item mb-65">

                                <div className="tp-portfolio-inner-thumb">
                                    <Link href={item.link} target='_blank'>
                                        <Image src={item.image} alt={item.title} style={{ width: "100%", height: "auto" }} />
                                    </Link>
                                </div>

                                <div className="tp-portfolio-inner-content">
                                    <h4 className="tp-portfolio-inner-title fs-30">
                                        <Link href={item.link}>{item.title}</Link>
                                    </h4>
                                    <span>{item.stack}</span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default PortfolioColFour;