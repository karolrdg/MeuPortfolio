import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent"
        >
            <div className="absolute inset-0 z-0 bg-black/60" />

            <div className="pointer-events-none absolute inset-0 z-10 opacity-30 mix-blend-screen">
                <img
                    src="/img/feature2.png"
                    className="h-full w-full object-cover grayscale contrast-125"
                    alt=""
                />
            </div>

            <div className="container relative z-20 mx-auto flex flex-col items-center justify-between gap-12 px-4 pb-20 pt-32 lg:flex-row">
                <Motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
                >
                    <Motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-8"
                    >
                        <img
                            src="/img/20200525_220805_764_mr1591237115720.jpg"
                            className="aspect-square h-48 w-48 border-4 border-white object-cover brightness-110 contrast-125 shadow-[12px_12px_0px_0px_#941313] transition-all duration-500 hover:-translate-y-1 hover:shadow-[16px_16px_0px_0px_#941313] md:h-64 md:w-64"
                            alt="Karoline Rodrigues"
                        />
                    </Motion.div>

                    <Motion.h1
                        initial={{ opacity: 0, scale: 3, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 10,
                            delay: 0.5,
                        }}
                        className="mb-4 font-western text-6xl uppercase leading-none tracking-tighter text-white md:text-8xl"
                    >
                        Karoline <br />
                        <span className="text-[#941313] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Rodrigues</span>
                    </Motion.h1>

                    <Motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: '100%', opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mb-10 flex items-center gap-4 overflow-hidden whitespace-nowrap"
                    >
                        <div className="h-[2px] min-w-[48px] bg-[#941313]" />
                        <p className="font-western text-sm font-bold uppercase tracking-[0.5em] text-white">
                            Desenvolvedora Full Stack
                        </p>
                        <div className="h-[2px] min-w-[48px] bg-[#941313]" />
                    </Motion.div>

                    <Motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mb-10 max-w-xl border-l-4 border-[#941313] bg-black/35 py-2 pl-5 font-body text-lg leading-relaxed text-white/85"
                    >
                        Crio sistemas com personalidade, foco em experiência e código limpo.
                        Este portfólio reúne projetos, estudos e a forma como transformo ideia em produto.
                    </Motion.p>

                    {/* Card de Contato - Z-Index Isolado */}
                    <Motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="relative z-30 w-full max-w-xl border-4 border-white bg-black shadow-[14px_14px_0px_0px_#941313]"
                    >
                        <div className="flex items-center justify-between gap-3 border-b-4 border-white bg-[#941313] px-5 py-3">
                            <span className="font-western text-[11px] uppercase tracking-[0.35em] text-white">
                                Contato rápido
                            </span>
                            <span className="font-western text-[10px] uppercase tracking-[0.25em] text-black/60">
                                Online
                            </span>
                        </div>

                        <div className="grid gap-3 p-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {/* GitHub */}
                                <Motion.a
                                    href="https://github.com/karolrdg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Abrir GitHub de Karoline Rodrigues"
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                                    className="group relative block cursor-pointer select-none overflow-hidden border-2 border-white bg-[#941313] px-5 py-5 text-white shadow-[6px_6px_0px_0px_#ffffff] transition-colors duration-300 hover:bg-black"
                                >
                                    {/* pointer-events-none adicionado aqui para não barrar o clique */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-black/15 transition-all group-hover:w-28 group-hover:bg-white/10" />

                                    <div className="relative flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <span className="flex h-12 w-12 items-center justify-center border-2 border-white bg-black/25 transition-all group-hover:bg-white group-hover:text-black">
                                                <FaGithub size={24} />
                                            </span>
                                            <div className="text-left">
                                                <p className="font-western text-xl uppercase leading-none tracking-[0.14em]">GitHub</p>
                                                <p className="mt-1 font-body text-sm italic text-white/75">Projetos e código</p>
                                            </div>
                                        </div>
                                        <span className="font-western text-xl text-white/70 transition-transform group-hover:translate-x-1">{'>>'}</span>
                                    </div>
                                </Motion.a>

                                {/* LinkedIn */}
                                <Motion.a
                                    href="https://www.linkedin.com/in/karoline-rodrigues-dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Abrir LinkedIn de Karoline Rodrigues"
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                                    className="group relative block cursor-pointer select-none overflow-hidden border-2 border-white bg-black px-5 py-5 text-white shadow-[6px_6px_0px_0px_#941313] transition-colors duration-300 hover:bg-white hover:text-black"
                                >
                                    {/* pointer-events-none adicionado aqui para não barrar o clique */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[#941313]/20 transition-all group-hover:w-28 group-hover:bg-[#941313]/10" />

                                    <div className="relative flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <span className="flex h-12 w-12 items-center justify-center border-2 border-white bg-[#941313] text-white transition-all group-hover:border-black">
                                                <FaLinkedin size={24} />
                                            </span>
                                            <div className="text-left">
                                                <p className="font-western text-xl uppercase leading-none tracking-[0.14em]">LinkedIn</p>
                                                <p className="mt-1 font-body text-sm italic text-current/75">Perfil profissional</p>
                                            </div>
                                        </div>
                                        <span className="font-western text-xl text-current/70 transition-transform group-hover:translate-x-1">{'>>'}</span>
                                    </div>
                                </Motion.a>
                            </div>
                        </div>
                    </Motion.div>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    className="relative w-full max-w-2xl flex-1"
                >
                    <div className="absolute -left-4 top-8 h-28 w-28 border-4 border-[#941313] bg-black/60" />
                    <Motion.img
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        src="/img/home.png"
                        className="relative z-10 w-full contrast-125 saturate-100 drop-shadow-[0_0_80px_rgba(148,19,19,0.28)]"
                        alt="Composição visual do portfólio"
                    />
                </Motion.div>
            </div>

            <div className="absolute bottom-0 left-0 z-30 h-40 w-full bg-gradient-to-t from-black via-transparent to-transparent" />
        </section>
    );
}