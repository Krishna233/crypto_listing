import React, { useEffect, useState } from 'react';
import './App.css';
import Caaard from'./Caaard'
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';
import Coin from './Coin';
   

function App(){
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">

     
      <nav className="header">
          <img
            className="header__icon"
            src="https://ci3.googleusercontent.com/proxy/P7ljLklJiMVvAw6ErYAuokwU--iiMQ_8ROj2AI4aIrhPZ9sWXtbDHYyfdmrKMVZ0ATJbu1LOu1NhUieyJH1WUfw2l72grRHNSRCd20mEb90h4PG23xYaQ0Ag_HfEgZNJeZReiQj9iQf-cdrNyAGW8uIy_ry7IXDdQ87G8SRHXAqh52U0ZQqX44zq5S08ZrR_XqhnG-aOd_hVJ5OfYA=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1j-yTzcZXbKtlul61hBp55gwZrlGe_9dE&revid=0B9skVG_OgQvQU1loTGFxOHcwNXJJZFF6OEZ1UXdBNDcvRktJPQ"              
            alt="app_logo"
          />
      </nav>
 
      <Caaard/>

        
        <div className="search-box">
            <h1 className="search-d-h">Stock Details Table</h1>
          <form>
              <div className='header__center'>
                  <SearchIcon 
                  className="search-icon"/>
                  <input type="text" 
                    placeholder="Search by Currency" 
                    onChange={handleChange}
                  />        
              </div>
          </form>
          </div>  
        <div >
          <div >
          {filteredCoins.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                
              />
            );
          })}
          </div>
        </div>
        </div>      
  );
}

export default App;
