import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div id="skills" className="p-36 bg-slate-200 flex-1">
      <h2 className="text-3xl font-bold text-center mb-8">{t('Skills')}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <p className="text-black mb-4">{t('skill1Description')}</p>
          <div className="flex justify-center items-center mt-4">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <h3 className="text-xl font-bold ml-4">{t('skill1Title')}</h3>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <p className="text-black mb-4">{t('skill2Description')}</p>
          <div className="flex justify-center items-center mt-4">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <h3 className="text-xl font-bold ml-4">{t('skill2Title')}</h3>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <p className="text-black mb-4">{t('skill3Description')}</p>
          <div className="flex justify-center items-center mt-4">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <h3 className="text-xl font-bold ml-4">{t('skill3Title')}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
