import React from 'react';
import Characters from './components/Characters';
import Header from './components/Header';
import './styles/App.scss';


const App = () => {

  return (
    <div className="App">
      <Header />
      <Characters />
    </div>
  );
}

export default App;
