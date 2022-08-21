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

export interface GameCartProp {
  id: number
  name: string
  price: number
  cover_url: string
  plataform: string
  subtotal: number
}

interface AuthContextData {
  isSigned: boolean
  user: UserData | null
  token: string
  cartGames: GameCartProp[]
  getUser(): void
  signIn(data: LoginData): Promise<void>
  logout(): void
  addItemToCart(id: number): void
  removeItemFromCart(id: number): void
  updateSubTotal(value: number, id: number): void
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProps) => {
  const [cookies, setCookies, removeCookie] = useCookies(['token'])

  const [token, setToken] = useState('')
  const [isSigned, setIsSigned] = useState(false)
  const [user, setUser] = useState(initialUserData)
  const [cartGames, setCartGames] = useState<GameCartProp[]>([])

  const navigate = useNavigate()

  function updateSubTotal(value: number, id: number) {
    const newArr = cartGames.map(item => {
      if (item.id == id) return { ...item, subtotal: value }
      return item
    })
    setCartGames(newArr)
  }

  function addItemToCart(itemId: number) {
    let idFound = false
    cartGames.map((item: GameCartProp) => {
      if (item.id === itemId) idFound = true
    })
    if (!idFound) getGame(itemId)
  }

  function removeItemFromCart(itemId: number) {
    const filtered = cartGames.filter((value, index, arr) => {
      return value.id !== itemId;
    });
    setCartGames(filtered)
  }

  async function getGame(id: number) {
    const responseProduct = await api.get(`product/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const game = { ...responseProduct.data, subtotal: responseProduct.data?.price }
    setCartGames([...cartGames, game])
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
      cartGames,
      getUser,
      signIn,
      logout,
      addItemToCart,
      removeItemFromCart,
      updateSubTotal
    }}>
      <CookiesProvider>
        {children}
      </CookiesProvider>
    </AuthContext.Provider>
  )
};

export default AuthContext