import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Menüü from './components/Menüü';
import Avaleht from './Pages/Avaleht';
import Ostukorv from './Pages/Ostukorv';
import AdminHome from './Pages/AdminHome';
import HaldaTooteid from './Pages/HaldaTooteid';
import LisaToode from './Pages/LisaToode';



function App() {
 return (
    <div>
      <Menüü />

       <Routes>
        {/* localhost:3000/ */}
        <Route path='/' exact element={ <Avaleht /> } />
        {/*localhost:3000/checkout */}
        <Route path='/checkout' exact element={ <Ostukorv /> } />
        <Route path='/admin' exact element={ <AdminHome /> } />
        <Route path='/admin/lisa-toode' exact element={ <LisaToode /> } />
        <Route path='/admin/halda-tooteid' exact element={ <HaldaTooteid /> } />


       </Routes>
       
  </div> 
  
  );
}

export default App;

