
import './App.css';
import {Routes,Route}from 'react-router-dom'
import Boolean from './components/booleanqustion'
import Home from './components/home'

function App() {
  return (
    <div >
     <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route exact path='home' element={<Home/>}/>
     <Route  path='booleanquestion' element={<Boolean/>}/>
     </Routes>
    </div>
  );
}

export default App;
