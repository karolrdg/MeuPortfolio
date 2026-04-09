import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
        >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-screen">
                <img
                    src="/img/feature2.jpg"
                    className="w-full h-full object-cover grayscale"
                    alt=""
                />
            </div>

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-8"
                    >
                        <img
                            src="/img/Gemini_Generated_Image_wfg4xiwfg4xiwfg4.png"
                            className="w-48 h-48 md:w-64 md:h-64 border-2 border-[#941313] object-cover grayscale brightness-110 contrast-125 shadow-2xl"
                            alt="Karoline Rodrigues"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="font-western text-6xl md:text-8xl text-white mb-4 leading-none uppercase tracking-tighter"
                    >
                        Karoline <br />
                        <span className="text-[#941313] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Rodrigues</span>
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex items-center gap-4 mb-10 overflow-hidden whitespace-nowrap"
                    >
                        <div className="h-[1px] min-w-[48px] bg-[#941313]"></div>
                        <p className="font-western text-white text-sm tracking-[0.5em] uppercase font-bold">
                            Full Stack Outlaw
                        </p>
                        <div className="h-[1px] min-w-[48px] bg-[#941313]"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="flex gap-4"
                    >
                        <a href="https://github.com/karolrdg" target="_blank" rel="noreferrer"
                            className="group px-8 py-3 bg-[#941313] text-white transition-all hover:bg-white hover:text-black font-western text-xs uppercase tracking-widest font-bold shadow-lg">
                            <div className="flex items-center gap-3">
                                <FaGithub size={18} /> Github
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/karoline-rodrigues-dev/" target="_blank" rel="noreferrer"
                            className="group px-8 py-3 bg-transparent text-white border-2 border-white/20 transition-all hover:border-[#941313] hover:text-[#941313] font-western text-xs uppercase tracking-widest font-bold">
                            <div className="flex items-center gap-3">
                                <FaLinkedin size={18} /> LinkedIn
                            </div>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative flex-1 w-full max-w-2xl"
                >
                    <motion.img
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        src="/img/home.png"
                        className="w-full relative z-10 contrast-125 saturate-[0.8] drop-shadow-[0_0_80px_rgba(148,19,19,0.2)]"
                        alt="Visual"
                    />
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent z-30"></div>
        </section>
    );
}