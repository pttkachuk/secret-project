import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/HomePage'));
const Location = lazy(() => import('./pages/MapPage'));

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/location' element={<Location />} />
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
