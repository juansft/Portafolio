import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="flex justify-center items-center w-full h-auto bg-slate-200 p-36">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-16">
          <h2 className="text-2xl font-bold text-black">{t('welcomeMessage')}</h2>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <img src="https://cdn.motor1.com/images/mgl/krl7R/s1/audi-rs6-avant-performance-in-the-alps.jpg" alt="yo" className="w-148 h-148 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
