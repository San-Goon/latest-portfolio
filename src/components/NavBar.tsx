import React, { useCallback, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const LINKS = [
  { id: 1, link: 'home' },
  { id: 2, link: 'about' },
  { id: 3, link: 'experience' },
  { id: 4, link: 'portfolio' },
  { id: 5, link: 'skill' },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const onClickFabars = useCallback(() => {
    setNav((prev) => !prev);
  }, []);
  return (
    <div className="flex flex-row-reverse justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <ul className="hidden md:flex">
        {LINKS.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={onClickFabars}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {LINKS.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link to={link} smooth duration={500}>
                  <button onClick={onClickFabars}>{link}</button>
                </Link>
              </li>
            );
          })}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <button onClick={onClickFabars}>
              <a
                href="https://github.com/San-Goon"
                target="_blank"
                rel="noreferrer noopenner"
              >
                Github
              </a>
            </button>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <button onClick={onClickFabars}>
              <a
                href="https://drive.google.com/file/d/1xCJ7zIbwNA5xGRoZ5m176jsuLlRGMnyx/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopenner"
              >
                Resume
              </a>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
