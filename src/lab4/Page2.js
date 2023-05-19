import React, { useState } from "react";

function Page2() {
  const [size, setSize] = useState(0);
  const [result, setResult] = useState({});

  const handleInputChange = (e) => {
    setSize(Number(e.target.value));
  };

  const handleButtonClick = () => {
    let randomArray = Array.from({length: size}, () => Math.floor(Math.random() * size));
    let evenIndexArr = randomArray.filter((_, i) => i % 2 === 0);
    let evenArr = randomArray.filter(n => n % 2 === 0);
    
    const insertionSort = (arr) => {
      for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
      }
      return arr;
    };

    const swapElements = (arr, i1, i2) => {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
      return arr;
    };

    const maxEvenIndex = Math.max(...evenIndexArr);
    const maxEven = Math.max(...evenArr);

    let swapped = swapElements([...randomArray], randomArray.indexOf(maxEvenIndex), randomArray.indexOf(maxEven));

    setResult({
      originalArray: randomArray,
      evenIndicesArray: evenIndexArr,
      maxEvenIndicesValue: maxEvenIndex,
      maxEvenIndicesIndex: randomArray.indexOf(maxEvenIndex),
      evenElementsArray: evenArr,
      maxEvenElementsValue: maxEven,
      maxEvenElementsIndex: randomArray.indexOf(maxEven),
      swappedArray: swapped,
      sortedArray: insertionSort(swapped)
    });
  };

  const codeTxt = `
  const handleInputChange = (e) => {
    setSize(Number(e.target.value));
  };

  const handleButtonClick = () => {
    let randomArray = Array.from({length: size}, () => Math.floor(Math.random() * size));
    let evenIndexArr = randomArray.filter((_, i) => i % 2 === 0);
    let evenArr = randomArray.filter(n => n % 2 === 0);
    
    const insertionSort = (arr) => {
      for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
      }
      return arr;
    };

    const swapElements = (arr, i1, i2) => {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
      return arr;
    };

    const maxEvenIndex = Math.max(...evenIndexArr);
    const maxEven = Math.max(...evenArr);

    let swapped = swapElements([...randomArray], randomArray.indexOf(maxEvenIndex), randomArray.indexOf(maxEven));
`;

  return (
    <div>
      <label>
        Enter array size:
        <input type="number" value={size} onChange={handleInputChange} />
      </label>
      <button onClick={handleButtonClick}>Calculate</button>
      <div className="result">
        <p>Original Array: {result.originalArray?.join(", ")}</p>
        <p>Even Indices Array: {result.evenIndicesArray?.join(", ")}</p>
        <p>Max Even Indices Value: {result.maxEvenIndicesValue}</p>
        <p>Max Even Indices Index: {result.maxEvenIndicesIndex}</p>
        <p>Even Elements Array: {result.evenElementsArray?.join(", ")}</p>
        <p>Max Even Elements Value: {result.maxEvenElementsValue}</p>
        <p>Max Even Elements Index: {result.maxEvenElementsIndex}</p>
        <p>Swapped Array: {result.swappedArray?.join(", ")}</p>
        <p>Sorted Array: {result.sortedArray?.join(", ")}</p>
      </div>

      <pre>
        {codeTxt}
      </pre>
    </div>
  );
}

export default Page2;
