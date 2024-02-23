import React from 'react';
import './App.css';
import { Menu } from './component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { About, Main } from './pages';
import { Favorite } from './pages/Favorite';

function App() {

  return (
    <div className="App">
      <header className='app-header'>
        <Menu />
      </header>
      <main>
        <section className='container'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorite' element={<Favorite />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
