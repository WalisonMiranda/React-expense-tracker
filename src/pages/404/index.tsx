import { useState, useEffect } from 'react';

import { formatter } from '../../helpers/numberFormat';

import { Wrapper } from './styles.js';

export function NotFound() {
  let [lostMoney, setLostMoney] = useState(1000);
  
  const randomMoneyLost = () => {
    const money = Math.floor(Math.random() * 10);
    return money;
  }

  useEffect(() => {
    let interval: any = null;
    
    if (lostMoney > 0) {
      interval = setInterval(() => {
        setLostMoney(lostMoney => lostMoney - randomMoneyLost());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [lostMoney]);


  return (
    <Wrapper>
      <div>
        <p>404</p>
        <hr/>
        <p>Página não encontrada</p>
      </div>
      <div>
        <p>😢 {lostMoney < 0 ? formatter(0) : formatter(lostMoney)}</p>
      </div>
    </Wrapper>
  )
}
