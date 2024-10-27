import React from 'react';
import explore from '../assets/explorebg.jpg';

const milestones = [
  {
    id: 1,
    title: "Founded",
    description: "Our hedge fund was founded with a vision to create financial stability.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    id: 2,
    title: "First Investment",
    description: "Made our first significant investment, creating ripples in the market.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
  },
  {
    id: 3,
    title: "Reached $1B",
    description: "Achieved $1 billion in assets under management.",
    image: "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg"
  },
  {
    id: 4,
    title: "Global Expansion",
    description: "Expanded our operations globally, establishing offices in multiple countries.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gray-100">
      <div className="inset-0 absolute bg-cover bg-center z-0 aspect-auto" style={{ backgroundImage: `url(${explore})` }}></div>
      
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Explore</h2>
        <p className="text-gray-600">Discover our journey and milestones in the financial market.</p>
      </div>
      <div className="relative wrap overflow-hidden p-10 w-full h-full">
        <div className="absolute border border-opacity-20 border-gray-700 h-full" style={{left: '50%'}}></div>

        {milestones.map((milestone, index) => (
          <div key={milestone.id} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'right-timeline flex-row-reverse' : 'left-timeline'}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{milestone.id}</h1>
            </div>
            <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'bg-blue-400' : 'bg-red-400'}`}>
              <img src={milestone.image} alt={milestone.title} className="rounded-lg mb-3 w-full h-32 object-cover" />
              <h3 className={`mb-3 font-bold text-xl ${index % 2 === 0 ? 'text-gray-800' : 'text-white'}`}>{milestone.title}</h3>
              <p className={`text-sm leading-snug tracking-wide ${index % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
