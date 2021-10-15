export const TypeBasics = () => {
  const name = "Deymer";
  const isActive = true;
  const poderes: string[] = ["Orar", "Cantar", "Predicar", "Evagelizar"];
  return (
    <>
      <h3>Tipos básico</h3>
      <p>
        {name} - {isActive ? "esta activo" : "no esta activo"}
      </p>
      <p>
        <strong>Poderes: {poderes.join(" , ")}</strong>
      </p>
    </>
  );
};
