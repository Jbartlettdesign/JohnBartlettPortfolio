import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'; 
import Footer from './components/Footer';

function App() {
        //current page is the variable
  const [currentPage, handlePageChange] = useState('about');
  const renderPage = (currentPage) => {
  
    switch(currentPage) {
      case 'resume':
        return <Resume />;
      case 'about':
        return <About /> 
      case  'contact':
        return  <Contact />
      case 'portfolio':
        return <Portfolio />
    }
  };
  return (
    <div >
      <Nav 
        currentPage = {currentPage} 
        handlePageChange = {handlePageChange}
      />
        
        <div>
          {
          renderPage(currentPage)
          }
        </div>
          <Footer />
    </div>
  );
}

export default App;
