import mainMap from "../property/Class.js";
"use strict";
export function movePiece(final, initial) {
   // console.log(mainMap);
   // console.log(final,initial);
   console.log(mainMap);
   const fin=document.getElementById(final.id);
   const ini=document.getElementById(initial.id);
 
   console.log(initial);
   console.log(final);
   const box=document.createElement("img");
   box.setAttribute("src",final.isPiece);
   console.log(final.isPiece);
   fin.appendChild(box);
   ini.innerHTML = '';
   const pi=initial.isPiece;
   const pc=initial.pieceColor;
   const pn=initial.piece;
   initial.piece=false;
   initial.pieceColor=false;
   initial.isPiece=false;
   final.piece=pn;
   final.isPiece=pi;
   final.pieceColor=pc;
   // console.log(initial);
   console.log(initial);
   console.log(final);
   // console.log(final);
   // console.log(mainMap);
}