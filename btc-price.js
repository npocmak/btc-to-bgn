const btcPrice = () =>
  fetch("https://api.coindesk.com/v1/bpi/currentprice/BGN.json")
    .then(res => res.json())
    .then(myJson => {
      let GBPAmount = myJson["bpi"]["BGN"]["rate"];
      document.getElementById("btc-price").append(`${BGNAmount}лева`);
    })
    .catch(err => console.log(err));

btcPrice();
