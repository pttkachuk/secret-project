import './App.css';
import AboutSection from './components/About/AboutSection';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
