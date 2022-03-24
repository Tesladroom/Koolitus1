import { Link } from "react-router-dom";

function Menüü() {
    return (<div>
        <Link to="/">
          <button className='nupp'>Avaleht</button>
        </Link>
        <Link to="/checkout">
          <button className='nupp'>Ostukorv</button>
        </Link>
        <Link to="/admin">
          <button className='nupp'>Admin vaatesse</button>
        </Link>  
     </div>)
}

export default Menüü;
