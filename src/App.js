import { Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader';
import { AnimatePresence } from "framer-motion";
import { lazy } from 'react';
import Ticker from './components/Ticker/Ticker';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Location = lazy(() => import('./pages/MapPage/MapPage'));
const Contacts = lazy(() => import('./pages/ContactPage/ContactPage'));

function App() {

  const location = useLocation();
  return (
    <div>
      <Navigation />
      <AnimatePresence>
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/location' element={<Location />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <footer>
        <Ticker />
        <Footer />
      </footer>

    </div>
  );
}

export default App;
