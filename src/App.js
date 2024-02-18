import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((parseFloat(value) * 9 / 5) + 32 || '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(((parseFloat(value) - 32) * 5 / 9) || '');
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        /> 
        <br /> <br /> 

      </label>
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </label>
    </div>
  );
}

export default TemperatureConverter;
