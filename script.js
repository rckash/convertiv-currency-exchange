document.addEventListener("DOMContentLoaded", function() {
  // API
  const API_KEY = "vIVCKDc3sl3JkTM7F9KiqZhbZ3RBgUbl";
  const API_URL = "https://api.currencybeacon.com/v1/latest";
  var baseCurrency = "USD";
  var symbols =
    "PHP,EUR,JPY,GBP,AUD,CAD,CHF,CNH,HKD,NZD,SGD,SEK,KRW,NOK,NZD,INR,MXN,TWD,ZAR";

  async function checkRates() {
    try {
      const response = await fetch(
        API_URL +
          `?api_key=${API_KEY}` +
          `&base=${baseCurrency}` +
          `&symbols=${symbols}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      const myArray = data.rates;
      console.log(myArray);

      const tableBody = document.getElementById("currency-table");
      tableBody.innerHTML = '';

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
        trendCell.textContent = "Trend"; 
        rowElement.appendChild(trendCell);

    
        tableBody.appendChild(rowElement);
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  }

  checkRates();
});