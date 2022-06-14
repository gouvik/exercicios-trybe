const fetchCoins = async () => {
    //parte de coleta de dados
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    return coins;
}

const fetchUsdCurrencies = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const usdEndpoint = '/currencies/usd.min.json'
    const url = baseUrl.concat(usdEndpoint);

    const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.usd))
    .catch((error) => error.toString());
        // .then((response) => response.json())
        // .then((data) => data.usd)
        // .catch((error) => error.toString());

    return usdCurrencies;
};


const setCoins = async () => {
    const coins = await fetchCoins();

    const coinsList = document.getElementById('coins-list');

    coins
    .filter((_, index) => index < 10)
    .forEach((coin) => {
        const newLi = document.createElement('li');
        const usdPrice = Number(coin.priceUsd);

        newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

        coinsList.appendChild(newLi);
    });
}

window.onload = () => {
    setCoins()
    fetchUsdCurrencies()
};