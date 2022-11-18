import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';
import ProjectsScreen from './screens/ProjectsScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <title>Sergio R</title>
        </Helmet>
        <Header />
        <main className='py-3 mainContainer'>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/projects" element={<ProjectsScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;