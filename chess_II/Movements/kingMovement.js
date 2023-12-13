"use strict";
import { circle } from "./highlight.js";
import mainMap from "../property/Class.js";
export function kingMovement(obj,isWhite) {
    let pos=obj.id;
    var row = parseInt(pos.charAt(1));
    var col = pos.charAt(0).charCodeAt(0) - 'a'.charCodeAt(0); // Convert column to 0-based index
    var moves = [];

    // Define all possible king move offsets (including diagonal moves)
    var kingOffsets = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], /*  K  */ [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (var offset of kingOffsets) {
        var newRow = row + offset[0];
        var newCol = col + offset[1];

        // Check if the new position is within the chessboard
        if (newRow >= 1 && newRow <= 8 && newCol >= 0 && newCol <= 7) {
            var newPosition = String.fromCharCode('a'.charCodeAt(0) + newCol) + newRow;
            var tempPlace=document.getElementById(newPosition);
            if(tempPlace.innerHTML.includes("src")) break;
            console.log(tempPlace);
                arr.push(String.fromCharCode(j) + i);
        }
    }
    function findSquaresWithID(squares, id) {
        return squares.flatMap(row => row.filter(sq => sq.id === id));
    }
    
    // Array to store found squares
    const foundSquares = moves.flatMap(id => findSquaresWithID(mainMap, id));
    console.log(foundSquares);
    
    circle(foundSquares,obj);
}