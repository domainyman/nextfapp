import React from 'react'
import TextfieldWrapper from './Formikinput'
import Textarea from './Textarea'
import SelectWrapper from './FormikSelect'
import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckboxGroup'
// import DatePicker from './DatePicker'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <TextfieldWrapper {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <SelectWrapper {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    // case 'date':
    //   return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl