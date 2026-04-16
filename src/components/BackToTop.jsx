import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                        {/* Efeito de brilho suave ao fundo */}
                        <div className="absolute inset-0 bg-[#941313]/0 group-hover:bg-[#941313]/20 blur-xl transition-all duration-500 rounded-full"></div>

                        <motion.img
                            src="/img/PonyUp.webp"
                            alt="Voltar ao topo"
                            className="w-full h-full cursor-pointer object-contain brightness-90 contrast-125 group-hover:brightness-110 group-hover:drop-shadow-[0_0_10px_#941313] transition-all duration-300"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}