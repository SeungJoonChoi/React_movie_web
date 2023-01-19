import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const [coinValue, setCoinValue] = useState(0);
  const [isSelect, setIsSelect] = useState(false);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const btc = coins.find((coin) => coin.id === "btc-bitcoin");
  let btcPrice;
  if (btc != "undefined" && btc != null) btcPrice = btc.quotes.USD.price;

  const onMoneyChange = (event) => {
    setMoney(event.target.value);
  };
  const onCoinChange = (event) => {
    setCoinValue(event.target.value);
    setIsSelect(true);
    setMoney("");
  };

  return (
    <div>
      <h1> The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onCoinChange}>
          <option>Choose coin.</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price / btcPrice}>
              {coin.name}({coin.symbol}): {coin.quotes.USD.price / btcPrice} BTC
            </option>
          ))}
        </select>
      )}
      <p>
        <input
          onChange={onMoneyChange}
          value={money}
          type="number"
          placeholder="Your money($)"
        ></input>
      </p>
      {isSelect ? (
        <h3>You can buy {money / coinValue} of selected coin.</h3>
      ) : null}
    </div>
  );
}
export default App;
