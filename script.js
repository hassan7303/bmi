const calculateButton = document.getElementById("calculate-btn");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDisplay = document.getElementById("result");

calculateButton.addEventListener("click", function () {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
    const bmi = weight / (height / 100) ** 2;
    let bmiCategory;
    let underweightAmount;

    if (bmi < 18.5) {
      bmiCategory = "کمبود وزن";
      underweightAmount = Math.abs(18.5 - bmi) * (height / 100) ** 2;
      resultDisplay.className = "text-red";
    } else if (bmi < 25) {
      bmiCategory = "وزن طبیعی";
      resultDisplay.className = "text-green";
    } else if (bmi < 30) {
      bmiCategory = "اضافه وزن";
      resultDisplay.className = "text-yellow";
    } else {
      bmiCategory = "چاقی";
      resultDisplay.className = "text-red";
    }

    let resultMessage = `شاخص توده بدنی شما (BMI): ${bmi.toFixed(
      2
    )} - دسته: ${bmiCategory}`;
    if (bmiCategory === "کمبود وزن") {
      resultMessage += ` - میزان کمبود وزن: ${underweightAmount.toFixed(
        1
      )} کیلوگرم`;
    }
    resultDisplay.textContent = resultMessage;
  } else {
    resultDisplay.textContent = "لطفا مقادیر قد و وزن معتبر وارد کنید.";
    resultDisplay.className = "";
  }
});
