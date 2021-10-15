import { useUsers } from "../hooks/useUsers";
import { User as UserInterface } from "../../interfaces/reqResIn";

export const User = () => {
  const { users, pageRef, nextUsers, previousUsers } = useUsers();
  const rednerItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: UserInterface) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img
            style={{
              width: 35,
              borderRadius: 100,
            }}
            src={avatar}
            alt={`${first_name} ${last_name}`}
          />
        </th>
        <th>{`${first_name} ${last_name}`}</th>
        <th>{email}</th>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => rednerItem(user))}</tbody>
      </table>
      <div style={{ display: "flex", gap: 5, marginBottom: "2rem" }}>
        <button
          disabled={pageRef.current <= 1}
          className="btn btn-primary"
          onClick={previousUsers}
        >
          Anteriores
        </button>
        <button className="btn btn-primary" onClick={nextUsers}>
          Siguientes
        </button>
      </div>
    </>
  );
};
