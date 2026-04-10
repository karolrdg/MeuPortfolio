import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CursorToggle() {
    const [cursorType, setCursorType] = useState(localStorage.getItem('user-cursor') || 'normal');

    useEffect(() => {
        const root = document.documentElement;
        if (cursorType === 'arma') {
            root.classList.add('cursor-arma');
        } else {
            root.classList.remove('cursor-arma');
        }
        localStorage.setItem('user-cursor', cursorType);
    }, [cursorType]);

    return (
        /* Container fixo - posicionado no topo, um pouco para a direita para não bater no logo */
        <div className="fixed top-24 right-8 md:right-12 z-[9999] flex flex-col items-center gap-2">

            {/* Label estilizada estilo "Subtítulo de Missão" */}
            <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-western text-[10px] text-rdr-red uppercase tracking-[0.4em] drop-shadow-sm bg-black/5 px-2 py-0.5 rounded-sm"
            >
                Estilo de Mira
            </motion.span>

            {/* O seletor em si */}
            <div className="relative flex items-center bg-black/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">

                {/* Botão Sistema */}
                <button
                    onClick={() => setCursorType('normal')}
                    className={`relative px-6 py-2 text-[11px] font-western uppercase tracking-wider transition-colors duration-500 z-10 ${cursorType === 'normal' ? 'text-black' : 'text-white/40 hover:text-white'
                        }`}
                >
                    {cursorType === 'normal' && (
                        <motion.div
                            layoutId="cursorTab"
                            className="absolute inset-0 bg-white"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-20">Padrão</span>
                </button>

                {/* Botão Outlaw */}
                <button
                    onClick={() => setCursorType('arma')}
                    className={`relative px-6 py-2 text-[11px] font-western uppercase tracking-wider transition-colors duration-500 z-10 ${cursorType === 'arma' ? 'text-white' : 'text-white/40 hover:text-white'
                        }`}
                >
                    {cursorType === 'arma' && (
                        <motion.div
                            layoutId="cursorTab"
                            className="absolute inset-0 bg-rdr-red"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-20">Outlaw</span>
                </button>

                {/* Detalhe de borda interna decorativa (estilo RDR) */}
                <div className="absolute inset-0 pointer-events-none border-[0.5px] border-white/5 m-0.5" />
            </div>
        </div>
    );
}