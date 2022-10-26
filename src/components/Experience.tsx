import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import NextJS from '../assets/nextjs.png';
import tailwind from '../assets/tailwind.png';
import graphQL from '../assets/graphql.png';
import Typescript from '../assets/typescript.png';
import Chakra from '../assets/chakra.png';
import Redux from '../assets/redux.png';
import ReactQuery from '../assets/reactquery.png';
import Electron from '../assets/electron.png';

const SKILL_LIST = [
  { id: 1, src: HTML, title: 'HTML', style: 'shadow-orange-500' },
  { id: 2, src: CSS, title: 'CSS', style: 'shadow-blue-500' },
  { id: 3, src: Javascript, title: 'Javascript', style: 'shadow-yellow-500' },
  { id: 4, src: Typescript, title: 'Typescript', style: 'shadow-blue-600' },
  { id: 5, src: ReactImg, title: 'React', style: 'shadow-blue-600' },
  { id: 6, src: NextJS, title: 'Next.js', style: 'shadow-white' },
];

const LIBRARY_LIST = [
  { id: 1, src: Chakra, title: 'chakra-ui', style: 'shadow-sky-600' },
  { id: 2, src: tailwind, title: 'tailwindCSS', style: 'shadow-sky-400' },
  { id: 3, src: Redux, title: 'Redux', style: 'shadow-purple-500' },
  { id: 4, src: graphQL, title: 'GraphQL', style: 'shadow-pink-400' },
  { id: 5, src: ReactQuery, title: 'React Query', style: 'shadow-red-500' },
  { id: 6, src: Electron, title: 'Electron', style: 'shadow-sky-500' },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">현재 주로 사용중인 기술들입니다.</p>
        </div>
        <div>
          <p className="text-xl font-bold inline border-b-4 border-gray-500">
            SKILL
          </p>
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
        <div>
          <p className="text-xl font-bold inline border-b-4 border-gray-500">
            LIBRARY
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {LIBRARY_LIST.map(({ id, src, title, style }) => {
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
