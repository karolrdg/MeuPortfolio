import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

export default function About() {
    const [copied, setCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const email = 'karolinerodrigues12@outlook.com';
    const skills = ['React', 'UI/UX Design', 'Tailwind CSS', 'SQL', 'C#', 'Metodologias Ágeis'];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="about"
            className="relative w-full overflow-hidden bg-transparent py-24 selection:bg-white selection:text-black"
        >
            <div className="container relative z-10 mx-auto flex flex-col items-center px-4">
                <Motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-6xl border-[6px] border-white bg-black shadow-[28px_28px_0px_0px_#941313]"
                >
                    <div className="grid grid-cols-1 border-b-[6px] border-white bg-black lg:grid-cols-[1fr_320px]">
                        <div className="p-8 text-center text-white md:p-12 lg:text-left">
                            <p className="mb-4 font-western text-[11px] font-bold uppercase tracking-[0.45em] text-[#941313]">
                                Arquivo pessoal
                            </p>
                            <h2 className="font-western text-5xl font-bold uppercase leading-none tracking-tighter drop-shadow-[4px_4px_0px_rgba(148,19,19,1)] md:text-8xl">
                                Dossiê de Campo
                            </h2>
                            <p className="mt-5 max-w-3xl font-body text-lg font-bold italic leading-relaxed text-white/75">
                                Desenvolvedora em formação, experiência digital e interfaces
                                com identidade visual forte.
                            </p>
                        </div>

                        <div className="relative min-h-64 overflow-hidden border-t-[6px] border-white bg-[#941313] lg:border-l-[6px] lg:border-t-0">
                            <img
                                src="/img/feature.png"
                                className="absolute inset-0 h-full w-full object-contain p-8 opacity-95 brightness-125"
                                alt="Selo decorativo"
                            />
                            <div className="absolute bottom-0 left-0 right-0 border-t-4 border-white bg-black px-5 py-3 text-center">
                                <span className="font-western text-[10px] uppercase tracking-[0.35em] text-white">
                                    Portifolio file
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 bg-black lg:grid-cols-12">
                        <div className="space-y-8 border-b-[6px] border-white p-8 md:p-12 lg:col-span-7 lg:border-b-0 lg:border-r-[6px]">
                            <Motion.div
                                whileHover={!isMobile ? { x: 8 } : {}}
                                className="group grid grid-cols-[72px_1fr] items-center gap-6"
                            >
                                <div className="flex h-[72px] w-[72px] items-center justify-center border-4 border-white bg-[#941313] shadow-[5px_5px_0px_0px_#ffffff] transition-all duration-300 md:group-hover:bg-white">
                                    <img
                                        src="/img/female_clothing.png"
                                        className="h-11 w-11 object-contain brightness-0 invert transition-all md:group-hover:invert-0"
                                        alt="Ícone de perfil"
                                    />
                                </div>
                                <div>
                                    <span className="mb-1 block font-western text-[12px] font-bold uppercase tracking-[0.3em] text-[#941313]">
                                        Identificação
                                    </span>
                                    <p className="font-body text-3xl font-bold italic uppercase leading-tight text-white md:text-5xl">
                                        Karoline Rodrigues
                                    </p>
                                </div>
                            </Motion.div>

                            <Motion.div
                                whileHover={!isMobile ? { x: 8 } : {}}
                                className="group grid grid-cols-[72px_1fr] items-center gap-6"
                            >
                                <div className="flex h-[72px] w-[72px] items-center justify-center border-4 border-white bg-[#941313] shadow-[5px_5px_0px_0px_#ffffff] transition-all duration-300 md:group-hover:bg-white">
                                    <img
                                        src="/img/camps.png"
                                        className="h-11 w-11 object-contain brightness-0 invert transition-all md:group-hover:invert-0"
                                        alt="Ícone de localização"
                                    />
                                </div>
                                <div>
                                    <span className="mb-1 block font-western text-[12px] font-bold uppercase tracking-[0.3em] text-[#941313]">
                                        Base atual
                                    </span>
                                    <p className="font-body text-3xl font-bold italic uppercase leading-none text-white md:text-4xl">
                                        Esteio / RS
                                    </p>
                                    <span className="mt-3 block font-western text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                        Atendimento remoto e presencial
                                    </span>
                                </div>
                            </Motion.div>

                            <Motion.div
                                whileHover={!isMobile ? { x: 8 } : {}}
                                onClick={copyToClipboard}
                                className="group grid cursor-pointer grid-cols-[72px_1fr] items-center gap-6"
                            >
                                <div className="relative flex h-[72px] w-[72px] items-center justify-center border-4 border-white bg-[#941313] shadow-[5px_5px_0px_0px_#ffffff] transition-all duration-300 md:group-hover:bg-white">
                                    <img
                                        src="/img/post_office.png"
                                        className="h-11 w-11 object-contain brightness-0 invert transition-all md:group-hover:invert-0"
                                        alt="Email"
                                    />
                                    {copied && (
                                        <span className="absolute -top-9 left-0 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#941313]">
                                            Copiado!
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <span className="mb-1 block font-western text-[12px] font-bold uppercase tracking-[0.3em] text-[#941313]">
                                        Correspondência
                                    </span>
                                    <p className="break-all border-b border-white/30 font-body text-lg font-bold italic text-white transition-colors md:text-xl md:group-hover:border-[#941313]">
                                        {email}
                                    </p>
                                </div>
                            </Motion.div>

                            <div className="border-t-4 border-white/20 pt-8">
                                <span className="mb-4 block font-western text-[12px] font-bold uppercase tracking-[0.3em] text-[#941313]">
                                    Especialidade
                                </span>
                                <p className="max-w-xl border-l-4 border-[#941313] bg-white/5 py-4 pl-6 font-body text-2xl font-bold italic leading-tight text-white">
                                    Estudante de Análise e Desenvolvimento de Sistemas.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col bg-[#0a0a0a] lg:col-span-5">
                            <div className="relative min-h-56 overflow-hidden border-b-[6px] border-white">
                                <img
                                    src="/img/wheeler_rawson_co_club.png"
                                    className="absolute inset-0 m-auto h-44 w-44 object-contain brightness-125"
                                    alt="Selo do portfólio"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-black/75 px-6 py-4 text-center">
                                    <p className="font-western text-[12px] font-bold uppercase tracking-[0.3em] text-white">
                                        Qualidade em cada entrega
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 md:p-10">
                                <h4 className="relative mb-8 text-center font-western text-3xl font-bold uppercase tracking-widest text-white">
                                    Perícias
                                    <div className="absolute -bottom-3 left-1/2 h-1 w-20 -translate-x-1/2 bg-[#941313]" />
                                </h4>

                                <div className="w-full space-y-4">
                                    {skills.map((skill, index) => (
                                        <Motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={!isMobile ? { scale: 1.03, backgroundColor: '#fff', color: '#000' } : {}}
                                            className="flex cursor-default items-center justify-between border-2 border-white bg-black p-4 text-white shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] transition-all"
                                        >
                                            <span className="font-western text-sm font-bold uppercase tracking-widest">
                                                {skill}
                                            </span>
                                            <div className="h-2 w-2 bg-[#941313]" />
                                        </Motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative border-t-[6px] border-white bg-black p-5">
                        <div className="relative h-36 overflow-hidden border-2 border-white/30 bg-[#0a0a0a]">
                            <img
                                src="/img/feature2.png"
                                className="h-full w-full object-cover opacity-50 grayscale contrast-125 transition-opacity duration-700 md:hover:opacity-70"
                                alt="Textura decorativa"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <span className="select-none font-western text-4xl font-bold uppercase tracking-[0.45em] text-white/20">
                                    Portfolio
                                </span>
                            </div>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
}
