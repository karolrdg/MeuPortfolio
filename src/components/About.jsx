import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function About() {
    const [copied, setCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const email = "karolinerodrigues12@outlook.com";
    const skills = ['React', 'UI/UX Design', 'Tailwind', 'SQL', 'C#', 'Metodologia Ágil'];

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
        <section id="about" className="relative w-full py-24 bg-transparent overflow-hidden selection:bg-white selection:text-black">
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl bg-black border-[6px] border-white shadow-[40px_40px_0px_0px_#941313] relative overflow-hidden"
                >
                    <div className="border-b-[6px] border-white p-10 flex flex-col md:flex-row items-center justify-between bg-black text-white gap-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="font-western text-6xl md:text-8xl uppercase tracking-tighter font-bold drop-shadow-[4px_4px_0px_rgba(148,19,19,1)]">
                                Dossiê de Campo
                            </h2>
                            <p className="font-body text-sm text-[#941313] uppercase tracking-[0.6em] mt-3 font-bold italic">
                                Registro Oficial • Divisão Sul • 1899
                            </p>
                        </div>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.9 }}
                            transition={{ delay: 0.3 }}
                            src="/img/feature.png"
                            className="w-40 md:w-52 invert brightness-200"
                            alt="Oficial"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 bg-black">
                        <div className="lg:col-span-7 p-10 md:p-16 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-white space-y-12">

                            <motion.div
                                whileHover={!isMobile ? { x: 10 } : {}}
                                className="flex items-center gap-8 group"
                            >
                                <div className="w-20 h-20 flex-shrink-0 bg-white shadow-[5px_5px_0px_0px_#941313] md:group-hover:bg-[#941313] md:group-hover:shadow-white transition-all duration-300 flex items-center justify-center">
                                    <img src="/img/female_clothing.png" className="w-10 h-10 invert brightness-0 object-contain" alt="Ícone" />
                                </div>
                                <div>
                                    <span className="font-western text-[12px] text-[#941313] uppercase tracking-[0.3em] block font-bold mb-1">Identificação</span>
                                    <p className="font-body text-4xl md:text-5xl text-white font-bold italic border-b-4 border-white inline-block uppercase leading-tight">
                                        Karoline Rodrigues
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={!isMobile ? { x: 10 } : {}}
                                className="flex items-center gap-8 group"
                            >
                                <div className="w-20 h-20 flex-shrink-0 bg-white shadow-[5px_5px_0px_0px_#941313] md:group-hover:bg-[#941313] md:group-hover:shadow-white transition-all duration-300 flex items-center justify-center">
                                    <img src="/img/camps.png" className="w-10 h-10 invert brightness-0 object-contain" alt="Ícone" />
                                </div>
                                <div>
                                    <span className="font-western text-[12px] text-[#941313] uppercase tracking-[0.3em] block font-bold mb-1">Paradeiro Atual</span>
                                    <p className="font-body text-4xl text-white font-bold italic uppercase leading-none">
                                        Esteio / RS
                                    </p>
                                    <span className="font-western text-[11px] text-white/50 uppercase font-bold mt-3 block tracking-[0.2em]">
                                        Estados Unidos do Brasil
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={!isMobile ? { x: 10 } : {}}
                                onClick={copyToClipboard}
                                className="flex items-center gap-8 group cursor-pointer"
                            >
                                <div className="w-20 h-20 flex-shrink-0 bg-white shadow-[5px_5px_0px_0px_#941313] md:group-hover:shadow-[#941313] transition-all duration-300 relative flex items-center justify-center">
                                    <img src="/img/post_office.png" className="w-10 h-10 invert brightness-0 object-contain" alt="Email" />
                                    {copied && (
                                        <span className="absolute -top-8 left-0 text-[10px] text-[#941313] font-bold uppercase tracking-widest bg-white px-2 py-1">Copiado!</span>
                                    )}
                                </div>
                                <div>
                                    <span className="font-western text-[12px] text-[#941313] uppercase tracking-[0.3em] block font-bold mb-1">Correspondência</span>
                                    <p className="font-body text-xl text-white font-bold italic uppercase border-b border-white/30 md:group-hover:border-[#941313] transition-colors">
                                        {email}
                                    </p>
                                </div>
                            </motion.div>

                            <div className="pt-10 border-t-4 border-white/20">
                                <span className="font-western text-[12px] text-[#941313] uppercase tracking-[0.3em] block font-bold mb-4">Especialidade</span>
                                <p className="font-body text-2xl text-white font-bold uppercase italic leading-tight max-w-md border-l-4 border-[#941313] pl-6">
                                    Cursando Análise e Desenvolvimento de Sistemas
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 bg-[#0a0a0a] p-10 md:p-14 flex flex-col items-center">
                            <h4 className="font-western text-3xl text-white text-center mb-12 uppercase font-bold tracking-widest relative">
                                Perícias
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-20 bg-[#941313]"></div>
                            </h4>
                            <div className="w-full space-y-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={!isMobile ? { scale: 1.05, backgroundColor: "#fff", color: "#000" } : {}}
                                        className="bg-black text-white p-5 border-2 border-white flex justify-between items-center shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] transition-all cursor-default"
                                    >
                                        <span className="font-western text-sm uppercase tracking-widest font-bold">
                                            {skill}
                                        </span>
                                        <div className="w-2 h-2 bg-[#941313] rounded-full"></div>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="mt-auto pt-16 flex flex-col items-center opacity-70"
                            >
                                <img src="/img/wheeler_rawson_co_club.png" className="w-36 mb-6 invert brightness-200" alt="WRC Seal" />
                                <div className="text-center">
                                    <p className="font-western text-[14px] text-white uppercase tracking-[0.3em] font-bold">Confiança Absoluta</p>
                                    <p className="font-body text-[10px] text-[#941313] font-bold uppercase tracking-widest mt-2">Padrão de Qualidade Superior</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="border-t-[6px] border-white p-6 bg-black relative">
                        <div className="h-40 bg-[#0a0a0a] border border-white/20 relative group overflow-hidden">
                            <img src="/img/feature2.png" className="w-full h-full object-cover opacity-20 grayscale brightness-150 transition-opacity duration-1000 md:group-hover:opacity-40" alt="Sketch" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-western text-white/5 text-5xl uppercase tracking-[0.5em] font-bold select-none">Top Secret</span>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#941313] flex items-center justify-center font-western text-3xl font-bold text-white shadow-xl">
                            !
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}