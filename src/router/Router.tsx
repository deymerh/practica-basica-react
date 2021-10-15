import App from "../App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
