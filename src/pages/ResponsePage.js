import { useEffect } from "react"
import { useParams } from "react-router-dom"
import FormResponses from "../components/response/FormResponses"

const ResponsePage = () => {
  const param = useParams()
  useEffect(() => {
    document.title = "Responses - FormBuilder"
    window.scrollTo(0,0)
  }, [])
  return(
    <FormResponses formId={param.formId} />
  )
}
export default ResponsePage