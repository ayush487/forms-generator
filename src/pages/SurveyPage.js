import { useParams } from "react-router-dom"

const SurveyPage = () => {
  const params = useParams()
  return (
    <div>
      Survey Page {params.formId}
    </div>
  )
}
export default SurveyPage