let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let BMI;

submit.addEventListener("click", (event)=>{
    event.preventDefault();
    let height = heightInput.value;
    // heightInput.value = '';
    let weight = weightInput.value;
    // weightInput.value = '';
    BMI = (weight / (height/100) ** 2).toFixed(2);

    if(BMI < 18.5) {
        result.innerHTML = `Your BMI is <b>${BMI}</b> which means You are <b>Underweight</b>`;
    } else if((BMI > 18.5) && (BMI < 24.9)) {
        result.innerHTML = `Yor BMI is <b>${BMI}</b> which means You are <b>Normal</b>`;
    } else if ((BMI > 25) && (BMI <29.9)) {
        result.innerHTML = `Yor BMI is <b>${BMI}</b> which means You are <b>Overweight</b>`;
    } else {
        result.innerHTML = `Yor BMI is <b>${BMI}</b> which means You are <b>Obesity</b>`;
    }

});