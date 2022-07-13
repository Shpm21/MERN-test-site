import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from './screens/ProductScreen';



// Arrow funtion (snippet: sfc)
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <h1></h1>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;