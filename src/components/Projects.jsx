import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="p-8 md:p-36 bg-slate-300 flex-1">
      <h2 className="text-3xl font-bold text-black text-center mb-16">{t('Projects')}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="relative bg-slate-800 text-white p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md lg:max-w-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
            <img src="/iconos/logoC.png" alt="Proyecto 1" className="w-16 h-16 rounded-full" />
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">{t('project1Title')}</h3>
            <p>{t('project1Description')}</p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/juansft/dias" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500">ir</a>
            </div>
          </div>
        </div>
        <div className="relative bg-slate-800 text-white p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md lg:max-w-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
            <img src="/iconos/logo2.png" alt="Proyecto 2" className="w-16 h-16 rounded-full" />
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">{t('project2Title')}</h3>
            <p>{t('project2Description')}</p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/juansft/GranjaAppService" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500">ir</a>
            </div>
          </div>
        </div>
        <div className="relative bg-slate-800 text-white p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md lg:max-w-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
            <img src="/iconos/logoC.png" alt="Proyecto 3" className="w-16 h-16 rounded-full" />
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">{t('project3Title')}</h3>
            <p>{t('project3Description')}</p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/juansft/ejercicios-de-c" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500">ir</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;


