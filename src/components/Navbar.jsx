import React from 'react';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-[100]">
            <nav className="bg-[#941313] px-6 py-2 md:px-12 flex justify-between items-center border-b border-black/20 shadow-2xl">

                <a href="/" className="flex items-center shrink-0">
                    <img
                        src="/img/logo.png"
                        alt="WR&C Logo"
                        className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
                    />
                </a>

                {/* Centro: Links (Escondidos em telas muito pequenas se necessário) */}
                <ul className="hidden md:flex gap-8 md:gap-14 font-western text-sm md:text-lg text-white uppercase tracking-[0.3em] font-bold">
                    <li>
                        <a href="#home" className="hover:text-black transition-colors duration-300">Início</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-black transition-colors duration-300">Dossiê</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-black transition-colors duration-300">Galeria</a>
                    </li>
                </ul>

                {/* Lado Direito: Status HUD Estilo RDR2 */}
                <div className="flex items-center gap-4 md:gap-6 px-4 py-1 rounded-sm border border-white/10 backdrop-blur-sm">

                    {/* Blue Tokens */}
                    <div className="flex items-center gap-1.5">
                        <img src="/img/token.png" alt="Tokens" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                        <span className="font-western text-blue-400 text-sm md:text-lg font-bold">63</span>
                    </div>

                    <div className="w-[1px] h-4 bg-white/20"></div>

                    {/* Gold Bars */}
                    <div className="flex items-center gap-1.5">
                        <img src="/img/gold_2.png" alt="Gold" className="w-5 h-5 md:w-7 md:h-7 object-contain" />
                        <span className="font-western text-amber-500 text-sm md:text-lg font-bold">
                            3<span className="text-[10px] md:text-xs underline ml-0.5">89</span>
                        </span>
                    </div>

                    <div className="w-[1px] h-4 bg-white/20"></div>

                    {/* Cash */}
                    <div className="flex items-center gap-1">
                        <span className="font-western text-white text-sm md:text-lg font-bold">
                            $<span className="ml-0.5">14319</span><span className="text-[10px] md:text-xs underline ml-0.5">65</span>
                        </span>
                    </div>

                    {/* Avatar Retrato */}
                    <div className="relative ml-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 overflow-hidden shadow-lg">
                            <img
                                src="/img/pedshot_0.jpg"
                                alt="Outlaw Portrait"
                                className="w-full h-full object-cover grayscale sepia-[0.3]"
                            />
                        </div>
                        {/* Detalhe de brilho no retrato */}
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]"></div>
                    </div>
                </div>
            </nav>

            {/* Efeito de papel rasgado embaixo */}
            <div className="h-5 bg-[url('/img/bgRip.png')] bg-repeat-x w-full relative z-40 drop-shadow-xl brightness-75 contrast-125"></div>
        </header>
    );
}