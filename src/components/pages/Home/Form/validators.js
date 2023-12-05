const regularEnglish = /[a-zA-Z]/;
const regularRussian = /[а-яА-Я]/;

const isEmpty = 'Поле не должно быть пустым';

const validators = {
  name: (value) => {
    if (value.length < 1) {
      return isEmpty;
    } else if (!regularEnglish.test(String(value).toLowerCase())) {
      return 'Название фильма должно быть на Английском';
    } else {
      return '';
    }
  },

  russiaName: (value) => {
    if (value.length < 1) {
      return isEmpty;
    } else if (!regularRussian.test(String(value).toLowerCase())) {
      return 'Название фильма должно быть на Руссокм';
    } else {
      return '';
    }
  },

  date: (value) => {
    if (value.length < 1) {
      return isEmpty;
    } else if (value.length < 4) {
      return 'Год должен состоять из 4 цифр';
    } else {
      return '';
    }
  },

  country: (value) => {
    if (value.length < 1) {
      return isEmpty;
    } else if (!regularRussian.test(String(value).toLowerCase())) {
      return 'Название страны должно быть на Русском';
    } else {
      return '';
    }
  },
  points: (value) => {
    if (value.length < 1) {
      return isEmpty;
    } else if (value.length === 1) {
      return 'Балл должен быть из двух цифр';
    } else {
      return '';
    }
  },

  description: (value) => {
    if (value.length < 1) {
      return isEmpty;
    } else if (!regularRussian.test(String(value).toLowerCase())) {
      return 'Описание фильма должно быть на Руссокм';
    } else if (value.length < 200) {
      return 'Описание фильма не должно быть коротким';
    } else {
      return '';
    }
  },
};

export default validators;
