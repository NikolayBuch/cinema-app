import { useState } from 'react';
import { omit } from 'lodash'
import validators from 'components/pages/Home/Form/validators';
import masks from 'components/pages/Home/Form/masks';

const useForm = (callback) => {
  const [values, setValues] = useState({
    name: '',
    russiaName: '',
    date: '',
    country: '',
    points: '',
    description: '',
    
  })
  const [errors, setErrors] = useState({})
  const [isEmpty, setEmpty] = useState(true)
 

  const validate = (event, name, value) => {
    const validation = validators[name](value)

    if (validation.length >= 1) {
      setErrors({ ...errors, [name]: validation })
    } else {
      setErrors(omit(errors, [name]))
    }

    if (values.name 
      && values.russiaName 
      && values.date 
      && values.country 
      && values.points 
      && values.description !== '') {
      setEmpty(false)
    } else {
      setEmpty(true)
    }

  }

  

  const handleChange = (event) => {

    event.persist();

    let name = event.target.name;
    let value = event.target.value;

    
    validate(event, name, value)
    const mask = masks[name](value)
    setValues({ ...values, [name]: mask, id: Date.now() })
console.log(masks.points(value))
  }


  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if(Object.keys(errors).length >= 1 || isEmpty) {
      return
    } else {
      callback()
    }
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isEmpty,
  };
};

export default useForm;