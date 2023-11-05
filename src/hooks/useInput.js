import  { useEffect, useState } from 'react';

const useValidation = (value, validations) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [englishInputError, setEnglishInputError] = useState(false);
  const [russianInputError, setRussianInputError] = useState(false);
  const [dateInputError, setDateInputError] = useState(false);
  const [pointInputError, setPointInputError] = useState(false);
  const [inputValid, setInputValid] = useState(false)
  const inputEmpty = () => {
    value < 1
      ? setErrorMessage('Поле не должно быть пустым')
      : setErrorMessage('');
  };

  useEffect(() => {
    for (var validation in validations) {
      switch (validation) {
        case 'isEmpty': 
        value.length < 1 
        ? setIsEmpty(false) || setErrorMessage('')  
        : setIsEmpty(true) ||  setErrorMessage('Поле не должно быть пустым') ;
        break;
        case 'englishInput':
          const checkEnglish = () => {
            const regular = /[a-zA-Z]/;
            regular.test(String(value).toLowerCase())
              ? setEnglishInputError(false) || setErrorMessage('')
              : setEnglishInputError(true) ||
                setErrorMessage('Название фильма должно быть на Английском');
          };
          value ? checkEnglish() : inputEmpty();
          break;

        case 'russianInput':
          const checkRussian = () => {
            const regular = /[а-яА-Я]/;
            regular.test(String(value).toLowerCase())
              ? setRussianInputError(false) || setErrorMessage('')
              : setRussianInputError(true) ||
                setErrorMessage('Название фильма должно быть на Руссокм');
          };
          value ? checkRussian() : inputEmpty();
          break;

        case 'dateInput':
          const checkDate = () => {
            value.length < 4
              ? setDateInputError(true) ||
                setErrorMessage('Год должен состоять из 4 цифр')
              : setDateInputError(false) || setErrorMessage('') || console.log(dateInputError);
          };
          value ? checkDate() : inputEmpty();
          break;

          case 'pointInput': 
          const checkPoint = () => {
            value.length < 3
            ? setPointInputError(true) || 
            setErrorMessage('Введите 2х значное число')
            : setPointInputError(false) || setErrorMessage('')
          }
          value? checkPoint() : inputEmpty() ;

        default:
      }
    }
  }, [value]);

  useEffect(()=> {
  if (  englishInputError || russianInputError || dateInputError || pointInputError ) {
    setInputValid(false)
  } else { 
    setInputValid(true)
  }
  },[ englishInputError, russianInputError, dateInputError, pointInputError])

  return {
    isEmpty,
    errorMessage,
    englishInputError,
    russianInputError,
    dateInputError,
    pointInputError,
    inputValid
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  const handleDateChange = (e) => {
    let input = e.target.value;

    input = input.replace(/\D/g, '');

    if (input.length <= 4) {
      setValue(input);
    } else if (input.length <= 4) {
      setValue(`${input.slice(4)}`);
    }
  };

  const handlePointChange = (e) => {
    let input = e.target.value;

    input = input.replace(/\D/g, '');

    if (input.length <= 1) {
      setValue(input);
    } else if (input.length <= 2) {
      setValue(`${input.slice(0, 1)}.${input.slice(1)}`);
    }
  };

  return {
    setValue,
    value,
    isDirty,
    handleDateChange,
    handlePointChange,
    onChange,
    onBlur,
    ...valid,
  };
};

export {
  useInput
}