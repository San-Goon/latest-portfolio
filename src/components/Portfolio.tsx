import React from 'react';
import dafalza from '../assets/portfolio/dafalza.png';
import incourserun from '../assets/portfolio/incourserun.png';
import stauter from '../assets/portfolio/stauter.png';

const PROJECT_LIST = [
  { id: 1, src: dafalza },
  { id: 2, src: incourserun },
  { id: 3, src: stauter },
  // { id: 4, src: 'hi' },
];

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            현재까지 작업했던 프로젝트입니다. 클릭하시면 자세한 정보를 확인하실
            수 있습니다.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {PROJECT_LIST.map(({ id, src }) => {
            return (
              <div
                key={id}
                className="flex shadow-md justify-center items-center shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
