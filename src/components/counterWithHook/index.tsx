import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const valueInitialOfUser: number = 20;
  const amountToAdd: number = 1;
  const amountToSustract: number = -1;
  const { initialValue, changeInitialValue } = useCounter(valueInitialOfUser);

  return (
    <div>
      <h2>Contador con Hook</h2>
      <h3>
        Valor: <small>{initialValue}</small>
      </h3>
      <div className="contaniner__buttons">
        <button className="btn" onClick={() => changeInitialValue(amountToAdd)}>
          {amountToSustract}
        </button>
        <button
          className="btn"
          onClick={() => changeInitialValue(amountToSustract)}
        >
          +{amountToAdd}
        </button>
      </div>
    </div>
  );
};
