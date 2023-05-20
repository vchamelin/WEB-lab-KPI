import React, { useState } from 'react';

function Page4() {
  const [inputArray, setInputArray] = useState([]);
  const [inputArray2, setInputArray2] = useState([]);
  const [min, setMin] = useState(0);
  const [arraySize, setArraySize] = useState('');

  const handleInputChange = (e) => {
    setArraySize(e.target.value);
  };
  
  const buildArrays = () => {
    const size = parseInt(arraySize);
    const newArray = [];
    const newArray2 = [];
    for (let i = 0; i < size; i++) {
      const randomValue = Math.floor(Math.random() * 10);
      const randomValue2 = Math.floor(Math.random() * 10);
      newArray.push(randomValue);
      newArray2.push(randomValue2);
    }
    setInputArray(newArray);
    setInputArray2(newArray2);
  };

  const findCommonMin = () => {
    let minvalue = inputArray[0];
    let intersection = inputArray.filter(x => inputArray2.includes(x));
    console.log(intersection);
    for (const el of intersection) {
        if (el < minvalue) minvalue = el;
    }
    setMin(minvalue);
  }

    return (
        <div>
            <h3>Введіть розмір масивів:</h3>
            <input
                type="number"
                value={arraySize}
                onChange={handleInputChange}
                placeholder="Введіть кількість елементів масиву А"
            />
            <button onClick={buildArrays}>Побудувати масиви</button>
            <h3>Вхідний масив А:</h3>
            <p>{inputArray.join(', ')}</p>

            <h3>Вхідний масив В:</h3>
            <p>{inputArray2.join(', ')}</p>

            <button onClick={findCommonMin}>Найменший елемент</button>
            <p>{min}</p>
        </div>
    );
}

export default Page4;
