import { useState } from "react";

function Ostukorv() {
    const [Ostukorv, muudaOstukorvi] = useState(["element nr1","element nr2" ,4]);

    function kustutaToode(toode) {
// toode kustutamine listist

        console.log(toode)
        console.log(Ostukorv)
        const index = Ostukorv.indexOf(toode);
        console.log(index);
        Ostukorv.splice(index,1);
        console.log(Ostukorv);
        muudaOstukorvi(Ostukorv.slice());
    }

    function lisaToode(toode) {
        Ostukorv.push(toode);
        muudaOstukorvi(Ostukorv.slice());
    }

    return(
      <div>
         {Ostukorv.length > 0 && 
         <div>
          <div>Kokku on {Ostukorv.length} toodet ostukorvis</div>
         <button onClick={() => muudaOstukorvi([])}>Tühjenda</button>
         </div>
         } 
         {Ostukorv.length === 0 && <div>Ostukorv on tühi</div>}

        { Ostukorv.map(element => 
              <div>
                <div>Nimi: {element}</div>
                <div>Hind: 3</div>
                <div>Kategooria: karastusjoogid</div>
                <button onClick={() => kustutaToode(element)}>Eemalda</button>
                <button onClick={() => lisaToode(element)}>Lisa</button>
              </div>
           ) }
     </div>
        )
   }
   
   export default Ostukorv;