import type { ReactNode } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

/* social icons (images) */
import facebookIcon  from '../assets/shared/social_media/facebook.png';
import instagramIcon from '../assets/shared/social_media/instagram.png';
import twitterIcon   from '../assets/shared/social_media/twitter.png';
import youtubeIcon   from '../assets/shared/social_media/youtube.png';

/* app store badges */
import appStoreBadge   from '../assets/shared/social_media/apple.png';
import googlePlayBadge from '../assets/shared/social_media/google.png';
import appStoreBlackBadge   from '../assets/shared/social_media/apple_black.png';
import googlePlayBlackBadge from '../assets/shared/social_media/google_balck.png';


/* logo */
import logo from '../assets/shared/logo.png';

export interface FooterContactItem {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FooterLink {
  id: number;
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  id: number;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: number;
  label: string;
  href: string;
  image: string;
}

export interface AppBadge {
  id: number;
  label: string;
  href: string;
  image: string;
  title: string;
  imageBlack: string;
}

export interface FooterData {
  contact: FooterContactItem[];
  brand: {
    name: string;
    logo: string;
    description: string;
  };
  linkGroups: FooterLinkGroup[];
  socials: SocialLink[];
  downloadApp: {
    title: string;
    badges: AppBadge[];
  };
  copyright: string;
}

export const footerData: FooterData = {
  /* ─── Top row: contact info ─── */
  contact: [
    {
      id: 1,
      icon: <MapPin className="w-6 h-6 text-white" strokeWidth={2} />,
      title: 'Address',
      description: 'Oxford Ave. Cary, NC 27511',
    },
    {
      id: 2,
      icon: <Mail className="w-6 h-6 text-white" strokeWidth={2} />,
      title: 'Email',
      description: 'nwiger@yahoo.com',
    },
    {
      id: 3,
      icon: <Phone className="w-6 h-6 text-white" strokeWidth={2} />,
      title: 'Phone',
      description: '+537 547-6401',
    },
  ],

  /* ─── Brand block ─── */
  brand: {
    name: 'Car Rental',
    logo,
    description:
      'Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...',
  },

  /* ─── Link columns ─── */
  linkGroups: [
    {
      id: 1,
      title: 'Useful links',
      links: [
        { id: 1, label: 'About us',   href: '/about' },
        { id: 2, label: 'Contact us', href: '/contact' },
        { id: 3, label: 'Gallery',    href: '/gallery' },
        { id: 4, label: 'Blog',       href: '/blog' },
        { id: 5, label: 'F.A.Q',      href: '/faq' },
      ],
    },
    {
      id: 2,
      title: 'Vehicles',
      links: [
        { id: 1, label: 'Sedan',     href: '/vehicles/sedan' },
        { id: 2, label: 'Cabriolet', href: '/vehicles/cabriolet' },
        { id: 3, label: 'Pickup',    href: '/vehicles/pickup' },
        { id: 4, label: 'Minivan',   href: '/vehicles/minivan' },
        { id: 5, label: 'SUV',       href: '/vehicles/suv' },
      ],
    },
  ],

  /* ─── Social icons (image files) ─── */
  socials: [
    { id: 1, label: 'Facebook',  href: 'https://facebook.com',  image: facebookIcon },
    { id: 2, label: 'Instagram', href: 'https://instagram.com', image: instagramIcon },
    { id: 3, label: 'Twitter',   href: 'https://twitter.com',   image: twitterIcon },
    { id: 4, label: 'YouTube',   href: 'https://youtube.com',   image: youtubeIcon },
  ],

  /* ─── Download app ─── */
  downloadApp: {
    title: 'Download App',
    badges: [
      { id: 1, title:'Download on the', label: 'App Store',   href: 'https://apps.apple.com',  image: appStoreBadge, imageBlack: appStoreBlackBadge },
      { id: 2, title: 'Get It On', label: 'Google Play', href: 'https://play.google.com', image: googlePlayBadge, imageBlack: googlePlayBlackBadge },
    ],
  },

  copyright: `© ${new Date().getFullYear()} Car Rental. All rights reserved.`,
};