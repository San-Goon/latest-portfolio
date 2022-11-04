import React, { useEffect } from 'react';

const ABOUT_LIST = [
  {
    id: 1,
    title: '소프트 스킬의 중요성을 알고 있습니다.',
    content:
      '혼자 하는 일이 아닌 협업을 하는 만큼, 팀의 능률을 높일 수 있도록 최선을 다합니다.',
  },
  {
    id: 2,
    title: '효율성을 중요시 합니다.',
    content:
      '나를 위해, 남들에게 피해를 끼치지 않기 위해 최대한 효율적으로 일을 하려고 노력합니다.',
  },
  {
    id: 3,
    title: '성장과 배움을 좋아합니다.',
    content:
      '새로운 기술에 대해 관심이 많고, 알고 있던 지식도 한 번 더 짚어가며 어제보다 나은 사람이 되는 것을 즐깁니다.',
  },
  {
    id: 4,
    title: '필요한 사람이 되고자 노력합니다.',
    content:
      '개발 관련 부분만이 아닌 다방면으로, 인간미도 갖추어 많은 사람이 필요로 하는 개발자가 되고자 합니다.',
  },
];

const About = () => {
  // useEffect(() => {
  //   const targets = document.querySelectorAll('.js-show-on-scroll');
  //
  //   const callback = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('motion-safe:animate-fadeIn');
  //       } else {
  //         entry.target.classList.remove('motion-safe:animate-fadeIn');
  //       }
  //     });
  //   };
  //   const observer = new IntersectionObserver(callback);
  //
  //   targets.forEach((target) => {
  //     target.classList.add('opacity-0');
  //     observer.observe(target);
  //   });
  // }, []);

  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      {/*<div className="max-w-screen-lg p-4 py-10 mx-auto flex flex-col justify-center w-full h-full js-show-on-scroll">*/}
      <div className="max-w-screen-lg p-4 py-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 px-12 sm:px-0">
          {ABOUT_LIST.map(({ id, title, content }) => {
            return (
              <div key={id}>
                <div>
                  <p className="text-2xl">{title}</p>
                </div>
                <p className="pt-6">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
