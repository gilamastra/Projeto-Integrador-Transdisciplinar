import logo from "./imgs/logo.png";
import "./App.css";
import { useState } from "react";
import Login from "./pages/login";
import Grades from "./pages/grades";

function App() {
   const [selectedPage, setSelectedPage] = useState("login");
   const handleClickLogin = () => {
      setSelectedPage("grades");
   };
   return (
      <div className="App">
         <header className="mb-5">
            <img src={logo} className="App-logo" alt="logo" />
         </header>
         {selectedPage === "login" ? (
            <Login onClick={handleClickLogin} />
         ) : (
            <Grades />
         )}
      </div>
   );
}

export default App;
