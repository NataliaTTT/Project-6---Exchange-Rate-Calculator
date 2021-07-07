const currency1 = document.getElementById("currency-1");
let inputCur1 = currency1.value;

const currency2 = document.getElementById("currency-2");
let inputCur2 = currency2.value;

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");
const amount = document.getElementById("amount");
let amountCur = amount.value;
const result = document.getElementById("result");

let apiUrl = `https://v6.exchangerate-api.com/v6/92f4c441eb0f79440723986c/latest/${inputCur1}`;

console.log(inputCur1);
console.log(inputCur2);
showRates(apiUrl);

async function showRates(url) {
  const response = await fetch(url, {
    method: "GET",
  });
  const ratesRes = await response.json();
  //console.log(typeof ratesRes);
  console.log(ratesRes);

  const exchange = `${ratesRes.conversion_rates[inputCur1]} ${ratesRes.base_code} = ${ratesRes.conversion_rates[inputCur2]} ${inputCur2}`;
  console.log(exchange);
  rate.value = exchange;

  result.value =
    Math.round(amount.value * ratesRes.conversion_rates[inputCur2] * 100) / 100;
}
currency1.addEventListener("input", (e) => {
  e.preventDefault();
  inputCur1 = "";
  inputCur1 = currency1.value;

  apiUrl = `https://v6.exchangerate-api.com/v6/92f4c441eb0f79440723986c/latest/${inputCur1}`;
  showRates(apiUrl);
});

currency2.addEventListener("input", (e) => {
  e.preventDefault();
  inputCur2 = "";
  inputCur2 = currency2.value;

  //apiUrl = `https://v6.exchangerate-api.com/v6/92f4c441eb0f79440723986c/latest/${inputCur1}`;
  showRates(apiUrl);
});

amount.addEventListener("input", (e) => {
  e.preventDefault();
  amountCur = "";
  amountCur = amount.value;

  //apiUrl = `https://v6.exchangerate-api.com/v6/92f4c441eb0f79440723986c/latest/${inputCur1}`;
  showRates(apiUrl);
});

swap.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(inputCur1);
  console.log(inputCur2);

  const change = inputCur1;
  inputCur1 = inputCur2;
  inputCur2 = change;

  apiUrl = `https://v6.exchangerate-api.com/v6/92f4c441eb0f79440723986c/latest/${inputCur1}`;
  showRates(apiUrl);
});
