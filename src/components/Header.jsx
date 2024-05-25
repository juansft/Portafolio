import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800 p-4 flex justify-between items-center relative z-10">
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <ul className={`lg:flex items-center justify-center ${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-slate-800 lg:bg-transparent transition-all duration-300 ease-in-out z-20`}>
        <li className="mr-6">
          <a href="#about" className="block px-4 py-2 text-white hover:text-gray-400 lg:inline" onClick={toggleMenu}>{t('moreAboutMe')}</a>
        </li>
        <li className="mr-6">
          <a href="#projects" className="block px-4 py-2 text-white hover:text-gray-400 lg:inline" onClick={toggleMenu}>{t('Projects')}</a>
        </li>
        <li className="mr-6">
          <a href="#skills" className="block px-4 py-2 text-white hover:text-gray-400 lg:inline" onClick={toggleMenu}>{t('Skills')}</a>
        </li>
        <li>
          <a href="#contact" className="block px-4 py-2 text-white hover:text-gray-400 lg:inline" onClick={toggleMenu}>{t('contact')}</a>
        </li>
      </ul>
      <div className="flex">
        <button onClick={() => changeLanguage('en')} className="text-white mr-2">EN</button>
        <button onClick={() => changeLanguage('es')} className="text-white">ES</button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}

export default Header;



