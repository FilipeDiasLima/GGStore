import { useContext } from "react"
import AuthContext from "../context/auth"
import AppRoutes from "./AppRoutes"
import AuthRoutes from "./AuthRoutes"

const Router = () => {
  const { isSigned } = useContext(AuthContext)
  return isSigned ? <AppRoutes /> : <AuthRoutes />
}

export default Router