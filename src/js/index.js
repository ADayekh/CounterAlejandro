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
let memory = null;

switch (true){
 case (counter >= 0 && string == "ascendente"):
        intervalID = setInterval(() =>  {
             counter ++;
             app.render(<SecondCounter second = {counter} />)}, 1000);
        break;

case (counter > 0 && string == "descendente"):
   intervalID = setInterval(() =>  {
            let cuenta = counter--;
            if (cuenta > -1)
            app.render(<SecondCounter second = {counter} />) }, 1000);
         break;
default:
    alert("Error en la declaración de número o función") 
} 

const stopcounter = () => {
    memory = counter;
    clearInterval (intervalID);
    console.log (memory); 
}

const continuecounter = () => {
  intervalID=  setInterval(() =>  {
         app.render(<SecondCounter second = {memory} />)
        counter = memory++}, 1000);
        
}
const restartcounter = () => {
    counter = 0;
    clearInterval (intervalID)
    intervalID =  setInterval(() =>  {
        app.render(<SecondCounter second = {counter} />)
       counter++}, 1000);
      
}
export {stopcounter,continuecounter,restartcounter};


