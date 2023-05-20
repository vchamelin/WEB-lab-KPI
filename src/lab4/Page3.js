import React, { useState } from 'react';

function Page3() {
  const [inputArray, setInputArray] = useState([]);
  const [outputArray, setOutputArray] = useState([]);
  const [arraySize, setArraySize] = useState('');

  const handleInputChange = (e) => {
    setArraySize(e.target.value);
  };

  const buildArray = () => {
    const size = parseInt(arraySize);
    const newArray = [];
    for (let i = 0; i < size; i++) {
      const randomValue = Math.floor(Math.random() * 16);
      newArray.push(randomValue);
    }
    setInputArray(newArray);
    calculateOutputArray(newArray);
  };

  const calculateOutputArray = (array) => {
    const max = Math.max(...array);
    const newArray = array.map((value) => max * value);
    setOutputArray(newArray);
  };

  const insertionSort = () => {
    const newArray = [...outputArray];
    for (let i = 1; i < newArray.length; i++) {
      const key = newArray[i];
      let j = i - 1;
      while (j >= 0 && newArray[j] < key) {
        newArray[j + 1] = newArray[j];
        j = j - 1;
      }
      newArray[j + 1] = key;
    }
    setOutputArray(newArray);
  };

  return (
    <div>
      <h3>Введіть розмір массиву:</h3>
      <input
        type="number"
        value={arraySize}
        onChange={handleInputChange}
        placeholder="Введіть кількість елементів масиву А"
      />
      <button onClick={buildArray}>Побудувати масив</button>

      <h3>Вхідний масив А:</h3>
      <p>{inputArray.join(', ')}</p>

      <h3>Вихідний масив В:</h3>
      <p>{outputArray.join(', ')}</p>

      <button onClick={insertionSort}>Сортувати за зменшенням</button>
    </div>
  );
}

export default Page3;
