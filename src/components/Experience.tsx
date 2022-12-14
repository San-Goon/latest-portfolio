import React from 'react';

const Experience = () => {
  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 py-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 px-12 sm:px-0">
          <div>
            <div className="flex">
              <p className="text-2xl border-b-4 border-gray-500">Educations</p>
            </div>
            <p className="pt-6">안양대학교 정보전기전자공학과 졸업</p>
            <p className="text-gray-500 pt-2">2014.03~2021.02</p>
            <p className="pt-6">메가바이트스쿨 프론트엔드 과정 5기 수료</p>
            <p className="text-gray-500 pt-2">2022.07~2022.11</p>
          </div>
          <div>
            <div className="flex">
              <p className="text-2xl border-b-4 border-gray-500">Career</p>
            </div>
            <p className="pt-6">라스트일마일</p>
            <p className="text-gray-500 pt-2">프론트엔드 개발자</p>
            <p className="text-gray-500">2021.11~2022.07</p>
            <p className="pt-6">똑똑한개발자</p>
            <p className="text-gray-500 pt-2">프론트엔드 개발자 / 인턴</p>
            <p className="text-gray-500">2022.09~2022.11</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
