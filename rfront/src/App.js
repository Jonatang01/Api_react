import './customcss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Showproducts from './components/Showproducts';
import Createproduct from './components/Createproduct';
import Editproduct from './components/Editproduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Showproducts/>}/>
        <Route path='/create' element={<Createproduct/>}/>
        <Route path='/edit/:id' element={<Editproduct/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
