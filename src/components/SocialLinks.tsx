import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SOCIAL_LIST = [
  // {
  //   id: 1,
  //   child: (
  //     <>
  //       LinkedIn <FaLinkedin size={30} />
  //     </>
  //   ),
  //   href: undefined,
  //   style: 'rounded-tr-md',
  // },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/San-Goon',
    style: 'rounded-tr-md',
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:joganghun06@gmail.com',
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: 'https://drive.google.com/file/d/1xCJ7zIbwNA5xGRoZ5m176jsuLlRGMnyx/view?usp=sharing',
  },
];

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {SOCIAL_LIST.map(({ id, child, href, style }) => {
          return (
            <li
              key={id}
              className={
                'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
                ' ' +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer noopenner"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SocialLinks;
