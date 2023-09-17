import "./style.css";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./routes/Home";

export default function App() {
  return(
    <div className="App">
     
      <Navbar/>
      <Home/>
   
    </div>
  )
}
