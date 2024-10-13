import React from 'react'

import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/web_development.png',
    label: 'Website Development',
    desc: 'Framework'
  },
    {
      imgSrc: '/images/app.png',
      label: 'App Development',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/marketing.png',
      label: 'Digital Marketing',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/maintenance.png',
      label: 'Website Maintenance',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/domain.png',
      label: 'Domain & Hosting',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/layers.png',
      label: 'Graphic Designing',
      desc: 'Database'
    },
    // {
    //   imgSrc: '/images/tailwindcss.svg',
    //   label: 'TailwindCSS',
    //   desc: 'User Interface'
    // },
    // {
    //   imgSrc: '/images/figma.svg',
    //   label: 'Figma',
    //   desc: 'Design tool'
    // }
  ];

const Skill = () => {
  return (
    <section 
    id='services'
    className='section'>
        <div className="container">
            <h2 className="headline-2 reveal-up ">
            Services We Provide
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Empowering digital growth with our Innovative Services
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc},key)=>
                    (
                        <SkillCard 
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
