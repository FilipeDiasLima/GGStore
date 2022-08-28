import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from '../context/auth';
import Cart from '../pages/Cart';
import Favorite from '../pages/Favorite';
import GameScreen from '../pages/GameScreen';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Main from '../pages/Main';
import RegisterGame from '../pages/RegisterGame';

const AppRoutes = () => {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<Main route='store' />} />
      <Route path='/store' element={<Home />} />
      <Route path='/library' element={<Library />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/favorites' element={<Favorite />} />
      <Route path='/game' element={<GameScreen />} />
      {user?.provider && <Route path='/newGame' element={<RegisterGame />} />}
    </Routes>
  )
}

export default AppRoutes