import { useState } from "react";

const useLocal = (key, initialValue) => {
  const [values, setValues] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item
      ? JSON.parse(item)
      : localStorage.setItem(key, JSON.stringify(initialValue));
  });

  const storedValues = (values) => {
    localStorage.setItem(key, JSON.stringify(values));
    setValues(values);
  };

  return [values, storedValues];
};

export default useLocal;
