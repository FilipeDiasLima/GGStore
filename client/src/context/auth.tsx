import { createContext, ReactElement, useEffect, useState } from 'react'
import { api } from '../services/api';
import { useCookies, CookiesProvider } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

interface AuthProps {
  children: ReactElement;
}

interface UserData {
  id: number,
  name: string,
  email: string,
  provider: boolean,
  avatar_url: string
}

interface AuthContextData {
  isSigned: boolean
  user: UserData | null
  token: string
  cartItems: number[]
  getUser(): void
  signIn(data: LoginData): Promise<void>
  logout(): void
  addItemToCart(id: number): void
  removeItemFromCart(id: number): void
}

interface LoginData {
  email: string
  password: string
}

const initialUserData = {
  id: 0,
  name: '',
  email: '',
  provider: false,
  avatar_url: ''
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProps) => {
  const [cookies, setCookies, removeCookie] = useCookies(['token'])

  const [token, setToken] = useState('')
  const [isSigned, setIsSigned] = useState(false)
  const [user, setUser] = useState(initialUserData)
  const [cartItems, setCartItems] = useState<number[]>([])

  const navigate = useNavigate()

  function addItemToCart(itemId: number) {
    let idFound = false
    cartItems.map(id => {
      if (id === itemId) idFound = true
    })
    if (!idFound) setCartItems([...cartItems, itemId])
  }

  function removeItemFromCart(itemId: number) {
    let filtered = cartItems.filter((value, index, arr) => {
      return value !== itemId;
    });
    setCartItems(filtered)
  }

  async function signIn(data: LoginData) {
    const response = await api.post('/session', {
      email: data.email,
      password: data.password
    })
    setCookies('token', response.data.token, { path: '/', maxAge: 1000000000 },)
    setUser(response.data.user)
    setIsSigned(true)

    navigate('/store')
  }

  async function logout() {
    removeCookie('token')
    setIsSigned(false)
    navigate('/login')
  }

  async function getUser() {
    const response = await api.get('user', {
      headers: {
        'Authorization': `Bearer ${cookies.token}`
      }
    })
    setUser(response.data)
  }

  useEffect(() => {
    if (cookies.token) {
      setIsSigned(true)
      setToken(cookies.token)
    }
  }, [cookies.token])

  return (
    <AuthContext.Provider value={{
      isSigned,
      user,
      token,
      cartItems,
      getUser,
      signIn,
      logout,
      addItemToCart,
      removeItemFromCart
    }}>
      <CookiesProvider>
        {children}
      </CookiesProvider>
    </AuthContext.Provider>
  )
};

export default AuthContext