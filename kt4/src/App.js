import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage';

import NotFoundPage from './pages/NotFoundPage';
import ProductInfoPage from './pages/ProductInfoPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AboutPage/>}/>
          <Route path='/product/:id' element={<ProductInfoPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App