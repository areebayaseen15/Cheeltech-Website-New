"use client";

import bradcumBg from '../../../public/assets/img/blog/blog-masonry/blog-bradcum-bg.png';
import shape from '../../../public/assets/img/images/project-shape-1.png';
import { ArrowTwentyThree } from '@/svg/ArrowIcons';
import Image from 'next/image';

type Props = {
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
};

const BreadcurmbTwo = ({ activeCategory, setActiveCategory }: Props) => {
    const tabs = [
        "All Projects",
        "Web Development",
        "Secure Maintenance",
        "API Integrations",
        "UI/UX Design",
        "Newsletter Development"
    ];

    return (
        <div className="tp-breadcrumb-area tp-breadcrumb-ptb" style={{ backgroundImage: `url(${bradcumBg.src})` }}>
            <div className="container container-1430">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="tp-portfolio-inner-box pb-100">

                            <div className="tp-portfolio-heading pb-30 d-flex p-relative">
                                <span className="tp-section-subtitle pre orange-color mr-95">
                                    Portfolio <ArrowTwentyThree />
                                </span>

                                <h3 className="tp-blog-title fs-100">
                                    Building Impactful <Image src={shape} alt="shape" /> <br />
                                    Digital Products
                                </h3>
                            </div>

                          <div className="tp-portfolio-inner-tab-wrap">
  <div className="tp-tabs">

    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveCategory(tab)}
        className={`tp-tab-btn ${
          activeCategory === tab ? "active" : ""
        }`}
      >
        {tab}
      </button>
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

export default BreadcurmbTwo;