import { useEffect } from "react"
import { useParams } from "react-router-dom"

const ResponsePage = () => {
  const param = useParams()
  useEffect(() => {
    document.title = "Responses - FormBuilder"
  }, [])
  return(
    <div>Responses {param.formId} </div>
  )
}
export default ResponsePage