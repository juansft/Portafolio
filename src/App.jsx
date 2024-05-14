import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-slate-800 p-4 flex justify-between items-center">
        <ul className="flex items-center justify-center">
          <li className="mr-6">
            <a href="#" className="text-white">{t('moreAboutme')}</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-white">{t('Projects')}</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-white">{t('Skills')}</a>
          </li>
          <li>
            <a href="#" className="text-white">{t('contact')}</a>
          </li>
        </ul>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="p-2 rounded-lg border-none bg-gray-100"
          />
          <div className="ml-4 flex">
            <button onClick={() => changeLanguage('en')} className="m-2 p-2 bg-blue-500 text-white">English</button>
            <button onClick={() => changeLanguage('es')} className="m-2 p-2 bg-green-500 text-white">Español</button>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center w-full h-auto bg-slate-200 p-36">
        <div className="flex flex-col md:flex-row"> 
          <div className="md:w-1/2 md:pr-16">
            <h1 className="text-2xl font-bold text-black">{t('welcomeMessage')}</h1>
          </div>  
          <div className="md:w-1/2 md:pl-8"> 
            <img src="https://cdn.motor1.com/images/mgl/krl7R/s1/audi-rs6-avant-performance-in-the-alps.jpg" alt="yo" className="w-148 h-148 rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="p-96 bg-gray-900 sm:bg-slate-300 flex-1"> 
      </div>
      <footer className="bg-slate-200 p-16 text-center text-white">
      </footer>
    </div>
  );
}

export default App;
