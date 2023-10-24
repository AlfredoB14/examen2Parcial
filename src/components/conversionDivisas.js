import React, {useEffect, useState} from 'react'

export const CambioDivisas = () => {

    //Variables
    const [divisaP, setDivisaP] = useState('');

    const [divisaS, setDivisaS] = useState('');

    const [conversion, setConversion] = useState('');
    
    const [money, setMoney] = useState('');
    
    const onChangeMoney = (e) => {
        setMoney(e.target.value);
    }

    //Componentes onChange
    const onChangeConversion = (e) => {
        setConversion(e.target.value);
    }

    const onChangeDivisaP = (e) => {
        setDivisaP(e.target.value);
    }

    const onChangeDivisaS = (e) => {
        setDivisaS(e.target.value);
    }

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
      }

    return (
    <>
            {/*DropDown Menu para la divisa 1*/}

            <select value={divisaP} onChange={onChangeDivisaP}>

                <option value=""> </option>

                <option value="MXN">MXN</option>

                <option value="USD">USD</option>

                <option value="EUR">EUR</option>

                <option value="BTC">BTC</option>

                <option value="ETH">ETH</option>

                <option value="DOGE">DOGE</option>             

            </select>
            {/*Impresion para la divisa 1*/}
            <div>
                    <label htmlFor="user">Divisa 1</label>
                    <label htmlFor="user"> {divisaP}</label>

            </div>

            {/*Impresion para el valor de la conversion*/}
            <div>

                <div>
                    
                        <div>
                        <input type="text" name='money' id='money' 
                            value={money} 
                            onChange={onChangeMoney}/>

                            
                    </div>
                    
                    <label htmlFor='user'>El cambio es: {money}</label>
                </div>
            </div>

            {/*Impresion para la divisa 2*/}
            <div>
                    <label htmlFor="user">Divisa 2</label>
                    <label htmlFor="user"> {divisaS}</label>

            </div>

            {/*DropDown Menu para la divisa 2*/}
            <select value={divisaS} onChange={onChangeDivisaS}>

                <option value=""> </option>

                <option value="MXN">MXN</option>

                <option value="USD">USD</option>

                <option value="EUR">EUR</option>

                <option value="BTC">BTC</option>

                <option value="ETH">ETH</option>

                <option value="DOGE">DOGE</option>             

            </select>


    </>
    )
}