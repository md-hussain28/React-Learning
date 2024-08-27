import { useState } from 'react';

// Generic form handling hook
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = (validateFn) => {
    const newErrors = validateFn(values);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, setValues, errors, handleChange, validate, resetForm };
};

export default useForm;
