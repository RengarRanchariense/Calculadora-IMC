const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result-total");
const show = document.querySelector(".show");

function sumValues() {
  const sumTotal = weight.value / (height.value * height.value);
  const fix = sumTotal.toFixed(2);

  if (sumTotal < 18.5) {
    show.innerHTML =
      "Seu IMC é de: " + fix + " e você é considerado abaixo do peso normal !";
  } else if (sumTotal < 24.9) {
    show.innerHTML =
      "Seu IMC é de: " + fix + " e seu peso é considerado normal !";
  } else if (sumTotal < 29.9) {
    show.innerHTML =
      "Seu IMC é de: " + fix + " e você está com excesso de peso !";
  } else if (sumTotal < 34.9) {
    show.innerHTML =
      "Seu IMC é de: " + fix + " você está com Obesidade Classe I !";
  } else if (sumTotal < 39.9) {
    show.innerHTML =
      "Seu IMC é de: " + fix + " você está com Obesidade Classe II !";
  } else if (sumTotal >= 40) {
    show.innerHTML =
      "Seu IMC é de: " + fix + " você está com Obesidade Classe III !";
  }
}

calculate.addEventListener("click", sumValues);
