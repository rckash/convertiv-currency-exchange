// API
const API_KEY = "vIVCKDc3sl3JkTM7F9KiqZhbZ3RBgUbl";
const API_URL = "https://api.currencybeacon.com/v1/latest";
var baseCurrency = "USD";
var sampleSymbols = [
  "PHP",
  "EUR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF", //
  "CNH",
  "HKD",
  "NZD",
  "SGD",
  "SEK",
  "KRW",
  "NOK", //
  "NZD",
  "INR",
  "MXN",
  "TWD",
  "ZAR", //
];

var defaultSymbols = ["PHP", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF"];

async function checkRates(currencySymbols = defaultSymbols) {
  try {
    const response = await fetch(
      API_URL +
        `?api_key=${API_KEY}` +
        `&base=${baseCurrency}` +
        `&symbols=${currencySymbols}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const myArray = data.rates;
    console.log(myArray);

    const tableBody = document.getElementById("currency-table");
    tableBody.innerHTML = "";

    for (const [currency, rate] of Object.entries(myArray)) {
      const rowElement = document.createElement("tr");
      const currencyCell = document.createElement("td");
      currencyCell.textContent = currency;
      rowElement.appendChild(currencyCell);

      const sellCell = document.createElement("td");
      sellCell.textContent = rate.toFixed(4);
      rowElement.appendChild(sellCell);

      const buyRate = (rate * 1.05).toFixed(4);
      const buyCell = document.createElement("td");
      buyCell.textContent = buyRate;
      rowElement.appendChild(buyCell);

      const trendCell = document.createElement("td");
      const image = document.createElement("img");
      image.src = "./images/triangle-up.svg";
      let result = Math.floor(Math.random() * 2);
      console.log(result);
      if (result === 1) {
        image.classList.add("filter-red");
      } else {
        image.classList.add("filter-green");
      }

      trendCell.appendChild(image);
      rowElement.appendChild(trendCell);

      tableBody.appendChild(rowElement);
    }
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

checkRates();

function symbolsSelector(currentValue) {
  let startingIndex = (currentValue - 1) * 7;
  let currencySymbols = [];

  for (i = 0; i < 7; i++) {
    currencySymbols.push(sampleSymbols[startingIndex]);
    startingIndex++;

    // console.log(currencySymbols);
    if (startingIndex === 19) break;
  }

  return currencySymbols.join();
}

let link = document.getElementsByClassName("link");
let lastValue = 1;
let currentValue = 1;

function activeLink() {
  // console.log(`current:${currentValue} last:${lastValue}`);
  document.getElementById("preview-nav-link-destination").scrollIntoView();
  currentValue = event.target.value;
  if (currentValue != lastValue) {
    for (l of link) {
      l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value;
    lastValue = currentValue;

    let currencySymbols = symbolsSelector(currentValue);
    checkRates(currencySymbols);
  }
}

function backBtn() {
  document.getElementById("preview-nav-link-destination").scrollIntoView();

  if (currentValue > 1) {
    for (l of link) {
      l.classList.remove("active");
    }
    currentValue--;
    link[currentValue - 1].classList.add("active");
    lastValue = currentValue;

    let currencySymbols = symbolsSelector(currentValue);
    checkRates(currencySymbols);
  }
}

function nextBtn() {
  document.getElementById("preview-nav-link-destination").scrollIntoView();

  if (currentValue < 3) {
    for (l of link) {
      l.classList.remove("active");
    }
    currentValue++;
    link[currentValue - 1].classList.add("active");

    lastValue = currentValue;

    let currencySymbols = symbolsSelector(currentValue);
    checkRates(currencySymbols);
  }
}
