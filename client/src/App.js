import React from 'react'
//import Header from './components/Headercomponents/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrappercomponents/Wrapper';
import Form from './components/FormComponents/Form';

function App() {
  return (
    <div className='App'>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
        <Wrapper/>
        <Form/>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
    </div>
  )
}

export default App