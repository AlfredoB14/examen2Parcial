import React, {useEffect, useState} from 'react'

export const ExchageRate = (divisa1, divisa2) => {

    const exchangeRates = {
        "MXN": {
          "USD": 0.0503,
          "EUR": 0.0479,
          "BTC": 1,
          "ETH": 0.00007502,
          "DOGE": 0.00000768
        },
        "USD": {
          "MXN": 19.97,
          "EUR": 0.8892,
          "BTC": 1,
          "ETH": 0.0007502,
          "DOGE": 0.000768
        },
        "EUR": {
          "MXN": 22.31,
          "USD": 1.1228,
          "BTC": 1,
          "ETH": 0.0007875,
          "DOGE": 0.000796
        },
        "DOGE": {
          "MXN": 1.99,
          "USD": 1.99,
          "EUR": 1.99,
          "BTC": 0.00001349,
          "ETH": 0.00005728
        },
        "BTC": {
            "MXN": 48.900,
            "USD": 48.900,
            "EUR": 48.900,
            "ETH": 1.349,
            "DOGE": 7.845
          },
          "ETH": {
            "MXN": 3.600,
            "USD": 3.600,
            "EUR": 3.600,
            "BTC": 0.0002723,
            "DOGE": 272.3
          },
      };
    
    const [conversion, setConversion] = useState('');

    const [money, setMoney] = useState('');
    
    const onChangeMoney = (e) => {
        setMoney(e.target.value);
    }
    const onChangeConversion = (e) => {
        setConversion(e.target.value);
    }

    setConversion(money * exchangeRates[{divisa1}][{divisa2}])
    return(
        <>
            <div>
                <input type="text" name='money' id='money' 
                    value={money} 
                    onChange={onChangeMoney}
                    />

                    
            </div>
            
            <label htmlFor='user'>El cambio es: {conversion}</label>
        </>

    )

}