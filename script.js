const API_KEY = "vIVCKDc3sl3JkTM7F9KiqZhbZ3RBgUbl";
const API_URL = "https://api.currencybeacon.com/v1/latest";
var baseCurrency = "USD";
var symbols =
  "PHP,EUR,JPY,GBP,AUD,CAD,CHF,CNH,HKD,NZD,SGD,SEK,KRW,NOK,NZD,INR,MXN,TWD,ZAR";

async function checkCurrency() {
  const response = await fetch(
    API_URL +
      `?api_key=${API_KEY}` +
      `&base=${baseCurrency}` +
      `&symbols=${symbols}`
  );
  var data = await response.json();

  console.log(data);
}

// checkCurrency();
