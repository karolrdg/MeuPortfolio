import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    const NavLink = ({ href, label, sub, customDelay }) => (
        <motion.a
            href={href}
            onClick={() => setIsMenuOpen(false)}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: customDelay, duration: 0.3 }}
            className="w-full py-8 px-10 border-b border-black/10 flex flex-col active:bg-white active:text-[#941313] transition-all group"
        >
            <div className="flex justify-between items-center">
                <span className="font-western text-3xl tracking-widest uppercase">{label}</span>
                <span className="font-western text-xl opacity-0 group-active:opacity-100 italic">{'>'}{'>'}</span>
            </div>
            <span className="font-western text-[11px] tracking-[0.3em] uppercase opacity-60 group-active:text-[#941313]/80">
                {sub}
            </span>
        </motion.a>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-[1000]">
            <nav className="bg-[#941313] px-4 md:px-12 py-2 flex justify-between items-center border-b border-black/20 shadow-2xl relative z-[1001]">

                <a href="/" className="flex items-center shrink-0">
                    <img src="/img/logo.png" alt="Logo" className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-90" />
                </a>

                <ul className="hidden lg:flex gap-8 lg:gap-14 font-western text-lg text-white uppercase tracking-[0.3em] font-bold">
                    <li><a href="#home" className="hover:text-black transition-colors">Início</a></li>
                    <li><a href="#about" className="hover:text-black transition-colors">Dossiê</a></li>
                    <li><a href="#projects" className="hover:text-black transition-colors">Galeria</a></li>
                </ul>

                <div className="flex items-center gap-3 md:gap-5 px-3 md:px-4 py-1.5 rounded-sm border border-white/10 backdrop-blur-sm scale-100 md:scale-100 origin-right">
                    <div className="flex items-center gap-1.5 font-western font-bold">
                        <img src="/img/token.png" alt="Tokens" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                        <span className="text-blue-400 text-sm md:text-lg">63</span>
                    </div>
                    <div className="w-[1px] h-4 bg-white/20"></div>
                    <div className="flex items-center gap-1.5 font-western font-bold">
                        <img src="/img/gold_2.png" alt="Gold" className="w-5 h-5 md:w-7 md:h-7 object-contain" />
                        <span className="text-amber-500 text-sm md:text-lg">3<span className="text-[10px] md:text-xs underline">89</span></span>
                    </div>
                    <div className="w-[1px] h-4 bg-white/20"></div>
                    <div className="flex items-center font-western font-bold text-white">
                        <span className="text-sm md:text-lg">$14k<span className="text-[10px] md:text-xs underline ml-0.5">65</span></span>
                    </div>
                    <div className="relative ml-1 md:ml-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 overflow-hidden shadow-inner">
                            <img src="/img/pedshot_0.jpg" alt="Portrait" className="w-full h-full object-cover grayscale sepia-[0.3]" />
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden ml-2 w-10 h-10 flex items-center justify-center rounded-sm text-white z-[1002]"
                >
                    <motion.div animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }} transition={{ duration: 0.2 }}>
                        {isMenuOpen ? (
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                            </svg>
                        )}
                    </motion.div>
                </button>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="lg:hidden fixed inset-0 bg-[#941313] z-[999] flex flex-col text-white pt-[60px]"
                    >
                        <div className="flex-1 overflow-y-auto pb-32">
                            <div className="px-10 py-6 border-b border-black/10 opacity-40 italic font-western text-xs tracking-widest uppercase">
                                Navegação
                            </div>
                            <NavLink href="#home" label="Início" sub="Acampamento" customDelay={0.1} />
                            <NavLink href="#about" label="Dossiê" sub="Registros" customDelay={0.2} />
                            <NavLink href="#projects" label="Galeria" sub="Contratos" customDelay={0.3} />

                            <div className="p-12 mt-10 flex flex-col items-center opacity-20">
                                <img src="/img/logo.png" className="w-24 brightness-0 invert mb-4" alt="" />
                                <div className="h-px w-32 bg-white/50"></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="h-4 md:h-5 bg-[url('/img/bgRip.png')] bg-repeat-x w-full relative z-[1001] drop-shadow-xl brightness-75 contrast-125"></div>
        </header>
    );
}