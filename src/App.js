import { Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader';
import { AnimatePresence } from "framer-motion";
import { lazy } from 'react';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Location = lazy(() => import('./pages/MapPage/MapPage'));

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
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <footer>
          <Footer />
        </footer>
      </AnimatePresence>

    </div>
  );
}

export default App;
