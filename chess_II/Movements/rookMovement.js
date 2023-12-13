"use strict";
import mainMap from "../property/Class.js";
import { circle } from "./highlight.js";
export function rookMovement(obj,isWhite) {
    let pos=obj.id;
    var row = parseInt(pos.charAt(1));
    var col = pos.charAt(0);
    var arr = [];

    // Move horizontally (left)
    for (let i = col.charCodeAt(0) - 1; i > 'a'.charCodeAt(0); i--) {
        // arr.push(String.fromCharCode(i) + row);
        var pl=String.fromCharCode(i)+row;
        let tempPlace=document.getElementById(pl);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(String.fromCharCode(i) + row);
        
    }

    // Move horizontally (right)
    for (let i = col.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
        // arr.push(String.fromCharCode(i) + row);
        var pl=String.fromCharCode(i)+row;
        let tempPlace=document.getElementById(pl);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(String.fromCharCode(i) + row);
       
    }

    // Move vertically (up)
    for (let i = row - 1; i >= 1; i--) {
        // arr.push(col + i);
        var pl=col+i;
        let tempPlace=document.getElementById(pl);
        if(tempPlace.innerHTML.includes("src")) break;
            arr.push(col+i);
    }

    // Move vertically (down)
    for (let i = row + 1; i <= 8; i++) {
        var pl=col+i;
        let tempPlace=document.getElementById(pl);
        if(tempPlace.innerHTML.includes("src")) break;
        arr.push(col+i);
    }
    for(let i=0;i<arr.length;i++) {
        console.log(arr[i]+" ");
    }
    function findSquaresWithID(squares, id) {
        return squares.flatMap(row => row.filter(sq => sq.id === id));
    }
    
    // Array to store found squares
    const foundSquares = arr.flatMap(id => findSquaresWithID(mainMap, id));
    console.log(foundSquares);
    circle(foundSquares,obj);
    
}