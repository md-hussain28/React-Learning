import React from 'react';
import useForm from '../../hooks/useForm';

const validate = (values) => {
  let errors = {};
  if (!values.name) errors.name = 'Name is required';
  if (!values.email) errors.email = 'Email is required';
  if (!values.password) errors.password = 'Password is required';
  return errors;
};

const SignUpForm = () => {
  const { values, errors, handleChange, validate, resetForm } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(validate)) {
      // Submit form or do further actions
      console.log('Form submitted successfully', values);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-gray-800 rounded-lg shadow-md">
    <div className="mb-6">
      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
    </div>
  
    <div className="mb-6">
      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
    </div>
  
    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
    </div>
  
    <button
      type="submit"
      className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit
    </button>
  </form>
  
  );
};

export default SignUpForm;
