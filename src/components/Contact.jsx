import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center items-center p-8 md:p-16 bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col items-center">
          <img src="/iconos/discord-icon.png" alt="Discord" className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-bold">DISCORD</h3>
          <p className="text-sm text-gray-600">Discord user</p>
          <p className="font-bold">hidan_05</p>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col items-center">
          <img src="/iconos/email-icon.png" alt="Correo" className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-bold">CORREO</h3>
          <p className="text-sm text-gray-600">Correo Gmail</p>
          <p className="font-bold">juan.enriquezob@campusucc.edu.co</p>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col items-center">
          <img src="/iconos/whatsapp-icon.png" alt="WhatsApp" className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-bold">WHATSAPP</h3>
          <p className="text-sm text-gray-600">Número</p>
          <p className="font-bold">3172645942</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

