import  { useEffect, useState } from 'react';


const useInput = (initialValue, ) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
     setValue(value)


    //  switch (name) {
    //   case 'points':
        
    //     break;
    //     case 'date':
        
    //     break;
     
    //   default:
    //     break;
    //  }

  }


  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const onBlur = (e) => {
  //   setIsDirty(true);
  // };

  // const handleDateChange = (e) => {
  //   let input = e.target.value;

  //   input = input.replace(/\D/g, '');

  //   if (input.length <= 4) {
  //     setValue(input);
  //   } else if (input.length <= 4) {
  //     setValue(`${input.slice(4)}`);
  //   }
  // };

  // const handlePointChange = (e) => {
  //   let input = e.target.value;

  //   input = input.replace(/\D/g, '');

  //   if (input.length <= 1) {
  //     setValue(input);
  //   } else if (input.length <= 2) {
  //     setValue(`${input.slice(0, 1)}.${input.slice(1)}`);
  //   }
  // };

  return {
    value,
    onChange,
  };
};

export default useInput;
