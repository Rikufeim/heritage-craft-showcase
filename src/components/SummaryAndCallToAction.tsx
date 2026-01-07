
import React from 'react';
import { ArrowRight } from 'lucide-react';
import GradientButton from './ui/GradientButton';

const SummaryAndCallToAction = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden text-center">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-heading leading-tight">
                    Kulttuuriperintöä vaalien,<br />
                    kestävää tulevaisuutta rakentaen.
                </h2>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Uskomme pitkäjänteiseen ajatteluun, jossa laatu korvaa määrän ja perinteet kohtaavat nykyajan vaatimukset. Olemme valmiina auttamaan teitä projektissanne asiantuntevasti ja luottamuksella.
                </p>

                <div className="pt-4">
                    <GradientButton onClick={scrollToContact} className="min-w-[200px] py-4 text-base">
                        Keskustele kohteestasi
                        <ArrowRight size={20} />
                    </GradientButton>
                </div>
            </div>
        </section>
    );
};

export default SummaryAndCallToAction;
