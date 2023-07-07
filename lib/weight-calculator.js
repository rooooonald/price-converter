export default function calculate(inputData) {
  const { inputtedPrice, selectedUnit } = inputData;

  if (selectedUnit === "lb") {
    return {
      lb: inputtedPrice,
      kg: inputtedPrice * 2.2,
      kati: inputtedPrice * 1.33,
    };
  }

  if (selectedUnit === "kg") {
    return {
      lb: inputtedPrice / 2.2,
      kg: inputtedPrice,
      kati: (inputtedPrice / 2.2) * 1.33,
    };
  }

  if (selectedUnit === "kati") {
    return {
      lb: inputtedPrice / 1.33,
      kg: (inputtedPrice / 1.33) * 2.2,
      kati: inputtedPrice,
    };
  }
}
