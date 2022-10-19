import React from 'react';

const SKILL_LIST = [
  { id: 1, src: 'hi', title: 'HTML', style: 'shadow-orange-500' },
  { id: 2, src: 'hi', title: 'CSS', style: 'shadow-blue-500' },
  { id: 3, src: 'hi', title: 'Javascipt', style: 'shadow-yellow-500' },
  { id: 4, src: 'hi', title: 'Typescript', style: 'shadow--500' },
  { id: 5, src: 'hi', title: 'React', style: 'shadow-blue-600' },
  { id: 6, src: 'hi', title: 'Next.js', style: 'shadow-white' },
];

const LIBRARY_LIST = [
  { id: 1, src: 'hi', title: 'chakra-ui', style: 'shadow--500' },
  { id: 2, src: 'hi', title: 'tailwindCSS', style: 'shadow-sky-400' },
  { id: 3, src: 'hi', title: 'Redux', style: 'shadow--500' },
  { id: 4, src: 'hi', title: 'GraphQL', style: 'shadow-pink-400' },
  { id: 5, src: 'hi', title: 'React Query', style: 'shadow--500' },
  { id: 6, src: 'hi', title: 'React Hook Form', style: 'shadow--500' },
  { id: 7, src: 'hi', title: 'Electron', style: 'shadow--500' },
];

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies Ive worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {SKILL_LIST.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
