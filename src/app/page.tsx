'use client';  
import React from 'react';  
import Portfolio from './components/portfolio';  
import Hero from './components/hero';
// import WhyChooseUs from './components/whychooseus';
import ProjectStages from './components/workprocess';


// const Layanan: React.FC = () => {
//   return ( <div>ini layanan</div>)
// }


const HomePage: React.FC = () => {
  return (
    <div className='bg-[#fbf9f3]'>
      
      <Hero />
      <Portfolio/>
      {/* <WhyChooseUs/> */}
      <ProjectStages/>
      
    </div>
  );
};

export default HomePage;