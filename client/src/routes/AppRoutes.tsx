import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Library from '../pages/Library';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/store' element={<Home />} />
      <Route path='/library' element={<Library />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/favorites' element={<Favorite />} />
    </Routes>
  )
}

export default AppRoutes