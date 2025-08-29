import React from "react";
import Nav from "./components/Nav";
import Main from "./Main";  // import your Main.js

function App() {
  return (
    <>
      <Nav />
      <Main />  {/* This handles all routes */}
    </>
  );
}

export default App;
