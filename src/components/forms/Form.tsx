import { useForm } from "../hooks/useForm";

export const Form = () => {
  const { email, password, form, handleOnChange } = useForm({
    email: "deymer@hotmail.com ",
    password: "123456789",
  });
  return (
    <div>
      <h1>Formularios</h1>
      <input
        className="form-control"
        placeholder="Email"
        type="text"
        value={email}
        onChange={({ target }) => handleOnChange(target.value, "email")}
      />
      <input
        className="form-control mt-2"
        placeholder="Password"
        type="text"
        value={password}
        onChange={({ target }) => handleOnChange(target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </div>
  );
};
