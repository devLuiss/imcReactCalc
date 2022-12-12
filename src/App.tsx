
import { useState } from "react";
import styles from "./app.module.css";
import poweredImage from "./assets/powered.png";

import { levels, calculateImc } from './helpers/imc';

import{ GridItem } from './components/GridItem';

const App = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const handleCalculateButton = () => {
        if (heightField && weightField){


        }
        else{
            alert("Preencha todos os campos");
        }
    };
  return (
    <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={poweredImage} alt="" width={150}  />
      </div>
      </header>   
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1> Calcule seu IMC </h1>
          <p>Criado no século 19 pelo matemático Lambert Quételet, o Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal. Ele aponta se o peso está adequado ou se está abaixo ou acima do peso</p>
          
          <input type="number"
          placeholder="Digite sua altura Ex: 1.5 "
          value={heightField > 0 ? heightField : ""}
          onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
        
        <input type="number"
          placeholder="Digite seu peso Ex: 60"
          value={weightField > 0 ? weightField : ""}
          onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
          </div>
        <div className={styles.rightside}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}  />
            ))}

          </div>
          </div>

        </div>

    </div>
  );
};

export default App;