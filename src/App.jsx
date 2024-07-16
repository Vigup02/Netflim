import { Outlet } from "react-router-dom";
import s from "./style.module.css";
import Header from "./components/Header/Header";



function App() {
    return (
      <div className="App">  
        <Header /> 
        <div className={s.outlet_container}>
          <Outlet />
        </div>
      </div>
    );
  }

  export default App;