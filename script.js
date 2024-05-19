alert("Hello World!");

const API_KEY =
  "https://api.currencybeacon.com/v1/latestvIVCKDc3sl3JkTM7F9KiqZhbZ3RBgUbl";
const API_URL = "https://api.currencybeacon.com/v1/latest";
var baseCurrency = "USD";
var symbols = "EUR,PHP,JPY,GBP,AUD";

async function checkCurrency() {
  const response = await fetch(
    API_URL + `?api_key=${API_KEY}` + `&base={}` + `&symbols=${symbols}`
  );
  var data = await response.json();
}
