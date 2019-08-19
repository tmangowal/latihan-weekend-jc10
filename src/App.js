import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Tambah from './components/Tambah'
import InputForm from './components/InputForm'

function App() {
  return (
    <div className='container'>
      <Tambah/>
      <InputForm/>
    </div>
  );
}

export default App;
