import { useEffect } from "react"
import Logout from "../components/login/Logout"

const LogoutPage = () => {
  useEffect(() => {
    document.title = "Logout - FormBuilder"
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      <Logout />
    </div>
  )
}
export default LogoutPage