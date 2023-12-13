"use strict";
import {addPawnPieceToObject}from './exportFunction.js';
import { otherData } from './exportFunction.js';
import {pawnMove} from './pawnFunction.js';
class Square{
    constructor() {
        this.color = undefined;
        this.isPiece = undefined;
        this.id = undefined;
        this.pieceColor = undefined;
        this.piece = undefined;
    }
};
const mainMap = [];
for (let i = 8; i > 0; i--) {
    let row = [];
    for (let j = 'a'.charCodeAt(0); j <= 'h'.charCodeAt(0); j++) {
        const square=new Square();
        let id=String.fromCharCode(j) + i;
        square.id=id;
        if((i+j)%2==0)
        {
            square.color="#769656";
        }
        else{
            square.color="#EEEED2";
        }
        row.push(square);
    }
    mainMap.push(row);
}
// mainMap.forEach(function(insiderArray){
//     insiderArray.forEach(function(obj){
//         //assigning pawn in board
//        obj.isPiece=addPawnPieceToObject(obj);
//     })
    
// })
// mainMap.forEach(function(insiderArray){
//     insiderArray.forEach(function(obj){
//         const a=addPawnPieceToObject(obj);
//         obj.isPiece=a[0];
//         obj.pieceColor=a[1];
//         obj.piece=a[2];
//         console.log(a);
//     })
// })
mainMap.forEach(function (insiderArray) {
    insiderArray.forEach(function (obj) {
        const data = addPawnPieceToObject(obj);
        if (data) {
            // Assuming obj is mutable and properties aren't read-only
            obj.isPiece = data[0];
            // obj.pieceColor = data[1];
            // obj.piece = data[2];
            // console.log(obj,data);

        } else {
            // console.log("Error occurred");
        }
    });
});
// mainMap.forEach(function(el){
//     el.forEach(function(i){
//         const od=otherData(i);
//        console.log(od);
//        if(od){
//         [i.piece, i.pieceColor] = od;
//        console.log(i);}
//        else{
//         console.log("Error occurred");
//        }
//     })
// })
mainMap.forEach(function(el) {
    el.forEach(function(i) {
      const od = otherData(i);
      i.piece=od.c;
      i.pieceColor=od.b;
    //   if (od.length > 0) {
    //     [i.piece, i.pieceColor] = od;
    //     console.log(i);
    //   } else {
    //     console.error("Error occurred: Invalid data from otherData", i);
    //   }
    // console.log(i);
    });
  });
import * as render from './initialMapping.js';
render.renderUI(mainMap);
export default mainMap;