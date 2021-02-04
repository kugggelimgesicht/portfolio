import './App.css';
import React from 'react';
import Nav from './components/header/nav/Nav';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Skills/>
    <Works/>
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
