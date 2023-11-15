import React, { useContext } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Textarea from 'components/common/Textarea';

import s from './Form.module.scss';
import useForm from 'hooks/useForm';
import { Context } from 'context/context';
import { ModalContext } from 'context/modalContext';

const Form = () => {
  const { moviesList, setMoviesList } = useContext(Context);
  const { handleModal } = useContext(ModalContext);

  const formMovie = () => {
    const newMoviesList = [...moviesList, values];
    setMoviesList(newMoviesList);
    handleModal();
  };

  const { value, handleChange, values, errors, handleSubmit } = useForm(formMovie);

  // const addNewMovie = (e) => {
  //   e.preventDefault();

  //   const newMovie = {

  //   };
  //   const newMoviesList = [...moviesList, newMovie];
  //   setMoviesList(newMoviesList);
  //   handleModal();

  // };
  console.log(values)
  return (
    <form className={s.root} onSubmit={handleSubmit}>
      <div className={s.list}>
        <Input
          name='name'
          type='text'
          placeholder='Английское название фильма'
          onChange={handleChange}
          isErrorMessage={errors.name}
        />
        <Input
          name='russiaName'
          type='text'
          placeholder='Русское название фильма'
          onChange={handleChange}
          isErrorMessage={errors.russiaName}
        />
        <Input
          name='date'
          type='text'
          placeholder='Дата выхода'
          onChange={handleChange}
          isErrorMessage={errors.date}
        />
        <Input
          name='country'
          type='text'
          placeholder='Страна'
          onChange={handleChange}
          isErrorMessage={errors.country}
        />
        <Input
          name='points'
          type='text'
          placeholder='Оценка фильма'
          onChange={handleChange}
          // value={values.points}
          isErrorMessage={errors.points}
        />
      </div>

      <Textarea
        name='description'
        placeholder='описание'
        onChange={handleChange}
        isErrorMessage={errors.description}
      />

      <Button
        // disabled
        onClick={handleSubmit}
        color='form'>
        Добавить
      </Button>
    </form>
  );
};

export default Form;
