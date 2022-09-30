import NavBar from "./components/NavBar";
import 'animate.css';
import { Outlet } from "react-router-dom";

function App() {
  
 
  return (
    <>
    
      <NavBar />
      <main className="container text-center mt-5">
           
          <Outlet />
      </main>
       
    </>
  );
}

export default App;
