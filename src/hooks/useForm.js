import { useState } from "react";


export const useForm = ( initialState = {} ) => {
  const [values, setValues] = useState(initialState); 

  const handleInputChange = ({target}) => {
    
    setValues({
      ...values,
      [target.name]: target.value
    });

  }

  const reset = ({name}) => {
    console.log(target)
    setValues({
      ...values,
      [name]: ''
    });
  }

  return [values, handleInputChange, reset]

}
