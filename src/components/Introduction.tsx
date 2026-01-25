
import React from 'react';

const Introduction = () => {
    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden rounded-t-[2.5rem] border-t border-neutral-800/50 mt-[-1px]">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-900/50 to-black pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-heading leading-tight">
                    Perinteitä kunnioittaen,<br />
                    tulevaisuutta rakentaen
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    <p>
                        <span className="font-semibold text-white">Restaurointi Södergård Oy</span> on erikoistunut vanhojen perinteisten rakennusten restaurointiin ja säilyttävään korjausrakentamiseen.
                    </p>
                    <p>
                        Vaalimme rakennusperintöä kunnioittamalla kunkin kohteen historiallista luonnetta. Oikeat materiaalit ja perinteiset käsityömenetelmät yhdistettynä moderniin toteutukseen takaa, että kulttuuriperintömme säilyy myös tuleville sukupolville.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
