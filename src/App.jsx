import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CursorToggle from './components/CursorToggle';

function App() {
  return (
    <div className="min-h-screen bg-black bg-[url('/img/bgOriginal.jpg')] bg-fixed bg-cover bg-center overflow-x-hidden selection:bg-[#941313] selection:text-white">
      <Navbar />
      <CursorToggle />

      <main className="pt-[100px] md:pt-[130px]">
        <Hero />

        <div className="h-10 bg-[url('/img/bgRip.png')] bg-repeat-x w-full opacity-40 my-8 rotate-180 invert brightness-0"></div>

        <About />

        <div className="h-10 bg-[url('/img/bgRip.png')] bg-repeat-x w-full opacity-40 my-8 invert brightness-0"></div>

        <Projects />
      </main>


      <Footer />

      <BackToTop />
    </div>
  );
}

export default App;