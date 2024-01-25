import React from 'react';
import Header from './components/Header';  
import HomePage from './Pages/Home';
import './App.css';
import About from './components/sections/About';
import Service from './components/services/Services';
import Card from './components/Card/Card';
import Work from './components/Work/Work';
import Card2 from './components/Card2/Card2';
import Card3 from './components/Card3/Card3';
import Form from './components/Forms/Forms';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <HomePage />
      <About/>
      <Service/>
      <Card/>
      <Work/>
      <Card2/>
      <Card3/>
      <Form/>
      <Footer/>
      </div>
  );
}

export default App;
