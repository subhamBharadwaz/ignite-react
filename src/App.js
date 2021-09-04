import React from "react";

// Styles
import GlobalStyles from "./styles/GlobalStyles";

// Components and Pages
import Home from "./pages/Home";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
