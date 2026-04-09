import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    /* Aplicação do bgOriginal como fundo fixo universal para evitar quebras de cor */
    <div className="min-h-screen bg-black bg-[url('/img/bgOriginal.jpg')] bg-fixed bg-cover bg-center overflow-x-hidden selection:bg-[#941313] selection:text-white">
      <Navbar />

      <main className="pt-[100px] md:pt-[130px]">
        {/* Hero Section - Transparente sobre o fundo fixo */}
        <Hero />

        {/* Divisória de papel rasgado - Invertida para fechar o Hero */}
        <div className="h-10 bg-[url('/img/bgRip.png')] bg-repeat-x w-full opacity-40 my-8 rotate-180 invert brightness-0"></div>

        {/* About Section (Dossiê de Campo) */}
        <About />

        {/* Divisória de papel rasgado - Abrindo a Galeria de Missões */}
        <div className="h-10 bg-[url('/img/bgRip.png')] bg-repeat-x w-full opacity-40 my-8 invert brightness-0"></div>

        {/* Projects Section (Missões de Modo Livre) */}
        <Projects />
      </main>

      {/* Footer Section - Fechamento com o selo Wheeler Rawson & Co. */}
      <Footer />
    </div>
  );
}

export default App;