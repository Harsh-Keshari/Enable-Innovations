import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Services',
      href: '#services'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    // {
    //   label: 'GitHub',
    //   href: 'https://github.com/Harsh-Keshari'
    // },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/harsh-keshari-893657229/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/HarshKe70809998'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/keshari4545_/'
    },
    // {
    //   label: 'CodePen',
    //   href: 'https://codepen.io/codewithsadee'
    // }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                    Let&apos;s work together today!
                    </h2>

                     <ButtonPrimary
                     href="mailto:harshkeshari768@gmail.com"
                     label='Start Project'
                     icon="chevron_right"
                     classes="reveal-up"
                     />
 
                </div>
                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>
                        <ul>
                            {sitemap.map(({label,href},key)=>(
                                <li key={key}>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transitions-colors hover:text-zinc-200 reveal-up">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {socials.map(({label,href},key)=>(
                                <li key={key}>
                                    <a 
                                    href={href} 
                                    target='_blank'
                                    className="block text-sm text-zinc-400 py-1 transitions-colors hover:text-zinc-200 reveal-up">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
              <div className='flex items-center'>
              <a 
                href="#services" 
                className="logo reveal-up">
                    <img 
                    src="/images/logo_123.png"
                    width={20}
                    height={20} 
                    alt="Logo" 
                    className="mx-4" />
                    <span className="text-xs text-zinc-400 ">Scroll Up</span>
                </a>
                
              </div>
                
                <p className="text-zinc-500 text-sm">
                    &copy; 2024 <span className="text-zinc-200">Enable Innovations</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
