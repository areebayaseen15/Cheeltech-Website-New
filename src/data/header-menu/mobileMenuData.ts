import { StaticImageData } from "next/image";

// Define types for our menu data
interface MenuLink {
    title: string;
    link: string;
    badge?: string;
}

interface SubMenuItem extends MenuLink {
    submenu?: MenuLink[];
}

interface MenuColumn {
    title: string;
    links: MenuLink[];
}

interface MenuItem {
    id: number;
    title: string;
    link: string;
    megaMenu: boolean;
    columns?: MenuColumn[];
    submenu?: SubMenuItem[];
    image?: {
        src: StaticImageData;
        alt: string;
    };
}

// Menu data structure
const mobileMenuData: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        megaMenu: false,
       
    },
    {
        id: 2,
        title: "About",
        link: "/About",
        megaMenu: false,
    
    },
    {
        id: 3,
        title: "Services",
        link: "/Services",
        megaMenu: false,
       
    },
    {
        id: 4,
        title: "Projects",
        link: "/Projects",
        megaMenu: false,
      
    },
    {
        id: 5,
        title: "Contact",
        link: "/Contact",
        megaMenu: false,
       
    },
  
];

export default mobileMenuData;