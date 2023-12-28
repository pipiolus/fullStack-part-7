import { useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  const getInputProps = () => ({
    type,
    value,
    onChange,
  });

  return {
    getInputProps,
    clear,
  };
};
