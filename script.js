// API
const API_KEY = "vIVCKDc3sl3JkTM7F9KiqZhbZ3RBgUbl";
const API_URL = "https://api.currencybeacon.com/v1/latest";
var baseCurrency = "USD";
var symbols =
  "PHP,EUR,JPY,GBP,AUD,CAD,CHF,CNH,HKD,NZD,SGD,SEK,KRW,NOK,NZD,INR,MXN,TWD,ZAR";

async function checkRates() {
  const response = await fetch(
    API_URL +
      `?api_key=${API_KEY}` +
      `&base=${baseCurrency}` +
      `&symbols=${symbols}`
  );
  var data = await response.json();

  console.log(data);

  var myArray = data.rates;

  console.log(myArray);

  for (i = 0; i < myArray.length; i++) {
    const obj = Object.values(myArray[i]);
    const rowElement = document.createElement("tr");
    for (const cellText of obj) {
      const cellElement = document.createElement("td");
      cellElement.textContent = cellText;
      rowElement.appendChild(cellElement);
    }

    // var table = document.getElementById("currency-table");
    // const tableRow = document.createElement("tr");
    // const tdName = document.createElement("td");
    // const tdNameText = document.createTextNode(Object.keys(myArray));
    // tdName.appendChild(tdNameText);
    // tableRow.appendChild(tdName);
    // table.appendChild(tableRow);
  }
}

checkRates();
