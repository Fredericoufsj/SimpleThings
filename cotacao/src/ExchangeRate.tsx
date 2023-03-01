import { useEffect, useState } from "react";

function ExchangeRate() {
  const [rate, setRate] = useState(0);

  useEffect(() => {    
      fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then((response) => response.json())
        .then((data) => setRate(data.rates.BRL))
        .catch((error) => console.log(error));    
  }, []);

  return(  
  <div>
    1 USD = {rate} BR
  </div>  
)}

export default ExchangeRate;
