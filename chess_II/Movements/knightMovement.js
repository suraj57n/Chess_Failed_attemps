"use strict";
import mainMap from "../property/Class.js";
import { circle } from "./highlight.js";
export function knightMovement(obj,isWhite) {
    let position=obj.id;
    var row = parseInt(position.charAt(1));
    var col = position.charAt(0).charCodeAt(0) - 'a'.charCodeAt(0); // Convert column to 0-based index
    var piece=document.getElementById(position);
    var moves = [];
    
    // All possible knight move offsets
    var knightOffsets = [
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1]
    ];

    for (var offset of knightOffsets) {
        var newRow = row + offset[0];
        var newCol = col + offset[1];

        // Check if the new position is within the chessboard
        if (newRow >= 1 && newRow <= 8 && newCol >= 0 && newCol <= 7) {
            var newPosition = String.fromCharCode('a'.charCodeAt(0) + newCol) + newRow;
            var tempPlace = document.getElementById(newPosition);
            if(tempPlace.innerHTML.includes("src")) break;

        
                moves.push(newPosition);
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
