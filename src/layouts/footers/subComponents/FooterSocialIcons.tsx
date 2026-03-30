import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import React from 'react';

export const FooterSocialIcons = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Link href="https://www.linkedin.com/company/38160457/">
                <span><FaLinkedinIn /></span>
            </Link>{" "}
           
        </div>
    );
};


