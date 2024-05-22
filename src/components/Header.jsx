import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <nav className="bg-slate-800 p-4 flex justify-between items-center">
      <ul className="flex items-center justify-center">
        <li className="mr-6">
          <a href="#about" className="text-white hover:text-gray-400">{t('About me')}</a>
        </li>
        <li className="mr-6">
          <a href="#projects" className="text-white hover:text-gray-400">{t('Projects')}</a>
        </li>
        <li className="mr-6">
          <a href="#skills" className="text-white hover:text-gray-400">{t('Skills')}</a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-400">{t('Contact')}</a>
        </li>
      </ul>
      <div>
        <button onClick={() => changeLanguage('en')} className="text-white mr-2">EN</button>
        <button onClick={() => changeLanguage('es')} className="text-white">ES</button>
      </div>
    </nav>
  );
}

export default Header;

