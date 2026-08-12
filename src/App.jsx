import React from 'react';
import NavBar from './Components/navBar/NavBar';
import Footer from './Components/footerSection/Footer';
import Hero from './Components/HomePage/Hero';
import "./index.css";

const App = () => {
  return (
    <div> 
      <NavBar />
      <Hero></Hero>
      <Footer />

      {/* <ErrorPage></ErrorPage> */}
    </div>
  );
};

export default App;