import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Escritório de Advocacia",
        img: "/img/snipe.png",
        desc: "Desenvolvimento de plataforma jurídica profissional.",
        link: "https://ricardopedroadvocacia.com.br/"
    },
    {
        title: "TimeLeap",
        img: "/img/watch.png",
        desc: "Sistema de gerenciamento de farmácia para o curso do Senai.",
        link: "https://sante-farmacias.vercel.app/"
    },
    {
        title: "Portfólio",
        img: "/img/icon.png",
        desc: "Interface imersiva inspirada no catálogo Wheeler Rawson & Co. de 1899.",
        link: "https://github.com/karolrdg"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full py-24 bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Cabeçalho da Seção */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <img
                        src="/img/wheeler_rawson_co_club.png"
                        className="w-56 mb-6 invert brightness-200"
                        alt="Club Logo"
                    />
                    <div className="relative">
                        <h3 className="font-western text-4xl md:text-5xl text-white uppercase tracking-[0.3em] border-y-4 border-[#941313] py-4 px-12 bg-black/60">
                            Missões de Modo Livre
                        </h3>
                    </div>
                </motion.div>

                {/* Grid de Projetos */}
                <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl border-[6px] border-white bg-black shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                    {projects.map((proj, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`group flex flex-col items-center p-10 text-center transition-all duration-500 hover:bg-white/5
                                ${index !== projects.length - 1 ? 'border-b-4 md:border-b-0 md:border-r-4 border-white/20' : ''}`}
                        >
                            {/* Container da Imagem com Animação */}
                            <div className="h-48 flex items-center justify-center mb-10 relative">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="relative z-10"
                                >
                                    <img
                                        src={proj.img}
                                        className="max-h-40 w-auto object-contain grayscale brightness-125 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_20px_rgba(148,19,19,0.8)] transition-all duration-500"
                                        alt={proj.title}
                                    />
                                </motion.div>
                                {/* Brilho de fundo no hover */}
                                <div className="absolute inset-0 bg-[#941313]/0 group-hover:bg-[#941313]/10 blur-3xl rounded-full transition-all duration-500"></div>
                            </div>

                            <h4 className="font-western text-3xl text-white mb-6 uppercase tracking-tighter group-hover:text-[#941313] transition-colors duration-300">
                                {proj.title}
                            </h4>

                            <div className="h-1 w-16 bg-[#941313] mb-8"></div>

                            <p className="font-body text-[14px] text-white/70 leading-relaxed mb-10 h-24 overflow-hidden uppercase italic tracking-wider">
                                {proj.desc}
                            </p>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto w-full py-4 bg-white text-black font-western text-sm uppercase tracking-[0.2em] font-bold border-2 border-white hover:bg-[#941313] hover:border-[#941313] hover:text-white transition-all duration-300 shadow-[5px_5px_0px_0px_#941313]"
                            >
                                Aceitar Serviço
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                {/* Rodapé da Seção */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    className="mt-20 w-full max-w-4xl"
                >
                    <img src="/img/footer.jpg" className="w-full grayscale invert brightness-200" alt="" />
                </motion.div>
            </div>
        </section>
    );
}