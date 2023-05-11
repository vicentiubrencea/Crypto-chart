import React from 'react';
import cryptoData from './cryptoData';

function Crypto(props) {
  return (
    <div>
      <label htmlFor="crypto-select" id='crypto-label'>Crypto:</label>
      <select id="crypto-select" value={props.crypto} onChange={props.onChange}>
      {cryptoData.map((item)=> (
        <option key={item.crypto} value={item.crypto}>{item.text}</option>
      ))}
      </select>
    </div>
  );
}
export default Crypto;