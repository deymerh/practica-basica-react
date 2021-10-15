export const Functions = () => {
  const sumar = (number1: number, number2: number): number => {
    return number1 + number2;
  };
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es {sumar(1, 5)}</span>
    </>
  );
};
