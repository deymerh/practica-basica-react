import { TypeBasics } from "./typescript/TypeBasics/index";
import { ObjectLiterals } from "./typescript/ObjectLiterals/index";
import { Functions } from "./typescript/Functions/index";
import { Counter } from "./components/contador/Contador";
import { CounterWithHook } from "./components/counterWithHook/index";
import "./App.css";
import { Login } from "./components/login/Login";
import { User } from "./components/user/User";
import { Form } from "./components/forms/Form";

function App() {
  return (
    <div className="App">
      <h2>React with TypeScript</h2>
      <Form />
      <TypeBasics />
      <ObjectLiterals />
      <Functions />
      <Counter />
      <CounterWithHook />
      <Login />
      <User />
    </div>
  );
}

export default App;
