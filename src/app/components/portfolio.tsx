/* eslint-disable @next/next/no-img-element */

"use client"; // Menandai file ini sebagai komponen klien

import React, { useState } from "react";


const Portfolio: React.FC = () => {
  const navLinks = [
    { name: 'All Projects', category: 'all' },
    { name: 'Architecture', category: 'architecture' },
    { name: 'Interior Design', category: 'interior design' },
    { name: 'Visualization', category: 'visualization' },
  ];
  
  // Portfolio items data
  const portfolioItems = [
    {
      id: 1, // Unique ID
      ImageHref: "https://i.ibb.co/64WfFPt/image-01.jpg",
      category: "Architecture",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 2, // Unique ID
      ImageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg",
      category: "Interior Design",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 3, // Unique ID
      ImageHref: "https://i.ibb.co/vkt8C1P/image-02.jpg",
      category: "Visualization",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 4, // Unique ID
      ImageHref: "https://i.ibb.co/3FKqS1G/image-03.jpg",
      category: "Architecture",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 5, // Unique ID
      ImageHref: "https://i.ibb.co/m6dq2fX/image-04.jpg",
      category: "Interior Design",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 6, // Unique ID
      ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
      category: "Visualization",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
  ];

  const [showCard, setShowCard] = useState<string>("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <section className="p-8 bg-gray-900 mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center text-white">
              <span className=" mb-2 block text-lg font-semibold">
                Our Portfolio
              </span>
              <h2 className="text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Our Recent Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1 text-white b">
              {navLinks.map((link) => (
                <li className="mb-1" key={link.category}>
                  <button
                    onClick={() => handleProject(link.category)}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-normal transition md:py-3 lg:px-8 ${
                      showCard === link.category
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id} // Use unique ID here
              ImageHref={item.ImageHref}
              category={item.category}
              title={item.title}
              button={item.button}
              buttonHref={item.buttonHref}
              showCard={showCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

interface PortfolioCardProps {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  showCard,
  category,
  ImageHref,
  buttonHref,
}) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/4 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-lg w-full relative flex items-center justify-center p-2 ">
        <a href={buttonHref}>
        <img 
        src={ImageHref} 
        alt="portfolio" 
        className="rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-secondary"/>
        </a>
        </div>

        
      </div>
    </div>
  );
};



