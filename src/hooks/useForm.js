// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = () => {
  // using the state and handleChanges from CheckoutForm.js to create a custom hook
  const [values, setValues] = useState("");

  const handleChanges = (e) => {
    // console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // the values from new changes will be set the with setValues state hook and returned along with previous values.
  return [values, handleChanges];
};

export default useForm;
