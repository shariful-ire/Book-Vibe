import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/FooterSection/Footer';
import "./index.css";

const App = () => {
  return (
    <div>  {/* ← একটি wrapper div দিতে হবে */}
      <NavBar />
      <Footer />
    </div>
  );
};

export default App;