import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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

      <div>
      {/* Sección "Sobre mí" */}
      <div className="flex justify-center items-center flex-col w-full h-auto bg-slate-200 p-36">
        <h2 className="text-4xl font-bold mb-4">{t('moreAboutMe')}</h2> 
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-16">
            <h1 className="text-3xl text-black">{t('welcomeMessage')}</h1>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img src="https://cdn.motor1.com/images/mgl/krl7R/s1/audi-rs6-avant-performance-in-the-alps.jpg" alt="yo" className="w-148 h-148 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>


      {/* Sección "Portafolio/Proyectos" */}
      <div className="p-36 bg-slate-50 sm:bg-slate-300 flex-1">
        <h2 className="text-3xl font-bold text-black text-center mb-8">{t('Projects')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="relative bg-slate-800 text-white p-6 rounded-lg shadow-lg w-80">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
              {/* Logo del proyecto */}
              <img src="logo1.png" alt="Proyecto 1" className="w-16 h-16 rounded-full" />
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-2">{t('project1Title')}</h3>
              <p>{t('project1Description')}</p>
              <div className="flex justify-center mt-4">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">ir</button>
              </div>
            </div>
          </div>
          <div className="relative bg-slate-800 text-white p-6 rounded-lg shadow-lg w-80">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
              {/* Logo del proyecto */}
              <img src="logo2.png" alt="Proyecto 2" className="w-16 h-16 rounded-full" />
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-2">{t('project2Title')}</h3>
              <p>{t('project2Description')}</p>
              <div className="flex justify-center mt-4">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">ir</button>
              </div>
            </div>
          </div>
          <div className="relative bg-slate-800 text-white p-6 rounded-lg shadow-lg w-80">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
              {/* Logo del proyecto */}
              <img src="logo3.png" alt="Proyecto 3" className="w-16 h-16 rounded-full" />
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-2">{t('project3Title')}</h3>
              <p>{t('project3Description')}</p>
              <div className="flex justify-center mt-4">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">ir</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección "Habilidades" */}
      <div className="p-36 bg-slate-200 flex-1">
        <h2 className="text-3xl text-black font-bold text-center mb-8">{t('Skills')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-black mb-4">{t('skill1Description')}</p>
            <div className="flex justify-center items-center mt-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full"></div> {/* Espacio para el ícono */}
              <h3 className="text-xl font-bold ml-4">{t('skill1Title')}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-black mb-4">{t('skill2Description')}</p>
            <div className="flex justify-center items-center mt-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full"></div> {/* Espacio para el ícono */}
              <h3 className="text-xl font-bold ml-4">{t('skill2Title')}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-black mb-4">{t('skill3Description')}</p>
            <div className="flex justify-center items-center mt-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full"></div> {/* Espacio para el ícono */}
              <h3 className="text-xl font-bold ml-4">{t('skill3Title')}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-200 p-16 text-center text-white">
        {/* Contenido del footer aquí */}
      </footer>
    </div>
  );
}

export default App;
