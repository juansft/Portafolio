import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="flex justify-center items-center w-full h-auto bg-slate-200 p-8 md:p-36">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 md:pr-16 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-black">{t('welcomeMessage')}</h2>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 flex justify-center md:justify-start">
          <img src="https://cdn.motor1.com/images/mgl/krl7R/s1/audi-rs6-avant-performance-in-the-alps.jpg" alt="yo" className="w-full max-w-xs md:max-w-none h-auto rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
