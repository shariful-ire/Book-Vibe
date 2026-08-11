import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/FooterSection/Footer';
import Hero from './Components/HomePage/Hero';
import "./index.css";

const App = () => {
  return (
    <div>  {/* ← একটি wrapper div দিতে হবে */}
      <NavBar />
      <Hero></Hero>
      <Footer />
    </div>
  );
};

export default App;