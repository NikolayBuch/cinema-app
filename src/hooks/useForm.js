import React, { useState } from 'react';
import {omit} from 'lodash'

const useForm = (callback) => {

  // const [value, setValue] = useState('');
  const [value, setValue] = useState({})
  const [isEmpty, setEmpty] = useState(false);
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})

  const validate = (event, name, value) => {
    const regularEnglish = /[a-zA-Z]/;
    const regularRussian = /[а-яА-Я]/;

    switch (name) {
      case 'name':
        if (value.length < 1) {
          setErrors({
            ...errors,
            name:'Поле не должно быть пустым'})
        } else if (!regularEnglish.test(String(value).toLowerCase()) ){
         setErrors(omit(errors, "name")); 
         setErrors({
          ...errors,
          name: 'Название фильма должно быть на Английском'
         })
        }else {
          setErrors(omit(errors, "name")); 
         }
        // if (!regularEnglish.test(String(value).toLowerCase()) ) {
        //   setErrors({
        //     ...errors,
        //     name:'Название фильма должно быть на Английском'})
        // } else if (value.length < 0 ){
        //  setErrors(omit(errors, "name")); 
        //  setErrors({
        //   ...errors,
        //   name: 'поле не должно быть пустым'
        //  })
        // }else {
        //   setErrors(omit(errors, "name")); 
        //  }
        
      //   !regularEnglish.test(String(value).toLowerCase()) 
      //   ? setErrors({
      //     ...errors,
      //     name:'Название фильма должно быть на Английском'
      // })
      //   : setErrors(omit(errors, "name")); 
         
        break;
        case 'russiaName':
          !regularRussian.test(String(value).toLowerCase()) 
          ?  setErrors({
            ...errors,
            russiaName:'Название фильма должно быть на Руссокм'
        })
        : setErrors(omit(errors, "russiaName")); 
    
        break;
        case 'date':
        value.length === 4
        ? setErrors({
          ...errors,
          date: 'Введите коректный год'
        })
        : setErrors(omit(errors, 'date'))
        break;
        case 'country':
          !regularRussian.test(String(value).toLowerCase()) 
          ?  setErrors({
            ...errors,
            country:'Название страны должно быть на русском'
        })
        : setErrors(omit(errors, "country")); 
        break;
        case 'points':
        value.length === 3
        ? setErrors({
          ...errors,
          points: 'Введите коректный балл'
        })
        : setErrors(omit(errors, 'points'))
        break;
        case 'description':
          !regularRussian.test(String(value).toLowerCase()) 
          ?  setErrors({
            ...errors,
            description:'Описание должно быть на русском'
        })
        : setErrors(omit(errors, "description")); 
        break;
    
      default:
        break;
    }

  }

  const handleChange = (event) => {

    event.persist();

    let name = event.target.name;
    let value = event.target.value;
    // setValue(event.target.value)
    console.log(value)
   
    validate(event, name, value)

    setValues({
      ...values,
      [name]:value,
  })

//   switch (name) {
//     case 'points':
//       value = value.replace(/\D/g, '');

     

//       if (value.length <= 1) {
//         return ;
//       } else if (value.length <= 2) {
//         setValues({ ...values, [name]: `${value.slice(0, 1)}.${value.slice(1)}`}) ;
//       }
// // setValues( {...values, [name]: value})

      
//       break;}

  //     case 'date':
  //     value = value.replace(/\D/g, '');
      
  //     if (value.length <= 4) {
  //       setValue(value);
  //     } else if (value.length <= 4) {
  //       setValue(`${value.slice(3)}`);
  //     }
  //     break;
  
  //   default:
  //     break;
  // }
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    callback();
  }
  
  return {
    value,
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;