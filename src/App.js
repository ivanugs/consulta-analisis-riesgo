import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { Suspense } from 'react';
import { AppRouter } from './Router';
import React from 'react';

function App() {
  return (
    <Router>
      <Suspense>
      <Header />
      <AppRouter />
      <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
