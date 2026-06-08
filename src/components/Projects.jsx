import React from 'react';
import { motion as Motion } from 'framer-motion';

const projects = [
    {
        title: 'Escritório de Advocacia',
        img: '/img/snipe.png',
        desc: 'Landing page profissional com visual sólido, foco em confiança e presença digital.',
        link: 'https://ricardopedroadvocacia.com.br/',
    },
    {
        title: 'Sistema de Farmácia',
        img: '/img/eecfdca0b8178bc8f9546b67502415c7210952d6.png',
        desc: 'Aplicação acadêmica para gestão de estoque, fluxo de atendimento e organização operacional.',
        link: 'https://sante-farmacias.vercel.app/',
    },
    {
        title: 'Sistema de Prospecção de Clientes',
        img: '/img/icon.png',
        desc: 'O ProspectCRM é uma plataforma web completa para prospecção comercial e gerenciamento de empresas (leads).',
        link: 'https://github.com/karolrdg/SistemaProspeccao',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full overflow-hidden bg-transparent py-24">
            <div className="container relative z-10 mx-auto flex flex-col items-center px-4">
                <Motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col items-center text-center"
                >
                    <img
                        src="/img/wheeler_rawson_co_club.png"
                        className="mb-6 w-56 invert brightness-200"
                        alt="Selo decorativo"
                    />
                    <div className="relative">
                        <h3 className="border-y-4 border-[#941313] bg-black/60 px-12 py-4 font-western text-4xl uppercase tracking-[0.3em] text-white md:text-5xl">
                            Projetos em Destaque
                        </h3>
                    </div>
                </Motion.div>

                <div className="grid w-full max-w-6xl grid-cols-1 border-[6px] border-white bg-black shadow-[0_30px_60px_rgba(0,0,0,0.8)] md:grid-cols-3">
                    {projects.map((project, index) => (
                        <Motion.article
                            key={project.title}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`group flex flex-col items-center p-10 text-center transition-all duration-500 hover:bg-white/5 ${index !== projects.length - 1 ? 'border-b-4 border-white/20 md:border-b-0 md:border-r-4' : ''
                                }`}
                        >
                            <div className="relative mb-10 flex h-48 items-center justify-center">
                                <Motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative z-10">
                                    <img
                                        src={project.img}
                                        className="max-h-40 w-auto object-contain grayscale brightness-125 transition-all duration-500 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_20px_rgba(148,19,19,0.8)]"
                                        alt={project.title}
                                    />
                                </Motion.div>
                                <div className="absolute inset-0 rounded-full bg-[#941313]/0 blur-3xl transition-all duration-500 group-hover:bg-[#941313]/10" />
                            </div>

                            <h4 className="mb-6 font-western text-3xl uppercase tracking-tighter text-white transition-colors duration-300 group-hover:text-[#941313]">
                                {project.title}
                            </h4>

                            <div className="mb-8 h-1 w-16 bg-[#941313]" />

                            <p className="mb-10 h-24 overflow-hidden font-body text-[14px] italic leading-relaxed text-white/70">
                                {project.desc}
                            </p>

                            <Motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto w-full border-2 border-white bg-white py-4 font-western text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[5px_5px_0px_0px_#941313] transition-all duration-300 hover:border-[#941313] hover:bg-[#941313] hover:text-white"
                            >
                                Ver projeto
                            </Motion.a>
                        </Motion.article>
                    ))}
                </div>

                <Motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} className="mt-20 w-full max-w-4xl">
                    <img src="/img/footer.png" className="w-full invert grayscale brightness-200" alt="" />
                </Motion.div>
            </div>
        </section>
    );
}
