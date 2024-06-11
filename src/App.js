import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import { Suspense } from 'react';
import { AppRouter } from './Router';
import React from 'react';

function App() {
  return (
    <Router>
      <Suspense>
      <Header />
      <AppRouter />
      </Suspense>
    </Router>
  );
}

export default App;
