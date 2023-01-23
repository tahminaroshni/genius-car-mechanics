import { useContext } from "react"
import { AuthContext } from "../Pages/Login/Authprovider/AuthProvider"

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;