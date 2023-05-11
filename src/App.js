
import React, { useState, useEffect } from 'react';
import Crypto from './components/Crypto';
import Period from './components/Period';
import moment from 'moment';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function CryptoChart () {
  const [crypto, setCrypto] = useState('bitcoin');
  const [period, setPeriod] = useState('1');
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=${period}`)
        .then(response => response.json())
        .then(data => {
          setData(data.prices);
        })
        .catch(error => console.log(error));
    };
    fetchData();
  }, [crypto,period]);

  useEffect(() => {
    const formattedData = data.map((item) => [moment(item[0]).valueOf(), item[1]]);
    setOptions({
      title: { text: `${crypto.toUpperCase()} PRICE` },
      xAxis: { type: 'datetime' },
      yAxis: { title: { text: 'Price (USD)' } },
      series: [{ name: crypto, data: formattedData }]
    });
  },[data, crypto]);

  const [options, setOptions] = useState({
    title: { text: '' },
    xAxis: { type: 'datetime' },
    yAxis: { title: { text: '' } },
    series: []
  });

  const handleCryptoChange = (event) => setCrypto(event.target.value);

  const handlePeriodChange = (event) => setPeriod(event.target.value);

  return (
    <div>
      <h1 className='title'>CRYPTOCURRENCY  PRICES</h1>
      <div className='options'>
        <Crypto value={crypto} onChange={handleCryptoChange}/> 
        <Period value={period} onChange={handlePeriodChange}/>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
        
export default CryptoChart;