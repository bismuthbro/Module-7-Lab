import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
export default function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [responseState, setResponseState] = useState(null)
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    useEffect(()=> {const axDebts = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
    axios.get(axDebts)
      .then(response => setResponseState(response.data.bitcoin[currency.toLowerCase()]))
    response.data.bitcoin[currency.toLowerCase()]
      .catch(error => { console.log(error) })
  }, [currency])
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
        <p>{responseState}</p>
        </div>
    )
}
