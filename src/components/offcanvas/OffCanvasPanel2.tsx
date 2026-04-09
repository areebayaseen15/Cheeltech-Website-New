
import logoBlack from '../../../public/assets/img/images/logo32.png';
import logoWhite from '../../../public/assets/img/images/logo32.png';
import { CrossIconTwo} from '@/svg';
import MainMobileMenu from "../../layouts/subComponents/MainMobileMenu";
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone, FiMail } from "react-icons/fi";
import React from 'react';


// prop type
type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};


const OffCanvasPanel: React.FC<IProps> = ({ openOffcanvas, setOpenOffcanvas }) => {
    return (
        <>
            <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
                <div className="tp-offcanvas-wrapper @@class offcanvas-white-bg">
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <Image className="logo-1" width={180} src={logoBlack} alt="logo-black" />
                                <Image className="logo-2" width={180} src={logoWhite} alt="logo-white" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close">
                            <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-close-btn">
                                <CrossIconTwo />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-content d-none d-xl-block">
                            <h3 className="tp-offcanvas-title">Hello There!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                        <div className="tp-offcanvas-menu d-xl-none">
                            <nav><MainMobileMenu setOpenOffcanvas={setOpenOffcanvas} /></nav>
                        </div>
                        
                        </div>
                        <div className="tp-offcanvas-contact">
                            <h3 className="tp-offcanvas-title sm">Information</h3>
                           <ul className="contact-list">
  <li>
    <Link href="tel:+923422766346">
      <FiPhone /> +92 342 2766346
    </Link>
  </li>

  <li>
    <Link href="mailto:awais@signsolution.xyz">
      <FiMail />hello@cheeltech.com
    </Link>
  </li>
</ul>
                        </div>
                      
                    </div>
                </div>

            <div onClick={() => setOpenOffcanvas(false)}
                className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
            ></div>
        </>
    );
};

export default OffCanvasPanel;