import React from 'react';
import memoji from './memoji.png'
import './App.css';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
        <img src={memoji} className="App-logo" alt="logo" />
        <p>
          Welcome to Jenny Dihrkop's super cool website
        </p>
        <a className="App-link" href='/resume'>Enter if you dare</a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
