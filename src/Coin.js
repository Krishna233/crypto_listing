import React, {useState} from 'react';
import './Coin.css';


const Coin = ({
  name,
  price,
  symbol,
  marketcap
}) => {
    const [savedata, setSavedata] = useState(false);
  return (


    
    <tr className='coin-container'>
      <tr className='coin-row'>
        <tr className='coin'>
          <td>{name}</td>
          <td className='coin-symbol'>{symbol}</td>
        </tr>
        <tr className='coin-data'>
          <td className='coin-price'>${price}</td>
          <button onClick={() => setSavedata(!savedata)} className="btn" >{savedata ? "View" : "Save Data"}</button>
          <td className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </td>
        </tr>
      </tr>
    </tr>
  );
};

export default Coin;