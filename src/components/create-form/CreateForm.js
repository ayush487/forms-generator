import { useState } from 'react'
import classes from './CreateForm.module.css'
import CreateFormMetaData from './CreateFormMetaData'
import FormQuestionBox from './FormQuestionBox'

const CreateForm = () => {
  const [metaData, setMetaData] = useState({})
  const setData = data => {
    setMetaData(data)
  }
  return (
    <div className={classes['create-form-page']}>
      <div className={classes['create-form-container']}>
        <CreateFormMetaData setData={setData} />
        <FormQuestionBox />
      </div>
    </div>
  )
}

export default CreateForm