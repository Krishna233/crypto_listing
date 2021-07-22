import React from "react";
import { Card } from "@material-ui/core";
import Draggable from "react-draggable";
import'./Caaards.css';

function Caaard() {
  return (
    <div className="app">
      <DraggableCard 
            img = "https://w7.pngwing.com/pngs/1018/698/png-transparent-bitcoin-cash-cryptocurrency-money-blockchain-election-flyers-text-orange-logo.png"
            title = "BITCOIN"
            price = "31597 USD"  />
      <DraggableCard 
            img = "https://www.vhv.rs/dpng/d/406-4062671_gold-doge-png-download-dogecoin-transparent-png-download.png"
            title = "DOGECOIN"
            price = "0.19 USD"  />
      <DraggableCard 
            img = "https://w7.pngwing.com/pngs/368/176/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png"
            title = "Ethereum"
            price = "1913 USD"  />
    </div>
  );
}

const DraggableCard = ({ img,title,price }) => {
  return (
    <div className='app'>
    <Draggable>
      <Card
        style={{ width: "300px",
        height:'200px', 
        backgroundColor: '#ebebeb' }}
      >
        <div className='card'>
          <div className="card-n-l">
            <p>{title}</p>
            <img src={img} 
            className="card-logo" 
            alt='' />
          </div>
          <h3>{price}</h3>
        </div>
        
      </Card>
    </Draggable>
    </div>
  );
};
export default Caaard
