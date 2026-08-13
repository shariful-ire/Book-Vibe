import React from 'react';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footerSection/Footer';


import "./index.css";
import { Outlet } from 'react-router';

import { useEffect,useState } from 'react';
import ErrorPage from './pages/errorPage/ErrorPage';

const App = () => {

const bookPromise = fetch("/data/booksData.json")
  .then(book => book.json());





  return (
    <div> 
      <NavBar />
      

      <Outlet>

      </Outlet>
      <Footer />

      {/* <ErrorPage></ErrorPage> */}
    </div>
  );
};

export default App;