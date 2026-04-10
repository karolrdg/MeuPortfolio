import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavLink = ({ href, label, sub }) => (
        <a
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-8 px-10 border-b border-white/5 flex flex-col active:bg-white active:text-black transition-all group"
        >
            <div className="flex justify-between items-center">
                <span className="font-western text-3xl tracking-widest uppercase">{label}</span>
                <span className="font-western text-xl opacity-0 group-active:opacity-100 italic">Select</span>
            </div>
            <span className="font-western text-[11px] tracking-[0.3em] uppercase opacity-40 group-active:text-black/60">
                {sub}
            </span>
        </a>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-[1000]">
            <nav className="bg-[#941313] px-4 md:px-12 py-2 flex justify-between items-center border-b border-black/20 shadow-2xl relative z-[1001]">

                <a href="/" className="flex items-center shrink-0">
                    <img
                        src="/img/logo.png"
                        alt="Logo"
                        className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
                    />
                </a>

                <ul className="hidden lg:flex gap-8 lg:gap-14 font-western text-lg text-white uppercase tracking-[0.3em] font-bold">
                    <li><a href="#home" className="hover:text-black transition-colors text-shadow">Início</a></li>
                    <li><a href="#about" className="hover:text-black transition-colors text-shadow">Dossiê</a></li>
                    <li><a href="#projects" className="hover:text-black transition-colors text-shadow">Galeria</a></li>
                </ul>

                <div className="flex items-center gap-3 md:gap-5 px-3 md:px-4 py-1.5 rounded-sm border border-white/10 backdrop-blur-md scale-100 md:scale-100 origin-right">
                    <div className="flex items-center gap-1.5 font-western font-bold">
                        <img src="/img/token.png" alt="Tokens" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                        <span className="text-blue-400 text-sm md:text-lg">63</span>
                    </div>

                    <div className="w-[1px] h-4 bg-white/20"></div>

                    <div className="flex items-center gap-1.5 font-western font-bold">
                        <img src="/img/gold_2.png" alt="Gold" className="w-5 h-5 md:w-7 md:h-7 object-contain" />
                        <span className="text-amber-500 text-sm md:text-lg">
                            3<span className="text-[10px] md:text-xs underline">89</span>
                        </span>
                    </div>

                    <div className="w-[1px] h-4 bg-white/20"></div>

                    <div className="flex items-center font-western font-bold text-white">
                        <span className="text-sm md:text-lg">
                            $<span className="hidden sm:inline">14319</span>
                            <span className="sm:hidden">14k</span>
                            <span className="text-[10px] md:text-xs underline ml-0.5">65</span>
                        </span>
                    </div>

                    <div className="relative ml-1 md:ml-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 overflow-hidden shadow-inner">
                            <img
                                src="/img/pedshot_0.jpg"
                                alt="Portrait"
                                className="w-full h-full object-cover grayscale sepia-[0.3]"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden ml-2 px-4 py-2 bg-black/30 border border-white/10 rounded-sm active:bg-white active:text-black transition-all relative z-[1002]"
                >
                    <span className="font-western text-xs text-white uppercase tracking-[0.2em] active:text-black font-bold">
                        {isMenuOpen ? 'Fechar' : 'Menu'}
                    </span>
                </button>
            </nav>

            {/* UI DE MENU MOBILE OVERLAY */}
            <div className={`lg:hidden fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl z-[999] flex flex-col transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-[60px] bg-[#941313] w-full flex items-center px-6 border-b border-black/40 shadow-xl">
                    <span className="font-western text-white text-[10px] tracking-[0.5em] uppercase font-bold opacity-80">Seleção de Menu</span>
                </div>

                <div className="flex-1 overflow-y-auto pt-4 text-white">
                    <div className="px-10 py-4 opacity-30 italic font-western text-[10px] tracking-widest uppercase">Navegação Principal</div>
                    <NavLink href="#home" label="Início" sub="Acampamento Base" />
                    <NavLink href="#about" label="Dossiê" sub="Documentos de Procurado" />
                    <NavLink href="#projects" label="Galeria" sub="Serviços Realizados" />

                    <div className="p-12 mt-10 flex flex-col items-center opacity-10 select-none pointer-events-none">
                        <img src="/img/logo.png" className="w-24 brightness-0 invert mb-4" alt="" />
                        <div className="h-px w-32 bg-white/50"></div>
                        <span className="mt-2 text-[8px] tracking-[1em] uppercase font-western">Est. 1899</span>
                    </div>
                </div>
            </div>

            <div className="h-4 md:h-5 bg-[url('/img/bgRip.png')] bg-repeat-x w-full relative z-[1001] drop-shadow-xl brightness-75 contrast-125"></div>
        </header>
    );
}