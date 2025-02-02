
'use client'
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <section>
        <div className="flex flex-wrap mx-auto">
            <div className="w-full sm:w-8/12 mb-10">
                <div className="container mx-auto h-full sm:p-10 pl-8">
                    <div className="flex justify-between items-center">
                        <div className="text-4xl font-bold pt-8">
                        Weharima<span className="text-accent">.</span>
                        </div>
                        <div>
                        </div>
                    </div>
                    <header className="container lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                        <h1 className="text-4xl lg:text-6xl font-bold">
                        Discover Architectural <span className="text-primary">Design</span> Inspiration for Your Space
                        </h1>
                        <div className="w-20 h-2 bg-secondary"></div>
                        <p className="text-xl mb-10">
                        Join us in creating stunning and functional spaces! We invite you to explore innovative and captivating architectural design ideas. Let&apos;s bring your vision to life with professional touches and limitless creativity. Together, we can transform your ideas into reality!
                        </p>
                        <a href="/contact">
                            <button 
                                type="button" 
                                className=" bg-accent hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg px-5 py-2.5 me-2 mb-2   focus:outline-none ">
                                Contact Now

                            </button>
                        </a>
                        
                        </div>
                        
                    </header>
                </div>
            </div>
            <Image
                src="/assets/img/heroimg.png"
                alt="Hero Image"
                width={300}
                height={300}
                className="w-full relative object-cover sm:h-screen sm:w-4/12"
            />
        </div>
            
    </section>
    
  );
};

export default Hero