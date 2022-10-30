import React from 'react';
import dafalza from '../assets/portfolio/dafalza.png';
import incourserun from '../assets/portfolio/incourserun.png';
import stauter from '../assets/portfolio/stauter.png';

const OFFICIAL_PROJECT_LIST = [
  {
    id: 1,
    src: dafalza,
    demo: 'https://ownerclan.com/V2/info_page/dafalza2.php',
    detail:
      'https://magenta-forest-566.notion.site/153f21e6b7de4505b3df259aa204a72b',
  },
  {
    id: 2,
    src: stauter,
    demo: 'https://stauter.contact',
    detail:
      'https://magenta-forest-566.notion.site/Stauter-1a005404c12946149f4ffd521659f22f',
  },
];

const PERSONAL_PROJECT_LIST = [
  {
    id: 3,
    src: incourserun,
    demo: 'https://fastcampas-5-commerce-fe-nwm6-idxtxcuz8-kylecho.vercel.app/login',
    detail:
      'https://magenta-forest-566.notion.site/incourse-run-ae3493ac5d0a4504b6ddf83fd6b56d66',
  },
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
        <div className="pb-4">
          <p className="text-xl font-bold inline border-b-4 border-gray-500">
            사내 프로젝트
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 pb-8 sm:px-0">
          {OFFICIAL_PROJECT_LIST.map(({ id, src, demo, detail }) => {
            return (
              <div
                key={id}
                className="shadow-md justify-center items-center shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={detail} target="_blank" rel="noopener noreferrer">
                      Detail
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pb-4">
          <p className="text-xl font-bold inline border-b-4 border-gray-500">
            개인 프로젝트
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {PERSONAL_PROJECT_LIST.map(({ id, src, demo, detail }) => {
            return (
              <div
                key={id}
                className="shadow-md justify-center items-center shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={detail} target="_blank" rel="noopener noreferrer">
                      Detail
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
