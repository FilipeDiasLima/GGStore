import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Favorite from '../pages/Favorite';
import GameScreen from '../pages/GameScreen';
import Home from '../pages/Home';
import Library from '../pages/Library';
import RegisterGame from '../pages/RegisterGame';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/store' element={<Home />} />
      <Route path='/library' element={<Library />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/favorites' element={<Favorite />} />
      <Route path='/game' element={<GameScreen />} />
      <Route path='/newGame' element={<RegisterGame />} />
    </Routes>
  )
}

export default AppRoutes