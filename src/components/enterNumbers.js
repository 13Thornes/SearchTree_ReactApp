import React, { useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../utils/config";

const EnterNumbers = () => {
  const [numbers, setNumbers] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!numbers.trim()) {
      errors.numbers = 'Please enter numbers';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    const numbersInput = numbers.split(",");

    event.preventDefault();

    

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    const newNumbers = {
      numbers: numbers,
    };

    console.log(newNumbers);

    axios.post(`${BASE_URL}/process-numbers`, numbersInput)
      .then(response => {
        console.log('Numbers entered successfully:', response.data);
        setNumbers(''); 
        setErrors({}); 
      })
      .catch(error => {
        console.error('There was an error entering the numbers', error);
      });
  };

  return (
    <div>
      <h1>Enter Numbers</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Numbers:</label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            required
          />
          {errors.numbers && <p style={{ color: 'red' }}>{errors.numbers}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnterNumbers;
