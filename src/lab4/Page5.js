import React, { useState } from "react";

function Page5() {
  const [formData, setFormData] = useState({
    naturalNumber: '',
    floatNumber: '',
    password: '',
    confirmPassword: '',
    date: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = e => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let errors = {};
    let isValid = true;

    if (!formData.naturalNumber || !Number.isInteger(parseFloat(formData.naturalNumber))) {
        isValid = false;
        errors.naturalNumber = 'Please enter a natural number value.';
    }

    if (!formData.floatNumber || isNaN(parseFloat(formData.floatNumber))) {
        isValid = false;
        errors.floatNumber = 'Please enter a valid float value.';
    }

    if (formData.password !== formData.confirmPassword) {
        isValid = false;
        errors.password = 'Passwords do not match.';
    }

    setFormErrors(errors);

    if (isValid) {
        alert('Form submitted successfully!');
        setFormData({
            naturalNumber: '',
            floatNumber: '',
            password: '',
            confirmPassword: '',
            date: '',
        });
    } else {
        alert('Form contains errors. Please fix them before submitting.');
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
  };

  const errorStyle = {
    color: 'red',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div>
      <p>
        Валідація HTML-форми реєстрації користувача.
        Забезпечити перевірку елементів HTML-форми таких видів: ціле число, дійсне число, дата у форматі DD.MM.YYYY, однаковість даних у полях введення паролю (основне та перевірочне). Крім того, забезпечити перевірку введення обов‘язкових полів, помічених (*).
      </p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <p>Natural Number*:</p>
        <input
          style={inputStyle}
          type="number"
          name="naturalNumber"
          value={formData.naturalNumber}
          onChange={handleChange}
          required
        />
        {formErrors.naturalNumber && <div style={errorStyle}>{formErrors.naturalNumber}</div>}
        <p>Float Number*:</p>
        <input
          style={inputStyle}
          type="number"
          step="0.01"
          name="floatNumber"
          value={formData.floatNumber}
          onChange={handleChange}
          required
        />
        {formErrors.floatNumber && <div style={errorStyle}>{formErrors.floatNumber}</div>}
        <p>Password*:</p>
        <input
          style={inputStyle}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <p>Confirm Password*:</p>
        <input
          style={inputStyle}
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {formErrors.password && <div style={errorStyle}>{formErrors.password}</div>}
        <p>Date:</p>
        <input
          style={inputStyle}
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <button style={buttonStyle} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Page5;
