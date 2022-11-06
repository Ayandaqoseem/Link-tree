import React from 'react';

import HeroImage from '../../assets/image/Hero.jpg'
import Menu from '../../assets/icons/menu.svg'
import Github from "../../assets/icons/github.svg";
import Slack from "../../assets/icons/slack.svg";


import Share from '../../assets/icons/share.svg'
import Footer from './Footer';

function Home() {

  return (
    <div>
      <div className='min-h-screen flex flex-col justify-start items-center gap-8 sm:gap-14 relative' >
        
        {/* PROFILE SECTION */}
        <div
            className='space-y-0 flex flex-col justify-center items-center mt-16 w-full  md:mx-0  ' 
            
        >
          <div className='bg-blue-400 w-full'>
            <div className='cursor-pointer absolute w-8 h-8 right-4 top-11 flex justify-center items-center rounded-full border-2 border-dashed md:hidden'>
            <img src={Menu} alt='' />
            </div>
            <div className='absolute top-11 right-4 sm:right-10 md:right-96 w-10 h-10 hidden md:flex justify-center items-center rounded-full border-2 border-dashed cursor-pointer'>
              <img src={Share} alt=''/>
            </div>
          </div>
          <div id="profil__img">
            <img 
                className='rounded-full h-20 w-30 mx-28 mb-3 md:mx-96 '
                src={HeroImage} alt="My profile pix" 
              />
          </div>
          <div id="twitter">
            <h2
              className='font-bold text-base'
            >
              Ayanda Qoseem
            </h2>
          </div> 
          <div id="slack">
            <h2
              className='font-bold text-base hidden'
              >Ayanda Qoseem
            </h2>
          </div> 
          {/* LINKS SECTION */}
        </div>
        <div className='flex flex-col justify-center items-center mt-5 w-full px-4 sm:px-12 lg:px-60 pb-40'>
          <a  
            className='bg-gray-300 px-24 py-4 rounded text-sm tracking-wide whitespace-nowrap
            md:px-80 md:whitespace-nowrap lg:px-96 lg:tracking-widest'
            target='_blank' 
            rel='noreferrer' 
            id='twitter' 
            href="https://twitter.com/AyandaQoseem"
          >
            Twitter Link
          </a>
          <a 
            className='bg-gray-300 px-24 py-4 rounded text-sm tracking-[.15em] whitespace-nowrap mt-5
            md:px-80 md:whitespace-nowrap lg:px-96 lg:tracking-[.25em]' 
            target='_blank' 
            rel='noreferrer' 
            id='btn__zuri' 
            href="https://training.zuri.team/"
          >
            Zuri Team
          </a>
          <a
            className='bg-gray-300 px-24 py-4 rounded text-sm whitespace-nowrap tracking-widest mt-5
            md:px-80 lg:px-96 lg:tracking-[.18em] lg:whitespace-nowrap' 
            target='_blank'
            rel='noreferrer' 
            id='books' 
            href="https://books.zuri.team"
            title='This is where you find books about design and coding.'
           >
            Zuri Books
          </a>
          <a 
            className='bg-gray-300 px-20 py-4 rounded text-sm tracking-[.15em] whitespace-nowrap mt-5 md:w-full 
            md:px-80 md:tracking-widest lg:px-96' 
            target='_blank' 
            rel='noreferrer' 
            id='book__python' 
            href="https://books.zuri.team/python-for-beginners?ref_id=ayanda_qoseem"
          >
            Python Books
          </a>
          <a 
            className='bg-gray-300 px-8 py-4  rounded text-sm tracking-wide whitespace-nowrap mt-5
            md:px-[260px] md:whitespace-nowrap lg:px-80 lg:tracking-wider lg:whitespace-nowrap'
            target='_blank' 
            rel='noreferrer' 
            id='pitch' 
            href="https://background.zuri.team/"
          >
            Background Check for Coders
          </a>
          <a 
            className='bg-gray-300 px-20 py-4 rounded text-sm tracking-[.15em] whitespace-nowrap mt-5 md:w-full 
            md:px-80 lg:px-96 ' 
            target='_blank'
            rel='noreferrer' 
            id='book__design' 
            href="https://books.zuri.team/design-rules"
          >
            Design Books
          </a>
          <a 
            className='bg-gray-300 px-24 py-4 rounded text-sm tracking-[.35em] whitespace-nowrap mt-5
            md:px-80 md:whitespace-nowrap lg:px-96 lg:tracking-[.45em]' 
            id='contact' 
            href="/contact"
          >
            Contact
          </a>
          <div className="social pt-12 pb-32  sm:pb-6 flex justify-center items-center gap-6">
          <a href="/">
            <img src={Slack} alt="" />
          </a>
          <a href="https://github.com/Ayandaqoseem">
            <img src={Github} alt="" />
          </a>
        </div>
        </div>
        <Footer />
       
      </div>
    </div>
  )
}

export default Home
