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
  avatar: string
}

interface AuthContextData {
  isSigned: boolean;
  user: UserData | null;
  token: string;
  signIn(data: LoginData): Promise<void>
  logout(): void
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
  avatar: ''
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProps) => {
  const [cookies, setCookies, removeCookie] = useCookies(['token'])

  const [token, setToken] = useState('')
  const [isSigned, setIsSigned] = useState(false)
  const [user, setUser] = useState(initialUserData)

  const navigate = useNavigate()

  async function signIn(data: LoginData) {
    const response = await api.post('/session', {
      email: data.email,
      password: data.password
    })
    setCookies('token', response.data.token)
    setUser(response.data.user)
    setIsSigned(true)

    navigate('/store')
  }

  async function logout() {
    removeCookie('token')
    setIsSigned(false)
    navigate('/login')
  }

  useEffect(() => {
    async function getUser() {
      const response = await api.get('user', {
        headers: {
          'Authorization': `Bearer ${cookies.token}`
        }
      })
      setUser(response.data[0])
    }

    getUser()
  }, [])

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
      signIn,
      logout
    }}>
      <CookiesProvider>
        {children}
      </CookiesProvider>
    </AuthContext.Provider>
  )
};

export default AuthContext