import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className='py-3'>
        <Container className='appcontainer'>
          <Profile />
          <About />

        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
