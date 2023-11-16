import React, { useState } from 'react';
import { omit } from 'lodash'

const useForm = (callback) => {
  const [value, setValue] = useState({})
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
            name: 'Поле не должно быть пустым'
          })
        } else if (!regularEnglish.test(String(value).toLowerCase())) {
          setErrors(omit(errors, "name"));
          setErrors({
            ...errors,
            name: 'Название фильма должно быть на Английском'
          })
        } else {
          setErrors(omit(errors, "name"));
        }
        break;
      case 'russiaName':
        if (value.length < 1) {
          setErrors({
            ...errors,
            russiaName: 'Поле не должно быть пустым'
          })
        } else if (!regularRussian.test(String(value).toLowerCase())) {
          setErrors(omit(errors, "russiaName"));
          setErrors({
            ...errors,
            russiaName: 'Название фильма должно быть на Руссокм'
          })
        } else {
          setErrors(omit(errors, "russiaName"));
        }
        //   !regularRussian.test(String(value).toLowerCase()) 
        //   ?  setErrors({
        //     ...errors,
        //     russiaName:'Название фильма должно быть на Руссокм'
        // })
        // : setErrors(omit(errors, "russiaName")); 

        break;
      case 'date':
        if (value.length < 1) {
          setErrors({
            ...errors,
            date: 'Поле не должно быть пустым'
          })
        } else if (value.length < 4 || value.length > 4) {
          setErrors(omit(errors, "date"));
          setErrors({
            ...errors,
            date: 'Год должен состоять из 4 цифр'
          })
        } else {
          setErrors(omit(errors, "date"));
        }

        // !value.length === 4
        //   ? setErrors({
        //     ...errors,
        //     date: 'Введите коректный год'
        //   })
        //   : setErrors(omit(errors, 'date'))
        break;
      case 'country':
        if (value.length < 1) {
          setErrors({
            ...errors,
            country: 'Поле не должно быть пустым'
          })
        } else if (!regularRussian.test(String(value).toLowerCase())) {
          setErrors(omit(errors, "country"));
          setErrors({
            ...errors,
            country: 'Название страны должно быть на русском'
          })
        } else {
          setErrors(omit(errors, "country"));
        }
        // !regularRussian.test(String(value).toLowerCase())
        //   ? setErrors({
        //     ...errors,
        //     country: 'Название страны должно быть на русском'
        //   })
        //   : setErrors(omit(errors, "country"));
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
        if (value.length < 1) {
          setErrors({
            ...errors,
            description: 'Поле не должно быть пустым'
          })
        } else if (!regularRussian.test(String(value).toLowerCase())) {
          setErrors(omit(errors, "description"));
          setErrors({
            ...errors,
            description: 'Описание фильма должно быть на Руссокм'
          })
        } else if (value.length < 200) {
          setErrors(omit(errors, "description"));
          setErrors({
            ...errors,
            description: 'Описание фильма не должно быть коротким'
          })
        } else {
          setErrors(omit(errors, "description"));
        }
        // !regularRussian.test(String(value).toLowerCase())
        //   ? setErrors({
        //     ...errors,
        //     description: 'Описание должно быть на русском'
        //   })
        //   : setErrors(omit(errors, "description"));
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
      [name]: value,
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