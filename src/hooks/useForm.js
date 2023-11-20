import { useState } from 'react';
import { omit } from 'lodash'

const useForm = (callback) => {
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
        break;
      default:
        break;
    }

  }

  const handleChange = (event) => {

    event.persist();

    let name = event.target.name;
    let value = event.target.value;

    validate(event, name, value)

    setValues({
      ...values,
      [name]: value,
      id: Date.now()
    })

  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    callback();
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;