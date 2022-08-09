import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main route='login'/>} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
  )
}

export default AuthRoutes