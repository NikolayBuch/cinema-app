import React, { useContext } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Textarea from 'components/common/Textarea';

import s from './Form.module.scss';
import { useInput } from 'hooks/useInput';
import { Context } from 'context/context';
import { ModalContext } from 'context/modalContext';

const Form = () => {
  const { moviesList, setMoviesList } = useContext(Context);
  const { handleModal } = useContext(ModalContext);

  const name = useInput('', { englishInput: true });
  const russiaName = useInput('', { russianInput: true });
  const date = useInput('', { dateInput: true });
  const points = useInput('', { pointInput: true });
  const country = useInput('');
  const description = useInput('');

  const addNewMovie = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      name: name.value,
      russiaName: russiaName.value,
      description: description.value,
      date: date.value,
      country: country.value,
      points: points.value,
    };

    const newMoviesList = [...moviesList, newMovie];
    setMoviesList(newMoviesList);
    handleModal();
  };

  return (
    <form className={s.root}>
      <div className={s.list}>
        <Input
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          isError={name.englishInputError}
          isErrorMessage={name.errorMessage}
          isDirt={name.isDirty}
          isEmpty={name.isEmpty}
          name='name'
          type='text'
          placeholder='Английское название фильма'
        />
        <Input
          value={russiaName.value}
          onChange={(e) => russiaName.onChange(e)}
          onBlur={(e) => russiaName.onBlur(e)}
          isError={russiaName.russianInputError}
          isErrorMessage={russiaName.errorMessage}
          isEmpty={russiaName.isEmpty}
          isDirt={russiaName.isDirty}
          name='russiaName'
          type='text'
          placeholder='Русское название фильма'
        />
        <Input
          onChange={(e) => date.handleDateChange(e)}
          value={date.value}
          onBlur={(e) => date.onBlur(e)}
          isErrorMessage={date.errorMessage}
          isError={date.dateInputError}
          isDirt={date.isDirty}
          isEmpty={date.isEmpty}
          type='text'
          placeholder='Дата выхода'
        />
        <Input
          onBlur={(e) => country.onBlur(e)}
          onChange={(e) => country.onChange(e)}
          isErrorMessage={country.errorMessage}
          isError={country.russianInputError}
          value={country.value}
          type='text'
          placeholder='Страна'
        />
        <Input
          onBlur={(e) => points.onBlur(e)}
          onChange={(e) => points.handlePointChange(e)}
          isErrorMessage={points.errorMessage}
          isError={points.pointInputError}
          value={points.value}
          isDirt={points.isDirty}
          isEmpty={points.isEmpty}
          type='text'
          placeholder='Оценка фильма'
        />
      </div>

      <Textarea
        onBlur={(e) => description.onBlur(e)}
        onChange={(e) => description.onChange(e)}
        isErrorMessage={description.errorMessage}
        isError={description.russianInputError}
        value={description.value}
        isEmpty={description.isEmpty}
        placeholder='описание'
      />

      <Button
        disabled={
          !name.inputValid ||
          !russiaName.inputValid ||
          !date.inputValid ||
          !points.inputValid ||
          !country.inputValid ||
          !description.inputValid
        }

        onClick={addNewMovie}
        color='form'>
        Добавить
      </Button>
    </form>
  );
};

export default Form;
