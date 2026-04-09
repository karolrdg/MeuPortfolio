import React from 'react';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-[100]">
            <nav className="bg-[#941313] px-6 py-3 md:px-12 flex justify-between items-center border-b border-black/20 shadow-2xl">
                <a href="/" className="flex items-center shrink-0">
                    <img
                        src="/img/logo.png"
                        alt="WR&C Logo"
                        className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
                    />
                </a>

                <ul className="flex gap-6 md:gap-14 font-western text-sm md:text-xl text-white uppercase tracking-[0.3em] font-bold">
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

                <div className="hidden lg:block border border-white/20 px-4 py-1">
                    <p className="font-western text-[10px] text-white/80 uppercase tracking-widest font-bold">
                        Official Contractor
                    </p>
                </div>
            </nav>
            <div className="h-5 bg-[url('/img/bgRip.png')] bg-repeat-x w-full relative z-40 drop-shadow-xl brightness-75 contrast-125"></div>
        </header>
    );
}