import { useLang } from './i18n';
import { MatrixBackground } from './components/MatrixBackground';
import { BootScreen } from './components/BootScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';

export function App() {
  const { t } = useLang();
  return (
    <>
      <MatrixBackground />
      <div className="scanlines" aria-hidden="true" />
      <BootScreen />
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Terminal />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Bartosz Szwugier</span>
          <span className="muted">{t.footer}</span>
        </div>
      </footer>
    </>
  );
}
