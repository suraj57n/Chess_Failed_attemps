"use strict";
import { circle } from "./highlight.js";
import mainMap from "../property/Class.js";
export function queenMovement(obj,isWhite) {
    let pos=obj.id;
    var row = parseInt(pos.charAt(1));
    var col = pos.charAt(0);
    var arr = [];

    // Horizontal and vertical movements (similar to rook)
    for (let i = col.charCodeAt(0) - 1; i >= 'a'.charCodeAt(0); i--) {
        const tempPlace =document.getElementById(String.fromCharCode(i) + row);
        if(tempPlace.innerHTML.includes("src")) {
            
            break;
        }
        arr.push(String.fromCharCode(i) + row);
    }
    for (let i = col.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
        const tempPlace =document.getElementById(String.fromCharCode(i) + row);

        if(tempPlace.innerHTML.includes("src")) {
            
            break;
        }
        arr.push(String.fromCharCode(i) + row);
    }
    for (let i = row - 1; i >= 1; i--) {
        const tempPlace =document.getElementById(col + i);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(col + i);
    }
    for (let i = row + 1; i <= 8; i++) {
        const tempPlace =document.getElementById(col + i);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(col + i);
    }

    // Diagonal movements (similar to bishop)
     // Move diagonally (up-right)
     for (let i = row + 1, j = col.charCodeAt(0) + 1; i <= 8 && j <= 'h'.charCodeAt(0); i++, j++) {
        const tempPlace =document.getElementById(String.fromCharCode(j) + i);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(String.fromCharCode(j) + i);
    }

    // Move diagonally (up-left)
    for (let i = row + 1, j = col.charCodeAt(0) - 1; i <= 8 && j >= 'a'.charCodeAt(0); i++, j--) {
        const tempPlace =document.getElementById(String.fromCharCode(j) + i);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(String.fromCharCode(j) + i);
    }

    // Move diagonally (down-right)
    for (let i = row - 1, j = col.charCodeAt(0) + 1; i >= 1 && j <= 'h'.charCodeAt(0); i--, j++) {
        const tempPlace =document.getElementById(String.fromCharCode(j) + i);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(String.fromCharCode(j) + i);
    }

    // Move diagonally (down-left)
    for (let i = row - 1, j = col.charCodeAt(0) - 1; i >= 1 && j >= 'a'.charCodeAt(0); i--, j--) {
        const tempPlace =document.getElementById(String.fromCharCode(j) + i);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(String.fromCharCode(j) + i);
    }
    function findSquaresWithID(squares, id) {
        return squares.flatMap(row => row.filter(sq => sq.id === id));
    }
    
    // Array to store found squares
    const foundSquares = arr.flatMap(id => findSquaresWithID(mainMap, id));
    // console.log(foundSquares);
    
    circle(foundSquares,obj);

}