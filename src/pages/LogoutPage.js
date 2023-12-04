import { useEffect } from "react"
import Logout from "../components/login/Logout"

const LogoutPage = () => {
  useEffect(() => {
    document.title = "Logout - FormBuilder"
  }, [])
  return (
    <div>
      <Logout />
    </div>
  )
}
export default LogoutPage