import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import NavBar from './NavBar';
import Product from './Product';
import Detail from './Detail';

function App() {
  return (
    <div>
    <NavBar />
    <Product />
    <Detail />
    </div>
  );
}

export default App;
