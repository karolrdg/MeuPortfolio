import React from 'react';

export default function Footer() {
    return (
        <footer className="relative w-full bg-transparent">
            <div className="absolute -top-10 left-0 z-20 h-10 w-full bg-[url('/img/dotted.png')] bg-repeat-x invert brightness-0" />

            <div className="relative z-10 pb-0 pt-16">
                <div className="text-center">
                    <div className="mb-12 w-full border-2 border-white/5 bg-black/40 p-1 shadow-2xl backdrop-blur-sm">
                        <img
                            src="/img/clothing.png"
                            className="h-auto w-full grayscale brightness-125 contrast-125"
                            alt="Banner decorativo do portfólio"
                        />
                    </div>

                    <div className="container mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 border-y-2 border-white/10 bg-black/20 py-12 md:grid-cols-3">
                        <div className="px-6 md:text-left">
                            <span className="font-western text-[11px] font-bold uppercase tracking-widest text-[#941313]">
                                Desenvolvedora Full Stack
                            </span>

                            <p className="mt-2 font-western text-4xl uppercase leading-none text-white drop-shadow-md">
                                K. Rodrigues
                            </p>

                            <p className="mt-3 font-body text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                                Esteio, Rio Grande do Sul
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <img
                                src="/img/wheeler_rawson_co_club.png"
                                className="w-20 opacity-90 brightness-200"
                                alt="Selo do portfólio"
                            />

                            <nav className="flex gap-8 font-western text-[11px] font-bold uppercase tracking-widest text-white">
                                <a href="#home" className="transition-all hover:scale-110 hover:text-[#941313]">
                                    Início
                                </a>

                                <a href="#about" className="transition-all hover:scale-110 hover:text-[#941313]">
                                    Sobre
                                </a>

                                <a href="#projects" className="transition-all hover:scale-110 hover:text-[#941313]">
                                    Projetos
                                </a>
                            </nav>
                        </div>

                        <div className="px-6 font-bold md:text-right">
                            <p className="font-western text-[11px] uppercase tracking-widest text-[#941313]">
                                Disponibilidade
                            </p>

                            <p className="mt-2 font-body text-xl italic uppercase tracking-tight text-white">
                                Aberta para oportunidades
                            </p>

                            <p className="mt-2 font-western text-[10px] font-bold uppercase tracking-widest text-white/30">
                                Portfólio atualizado em 2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 bg-black py-8">
                <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-8 sm:flex-row">
                    <img src="/img/gun1.png" className="hidden h-5 grayscale invert opacity-30 sm:block" alt="Decorativo" />

                    <div className="text-center">
                        <p className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
                            Karoline Rodrigues • Portfólio pessoal • 2026
                        </p>
                    </div>

                    <img
                        src="/img/gun1.png"
                        className="hidden h-5 scale-x-[-1] grayscale invert opacity-30 sm:block"
                        alt="Decorativo"
                    />
                </div>
            </div>
        </footer>
    );
}
