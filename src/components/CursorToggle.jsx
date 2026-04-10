import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorToggle() {
    const [cursorType, setCursorType] = useState(localStorage.getItem('user-cursor') || 'normal');

    const playSound = () => {
        const audio = new Audio('/sounds/pistol-shot.mp3');
        audio.volume = 0.3;
        audio.play().catch(err => console.log("Som não carregado:", err));
    };

    useEffect(() => {
        const root = document.documentElement;
        if (cursorType === 'arma') {
            root.classList.add('cursor-arma');
        } else {
            root.classList.remove('cursor-arma');
        }
        localStorage.setItem('user-cursor', cursorType);
    }, [cursorType]);

    const handleOutlawClick = () => {
        setCursorType('arma');
        playSound();
    };

    return (
        /* Aumentei o espaçamento e o tamanho geral */
        <div className="absolute top-24 right-8 md:right-16 z-[9999] flex flex-col items-end gap-2">

            <span className="font-western text-[12px] md:text-[14px] text-[#941313] uppercase tracking-[0.4em] font-bold drop-shadow-sm pr-1">
                Interface de Mira
            </span>

            <div className="flex bg-black/80 backdrop-blur-md border border-white/20 p-1.5 rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <button
                    onClick={() => setCursorType('normal')}
                    className={`px-6 py-2.5 text-[12px] md:text-[14px] font-western uppercase tracking-widest transition-all duration-300 ${cursorType === 'normal'
                            ? 'bg-white text-black'
                            : 'text-white/40 hover:text-white'
                        }`}
                >
                    Sistema
                </button>

                <button
                    onClick={handleOutlawClick}
                    className={`px-6 py-2.5 text-[12px] md:text-[14px] font-western uppercase tracking-widest transition-all duration-300 ${cursorType === 'arma'
                            ? 'bg-[#941313] text-white'
                            : 'text-white/40 hover:text-white'
                        }`}
                >
                    Outlaw
                </button>
            </div>
        </div>
    );
}