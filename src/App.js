import React, { useState } from 'react';


function IncreaseDecrease() {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  const numberType= () => {
    if (number === 0) {
      return 'neutral';
    } else if (number < 0) {
      return 'negative';
    } else {
      return 'positive';
    }
  };

  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={handleIncrease}>Increase</button>  <t /> <t />
      <button onClick={handleDecrease}>Decrease</button>  <br/>
      <p>Type: {numberType()}</p>

    </div>
  );
}

export default IncreaseDecrease;
