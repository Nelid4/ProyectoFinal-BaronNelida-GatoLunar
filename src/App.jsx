import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import './App.css'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path='/condition/:condition' element={<ItemListContainer/>}/>
        <Route path='/genre/:genre' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
        <Footer />

    </BrowserRouter>
  );
}


//     <div>

// {/* MOSTRAR PERSONAJES; CON .MAP Y .FILTER */}
//       {/* <ItemListContainer/> */}

// {/* MOSTRAR PERSONAJES CON NOMBRE Y BOTON NEXT AND PREVIOUS */}
//       {/* <PersonajesApi/> */}
// {/* CONTADOR */}
//     <Contador />
// <br />
// {/* CARD CON LOS LIBROS */}
//       {/* <CardBooks img='https://images.cdn1.buscalibre.com/fit-in/360x360/ff/9e/ff9ea4db43eb1ec258983f18c9a384bd.jpg' 
//       title='Un cuento perfecto' 
//       genre='Romance' 
//       price= {15000} />

//       <CardBooks img='https://www.tematika.com/media/catalog/Ilhsa/Imagenes/703582.jpg' 
//       title='Me alegro de que mi madre haya muerto' 
//       genre='Biografia' 
//       price={13500} />

//       <CardBooks img='https://images.cdn2.buscalibre.com/fit-in/360x360/52/fb/52fbe2c8719e8c0526a9dcd2d7e1b9ad.jpg' 
//       title='Cadáver exquisito' 
//       genre='Thriller' 
//       price={11000} /> */}

    // </div>

export default App;
