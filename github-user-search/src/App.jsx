import React from "react";
import { BrowserRouter } from "react-router-dom";
import User from "./components/user";
import Search from "./components/Search";


function App() {
  return (
    <div>
      <User />
      <Search />
     </div> 
  );
}

export default App;
