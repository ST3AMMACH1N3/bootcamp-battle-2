import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SocketProvider } from "./contexts/socketContext";
import Home from "./pages/Home";
import Other from "./pages/Other";
import "./App.css";

function App() {
  return (
    <Router>
      <SocketProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/other" component={Other} />
        </Switch>
      </SocketProvider>
    </Router>
  );
}

export default App;
