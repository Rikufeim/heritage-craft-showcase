import React from 'react';

const Introduction = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-site-bg relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-playfair font-bold text-heading leading-tight">
          Perinteitä kunnioittaen,<br />
          tulevaisuutta rakentaen
        </h2>

        <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed font-light">
          <p>
            <span className="font-semibold text-white">Restaurointi Södergård Oy</span> on erikoistunut rakennusten restaurointiin ja säilyttävään korjausrakentamiseen.
          </p>
          <p className="hidden md:block">
            Vaalimme rakennusperintöä kunnioittamalla kohteiden historiallista luonnetta. Oikeat materiaalit ja perinteiset käsityömenetelmät yhdistettynä nykyaikaisiin työkaluihin takaavat, että kulttuuriperintömme säilyy tuleville sukupolville.
          </p>
          <p className="md:hidden">
            Vaalimme rakennusperintöä oikeilla materiaaleilla ja perinteisillä menetelmillä, nykyaikaisin työkaluin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
