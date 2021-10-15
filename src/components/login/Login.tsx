import { useEffect, useReducer } from "react";

interface AuthState {
  validate: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validate: true,
  token: null,
  username: "",
  name: "",
};
type LoginPyload = {
  username: string;
  name: string;
  token: null | string;
};
type AuthAction =
  | { type: "logout" }
  | { type: "login"; payload: LoginPyload }
  | { type: "closeLoading" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        ...state,
        token: null,
        username: "",
        name: "",
      };
    case "login":
      const { name, username, token } = action.payload;
      return {
        ...state,
        validate: false,
        token,
        username,
        name,
      };
    case "closeLoading":
      return {
        ...state,
        validate: false,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validate, name, token }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "closeLoading" });
    }, 1500);
  }, []);

  if (validate) {
    return (
      <div className="alert alert-info">
        <p>Cargando...</p>
      </div>
    );
  }
  return (
    <>
      {token ? (
        <div className="alert alert-danger">
          <p>Aautenticado como {name}</p>
        </div>
      ) : (
        <div className="alert alert-danger">
          <p>No autenticado</p>
        </div>
      )}
      <div style={{ display: "flex", gap: "5px", marginBottom: "5rem" }}>
        {!token ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch({
                type: "login",
                payload: {
                  name: "Deymer",
                  username: "deymerh",
                  token: "AXD12345",
                },
              });
            }}
          >
            Iniciar sesión
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "logout" })}
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </>
  );
};
