// 'use strict';
// import {addPawnPieceToObject}from './exportFunction.js';
import { pawnMove } from './pawnFunction.js';
const renderUI=function(squares){
    // select main container from markup
    const mainContainer=document.querySelector(".main-container");
    //create squares
    let counter=8;
    squares.forEach(i => {
        //creating ranks for squares
        let rank=document.createElement("div");
        rank.classList.add("rank");
        mainContainer.appendChild(rank);
        //adding rank ids
        rank.setAttribute("id",counter--);
        i.forEach(el=>{
            const square=document.createElement("div");
            //adding piece to each square
            //creating individual square for all files
            square.style.background=el.color;
            square.classList.add("sq-width");
            square.setAttribute("id",el.id);
            rank.appendChild(square);
            square.classList.add("file-"+el.id[0]);
            const imgElement=document.createElement("img");
            if(el.isPiece)
            {
                imgElement.setAttribute("src",el.isPiece);
            }
            square.appendChild(imgElement);
            el.renderedHTML=square;
            // event listeners
        })
    });
    pawnMove(squares);
    
}
export{renderUI};