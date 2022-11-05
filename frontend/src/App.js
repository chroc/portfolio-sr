import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className='py-3 mainContainer'>
        <Container>
          <Profile />
          <hr className='my-5'></hr>
          <About />
          <hr className='my-5'></hr>
          <Contact />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;