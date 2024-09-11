//import react into the bundle
import React from "react";
import {createRoot} from "react-dom/client";
import { SecondCounter } from "./component/counter.jsx";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
const app = createRoot(document.getElementById('app'))
let number = null ;
let counter = prompt ("Escribe un número para la cuenta", number);
let string = prompt ("Escribe ascendente o descendente (Asegúrate de escribirlo bien)")
let intervalID = null;

switch (true){
 case (counter >= 0 && string == "ascendente"):
        intervalID = setInterval(() =>  {
            let cuenta1 = counter ++;
             app.render(<SecondCounter second = {cuenta1} />) }, 1000);
        break;

case (counter > 0 && string == "descendente"):
   intervalID = setInterval(() =>  {
            let cuenta2 = counter--;
            if (cuenta2 > -1)
            app.render(<SecondCounter second = {cuenta2} />) }, 1000);
         break;
default:
    alert("Error en la declaración de número o función") 
} 

const stopcounter = () => {
    clearInterval (intervalID);
}


export {stopcounter};


