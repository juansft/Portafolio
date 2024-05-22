import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="p-36 bg-slate-300 sm:bg-slate-300 flex-1">
      <h2 className="text-3xl font-bold text-white text-center mb-8">{t('Projects')}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="relative bg-slate-800 text-white p-8 rounded-lg shadow-lg w-96">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
            <img src="logo1.png" alt="Proyecto 1" className="w-16 h-16 rounded-full" />
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">{t('project1Title')}</h3>
            <p>{t('project1Description')}</p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/juansft/dias" className="bg-gray-700 text-white px-4 py-2 rounded-lg">ir</a>
            </div>
          </div>
        </div>
        <div className="relative bg-slate-800 text-white p-8 rounded-lg shadow-lg w-96">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
            <img src="logo2.png" alt="Proyecto 2" className="w-16 h-16 rounded-full" />
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">{t('project2Title')}</h3>
            <p>{t('project2Description')}</p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/juansft/GranjaAppService" className="bg-gray-700 text-white px-4 py-2 rounded-lg">ir</a>
            </div>
          </div>
        </div>
        <div className="relative bg-slate-800 text-white p-8 rounded-lg shadow-lg w-96">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
            <img src="logo3.png" alt="Proyecto 3" className="w-16 h-16 rounded-full" />
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">{t('project3Title')}</h3>
            <p>{t('project3Description')}</p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/juansft/ejercicios-de-c" className="bg-gray-700 text-white px-4 py-2 rounded-lg">ir</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

