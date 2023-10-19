'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { IconType } from 'react-icons';
import { BsYoutube } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

import { config } from '@odnlabs/utils';

interface Link {
  label: string;
  href: string;
}

const links: { title: string; items: Link[] }[] = [
  {
    title: 'Website',
    items: [
      { label: 'Homepage', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Login', href: '/login' },
      { label: 'Register', href: '/register' },
    ],
  },
  {
    title: 'About Us',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/about' },
      { label: 'The Vision Ahead', href: '/about/vision' },
      { label: 'Meet the Team', href: '/about/team' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Feedback', href: '/feedback' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'Policies',
    items: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Community Guidelines', href: '/guidelines' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Licenses', href: '/licenses' },
    ],
  },
];

const socialMediaLinks = [
  {
    name: 'GitHub',
    url: config.social.github,
    icon: RiGithubFill as IconType,
  },
  {
    name: 'LinkedIn',
    url: config.social.linkedin,
    icon: RiLinkedinFill as IconType,
  },
  {
    name: 'YouTube',
    url: config.social.youtube,
    icon: BsYoutube as IconType,
  },
  {
    name: 'Email',
    url: config.social.email,
    icon: MdEmail as IconType,
  },
];

export const Footer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="md:py-10 border-t border-border bg-[rgb(var(--footer))] text-sm">
        <div className="max-w-5xl pt-10 md:py-5 lg:py-10 mx-auto md:w-10/12 lg:flex justify-between">
          <div className="mx-auto text-center mb-10 lg:mx-0 lg:text-left w-80 lg:mb-0">
            <Image
              height={50}
              width={50}
              src="/logo.png"
              alt="Footer Logo"
              className="mx-auto lg:mx-0"
            />
            <p className="mt-4 font-medium text-xl text-text-primary">
              Open Dev Net
            </p>

            <div className="flex mt-5 text-text-faint">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="hover:text-text-secondary active:text-text transition duration-200 mr-3"
                  target="_black"
                  rel="noreferrer"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:flex justify-between">
            {links.map((category, index) => (
              <div className="md:w-1/4" key={index}>
                {/* Category */}
                <p className="mb-4 font-semibold uppercase text-sm hidden md:block">
                  {category.title}
                </p>
                <button
                  className={`block md:hidden w-full border-t border-border/50 py-5 font-semibold uppercase text-text-secondary text-sm transition duration-200 ${
                    openIndex !== index &&
                    'hover:bg-secondary active:bg-secondary-active'
                  }`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {category.title}
                </button>

                {/* Links */}
                <div
                  className={`transition-[max-height,transform,opacity] duration-300 origin-top ${
                    openIndex === index
                      ? 'max-h-96 md:max-h-full'
                      : 'max-h-0 scale-y-90 opacity-0 overflow-y-hidden md:max-h-full md:scale-y-100 md:overflow-y-auto md:opacity-100'
                  }`}
                >
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="md:my-2">
                      <Link
                        href={item.href}
                        className="block md:inline border-t border-border/50 md:border-none bg-secondary/50 hover:bg-secondary focus:bg-secondary-active md:bg-transparent md:hover:bg-transparent md:focus:bg-transparent text-center md:text-left py-4 md:py-0 text-text-secondary md:text-text-faint hover:text-text-primary active:text-text transition duration-300 md:transition-none ring-inset focus-visible:ring"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-border/50 bg-[rgb(var(--footer))] text-sm">
        <p className="text-center text-sm text-text-faint">
          © {new Date().getFullYear()},{' '}
          <Link href="/" className="hover:text-text">
            OpenDevNet.com
          </Link>
        </p>
      </div>
    </>
  );
};
