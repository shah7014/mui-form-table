import { useState } from "react";

export const useForm = (
  initialValues,
  validateOnChange = false,
  validateFields
) => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // dont validate on values state. result might be inconsistent
    if (validateOnChange) {
      validateFields({ [name]: value });
    }
  };

  return {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
  };
};
