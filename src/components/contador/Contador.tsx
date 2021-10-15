import { useState } from "react";
import "./style.css";

export const Counter = () => {
  const [valor, setValor] = useState(10);

  const acumular = (numero: number) => {
    setValor(numero + valor);
  };

  return (
    <div>
      <h3>
        Valor: <small>{valor}</small>
      </h3>
      <div className="contaniner__buttons">
        <button className="btns" onClick={() => acumular(1)}>
          +1
        </button>
        <button className="btns" onClick={() => acumular(-1)}>
          -1
        </button>
      </div>
    </div>
  );
};
