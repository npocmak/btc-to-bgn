const btcPrice = () =>
  fetch("https://api.coindesk.com/v1/bpi/currentprice/GBP.json")
    .then(res => res.json())
    .then(myJson => {
      let GBPAmount = myJson["bpi"]["GBP"]["rate"];
      document.getElementById("btc-price").append(`£${GBPAmount}`);
    })
    .catch(err => console.log(err));

btcPrice();
