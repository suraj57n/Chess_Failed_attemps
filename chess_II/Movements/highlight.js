"use strict";
import mainMap from "../property/Class.js";
import {movePiece} from "./move.js";
export function circle(moves,ini) {
  moves.forEach(function(el){
    const box=document.getElementById(el.id);
    const ne=document.createElement("div");
    // box.innerHTML="";
    
    //empty the inner html for the code to work
    // console.log(box);
    if(!box.innerHTML.includes("src"))
    {
      box.innerHTML="";
      ne.classList.add("circle");
      box.appendChild(ne);
    }
    ne.classList.add("circle");
    box.appendChild(ne);
    
  })
  mainMap.forEach(row => {
    row.forEach(square => {
        const squareElement = document.getElementById(square.id);
        squareElement.addEventListener("click", () => {
            
            const isHighlighted = squareElement.children;
            // console.log(isHighlighted[0]);

            // Check for a specific class in children
            let isClassFound = false;
            let pis=false;
           if(square.isPiece){
            console.log("yes");
           }
           else{
            moves.forEach(move => {
              const a=document.getElementById(move.id);
              a.innerHTML="<img>";
              movePiece(square,ini);
              // console.log(ini);
              // console.log(square);
             });
           }


            // for (let i = 0; i < isHighlighted.length; i++) {
            //     if (isHighlighted[i].classList.contains('circle')) {
            //         isClassFound = true;
            //         break;
            //     }
            //     if (isHighlighted[i].classList.contains('src')) {
            //       pis = true;
            //       break;
            //   }
            // }

            // if (isClassFound) {
            //     console.log("yes");
            //     // Perform operations if the class 'circle' is found
            // }
            // else{
            //   if(!pis)
            //   {
            //     console.log("pis nhi mila")
            //   }
            //   else{
            //     console.log("mila");
            //   }
            // }
            // if (isHighlighted) {
            //     moves.forEach(move => {
            //         const box = document.getElementById(move.id);
            //         box.innerHTML = "<img>";
            //     });
            // }
        });
    });
});
}