import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavLink = ({ href, label, sub }) => (
        <a
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-6 px-10 border-b border-white/10 flex flex-col group active:bg-white active:text-black transition-all"
        >
            <div className="flex justify-between items-center">
                <span className="font-western text-3xl tracking-[0.1em] uppercase">{label}</span>
                <span className="font-western text-xl opacity-0 group-active:opacity-100 transition-opacity">→</span>
            </div>
            <span className="font-western text-[10px] tracking-[0.3em] uppercase opacity-40 group-active:text-black/60">
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
                        className="h-6 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
                    />
                </a>

                <ul className="hidden lg:flex gap-8 lg:gap-14 font-western text-lg text-white uppercase tracking-[0.3em] font-bold">
                    <li><a href="#home" className="hover:text-black transition-colors">Início</a></li>
                    <li><a href="#about" className="hover:text-black transition-colors">Dossiê</a></li>
                    <li><a href="#projects" className="hover:text-black transition-colors">Galeria</a></li>
                </ul>

                <div className="flex items-center gap-2 md:gap-5 bg-black/40 md:bg-black/20 px-2 md:px-4 py-1 rounded-sm border border-white/10 backdrop-blur-sm scale-[0.82] md:scale-100 origin-right">
                    <div className="flex items-center gap-1">
                        <img src="/img/token.png" alt="Tokens" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                        <span className="font-western text-blue-400 text-xs md:text-lg font-bold">63</span>
                    </div>
                    <div className="w-[1px] h-3 md:h-4 bg-white/20"></div>
                    <div className="flex items-center gap-1">
                        <img src="/img/gold_2.png" alt="Gold" className="w-4 h-4 md:w-7 md:h-7 object-contain" />
                        <span className="font-western text-amber-500 text-xs md:text-lg font-bold">
                            3<span className="text-[8px] md:text-xs underline">89</span>
                        </span>
                    </div>
                    <div className="w-[1px] h-3 md:h-4 bg-white/20"></div>
                    <div className="flex items-center">
                        <span className="font-western text-white text-xs md:text-lg font-bold">
                            $<span className="hidden sm:inline">14319</span>
                            <span className="sm:hidden">14k</span>
                            <span className="text-[8px] md:text-xs underline ml-0.5">65</span>
                        </span>
                    </div>
                    <div className="relative ml-1 md:ml-2">
                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full border border-white/30 overflow-hidden shadow-lg">
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
                    className="lg:hidden ml-2 px-3 py-2 bg-black/20 border border-white/10 rounded-sm active:bg-white active:text-black transition-colors relative z-[1002]"
                >
                    <span className="font-western text-sm text-white uppercase tracking-widest active:text-black">
                        {isMenuOpen ? 'Fechar' : 'Menu'}
                    </span>
                </button>
            </nav>

            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-[#0a0a0a] z-[999] flex flex-col text-white pt-[52px]">
                    <div className="bg-[#111] py-3 px-10 border-b border-white/5 flex justify-between items-center">
                        <span className="font-western text-[12px] tracking-[0.5em] uppercase text-[#941313] font-bold">Navegação</span>
                        <span className="font-western text-[10px] opacity-30 tracking-widest uppercase italic">Camp 1899</span>
                    </div>

                    <div className="flex flex-col relative z-[1000]">
                        <NavLink href="#home" label="Início" sub="Retornar ao acampamento" />
                        <NavLink href="#about" label="Dossiê" sub="Registros e perícias" />
                        <NavLink href="#projects" label="Galeria" sub="Contratos concluídos" />
                    </div>

                    <div className="mt-auto p-12 flex flex-col items-center opacity-20">
                        <img src="/img/logo.png" className="h-10 brightness-0 invert mb-4" alt="" />
                        <div className="h-px w-20 bg-white/50"></div>
                    </div>
                </div>
            )}

            <div className="h-4 md:h-5 bg-[url('/img/bgRip.png')] bg-repeat-x w-full relative z-[1001] drop-shadow-xl brightness-75 contrast-125"></div>
        </header>
    );
}