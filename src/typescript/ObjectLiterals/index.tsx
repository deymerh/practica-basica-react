interface Person {
  name: string;
  age: number;
  address: Address;
}
interface Address {
  country: string;
  city: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    name: "Deymer",
    age: 31,
    address: {
      country: "COL",
      city: "Campo Bello",
    },
  };
  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(person, null, 0)}</pre>
      </code>
    </>
  );
};
