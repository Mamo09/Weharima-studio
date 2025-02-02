'use client'

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Comprehensive Expertise",
      description:
        "From architecture to interior design and 3D visualization, we provide end-to-end solutions tailored to your needs.",
    },
    {
      id: 2,
      title: "Tailored Design Solutions",
      description:
        "We collaborate closely with you to create designs that reflect your unique vision and functional requirements.",
    },
    {
      id: 3,
      title: "Cutting-Edge Visualization",
      description:
        "Our photorealistic 3D renderings bring your ideas to life, helping you visualize the final result before construction begins.",
    },
    {
      id: 4,
      title: "Attention to Detail",
      description:
        "Every detail is meticulously crafted to ensure your space is not only beautiful but also functional and sustainable.",
    },
    {
      id: 5,
      title: "Client-Centric Approach",
      description:
        "Your satisfaction is our priority. We maintain transparent communication and ensure a smooth, stress-free process.",
    },
    {
      id: 6,
      title: "Timely Delivery",
      description:
        "We respect your deadlines and deliver high-quality results on time, without compromising creativity or precision.",
    },
  ];

  return (
    <section className="pt-8 pb-8 bg-gradient-to-b from-[#fbfaf4] to-[#ffdf9c]">
        <div className="container mx-auto p-8">
            <div className="mx-auto">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Why Choose Us?
                </h2>
                <p className="text-lg text-black text-center mb-12 max-w-2xl mx-auto">
                At <a className="text-accent font-semibold">Weharima</a>, we pride ourselves on delivering exceptional architectural and design solutions tailored to your unique vision. Here’s why we stand out as the ideal partner for your next project
                </p>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <WhyChooseUsCard key={card.id} id={card.id} title={card.title} description={card.description} />
                ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                <p className="text-xl text-grey-800 black mb-8">
                    Ready to bring your vision to life? Let’s create something extraordinary together!
                </p>
                </div>
            </div>
            </div>
    </section>
    
  );
};

interface WhyChooseUsCardProps {
  id: number;
  title: string;
  description: string;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ id, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative">
      <div className="absolute -top-6 left-6 text-black bg-accent w-12 h-12 flex items-center justify-center rounded-2xl text-xl font-bold">
        {id}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
      <p className="text-black text-center font-normal" >{description}</p>
    </div>

    
  );
};

export default WhyChooseUs