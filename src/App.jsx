import { useState } from "react";
import "./App.css";
import UsersContainer from "./components/commonts/users/UsersContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarContainer from "./components/layout/navbar/NavBarContainer";
import FooterContainer from "./components/layout/footer/FooterContainer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBarContainer />}>
          <Route element={<FooterContainer/>}>
            <Route path="*" element={<h1>Esta ruta no existe</h1>} />
            <Route path="/" element={<UsersContainer/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
