import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const getInputProps = () => {
    return {
      type,
      value,
      onChange,
    };
  };

  const clear = () => setValue("");

  return {
    getInputProps,
    clear,
  };
};

export default useField;
