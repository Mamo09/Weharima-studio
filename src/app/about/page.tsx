// src/app/about.tsx  
import React from 'react';
import AboutUs from '../components/aboutus';
import OurTeam from '../components/ourteam';


const AboutPage: React.FC = () => {
  return (
    <div className='bg-[#fbf9f3]'>
      <AboutUs/>
      <OurTeam/>
    </div>
  );
};

export default AboutPage;
