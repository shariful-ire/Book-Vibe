import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footerSection/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="mx-auto w-11/12 max-w-6xl">
        <Suspense
          fallback={
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-lg text-gray-600">
                Loading...
              </p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;