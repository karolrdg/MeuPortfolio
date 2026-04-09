import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full relative bg-transparent">
            {/* Divisória superior estilo papel rasgado */}
            <div className="h-10 bg-[url('/img/bgRip.png')] bg-repeat-x w-full absolute -top-10 left-0 z-20 invert brightness-0"></div>

            <div className="relative z-10 pt-16 pb-0">
                <div className="container mx-auto px-4 text-center">

                    {/* Banner do Catálogo Wheeler, Rawson and Co. */}
                    <div className="w-full max-w-5xl mx-auto mb-12 border-2 border-white/5 bg-black/40 backdrop-blur-sm p-1 shadow-2xl">
                        <img
                            src="/img/footer.jpg"
                            className="w-full h-auto grayscale brightness-125 contrast-125"
                            alt="Wheeler, Rawson and Co. Catalogue"
                        />
                    </div>

                    {/* Grid de Informações estilo anúncios de jornal antigo */}
                    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-y-2 border-white/10 py-12 mb-10 bg-black/20">
                        <div className="md:text-left px-6">
                            <span className="font-western text-[11px] text-[#941313] uppercase tracking-widest font-bold">Prestadora de Serviços</span>
                            <p className="font-western text-white text-4xl uppercase leading-none mt-2 drop-shadow-md">K. Rodrigues</p>
                            <p className="font-body text-[10px] text-white/40 font-bold uppercase tracking-[0.3em] mt-3">
                                Esteio, Rio Grande do Sul
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <img src="/img/wheeler_rawson_co_club.png" className="w-20 opacity-90 brightness-200" alt="Club Logo" />
                            <nav className="flex gap-8 font-western text-[11px] text-white uppercase tracking-widest font-bold">
                                <a href="#home" className="hover:text-[#941313] hover:scale-110 transition-all">Início</a>
                                <a href="#about" className="hover:text-[#941313] hover:scale-110 transition-all">Dossiê</a>
                                <a href="#projects" className="hover:text-[#941313] hover:scale-110 transition-all">Galeria</a>
                            </nav>
                        </div>

                        <div className="md:text-right px-6 font-bold">
                            <p className="font-western text-[11px] text-[#941313] uppercase tracking-widest">Disponibilidade</p>
                            <p className="font-body text-white text-xl italic mt-2 uppercase tracking-tight">Pronta para o Trabalho</p>
                            <p className="font-western text-[10px] text-white/30 mt-2 uppercase font-bold tracking-widest">Established 1899</p>
                        </div>
                    </div>

                    {/* Selo de Garantia Final */}
                    <div className="w-full max-w-[180px] mx-auto opacity-20 mb-16">
                        <img src="/img/feature.png" className="w-full grayscale invert brightness-200" alt="Selo de Qualidade" />
                    </div>
                </div>
            </div>

            {/* Barra Inferior com fundo preto sólido para fechar o site */}
            <div className="bg-black border-t border-white/5 py-8">
                <div className="container mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <img src="/img/gun1.png" className="h-5 invert opacity-30 grayscale hidden sm:block" alt="Revolver Decor" />

                    <div className="text-center">
                        <p className="font-body text-[10px] text-white/40 uppercase tracking-[0.6em] font-bold">
                            Karoline Rodrigues • No Bounty Hunters Allowed • 2026
                        </p>
                    </div>

                    <img src="/img/gun1.png" className="h-5 invert opacity-30 grayscale scale-x-[-1] hidden sm:block" alt="Revolver Decor" />
                </div>
            </div>
        </footer>
    );
}