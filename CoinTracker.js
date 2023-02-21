import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [amount, setAmount] = useState(0);
  const converter = (e) => {
    setAmount(e.target.value);
  };
  const [optionValue, setOptionValue] = useState(0);
  const selectOption = (e) => {
    setOptionValue(e.target.value);
  };
  const [focus, setFocus] = useState(true);
  const onFocus = () => {};
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={selectOption}>
            <option>Select a coin</option>
            {coins.map((coin) => (
              <option value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="USD">USD</label>
            <input
              onChange={converter}
              value={amount}
              id="USD"
              type="number"
              placeholder="Write USD"
            />
            <label htmlFor="Coin">Coin</label>
            <input
              value={amount / optionValue}
              id="Coin"
              type="number"
              placeholder="Coin Cost"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
