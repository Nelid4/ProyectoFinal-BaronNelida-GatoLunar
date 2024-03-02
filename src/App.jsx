import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';

function App() {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      {showCarousel && (
        <div className="carrusel">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./src/imagenes/BANNER4.png" className="d-block w-100" alt="BANNER" />
              </div>
              <div className="carousel-item">
                <img src="./src/imagenes/BANNER2.png" className="d-block w-100" alt="BANNER" />
              </div>
              <div className="carousel-item">
                <img src="./src/imagenes/BANNER3.png" className="d-block w-100" alt="BANNER" />
              </div>
              <div className="carousel-item">
                <img src="./src/imagenes/BANNER1.png" className="d-block w-100" alt="BANNER" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/condition/:condition' element={<ItemListContainer />} />
        <Route path='/genre/:genre' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
