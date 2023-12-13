import mainMap from "../property/Class.js";
import { circle } from "./highlight.js";
export function movePawn(el,isWhite){
    let pos=el.id;
    var row = parseInt(pos.charAt(1));
    var col = pos.charAt(0);
    var moves = [];

    // Define a function to check if a square is empty

    if (isWhite) {
        // Check the square in front
        var forwardSquare = col + (row + 1);
        if (row < 8) {
            moves.push(forwardSquare);

            // Check for initial two-square move
            if (row === 2) {
                moves.push(col + (row + 2));
            }
        }

        // Check for diagonal captures
        
    } else {
        // Check the square in front
        var forwardSquare = col + (row - 1);
        if (row > 1) {
            moves.push(forwardSquare);

            // Check for initial two-square move
            if (row === 7) {
                moves.push(col + (row - 2));
            }
        }

        // Check for diagonal captures
        // var leftDiagonal = String.fromCharCode(col.charCodeAt(0) - 1) + (row - 1);
        // var rightDiagonal = String.fromCharCode(col.charCodeAt(0) + 1) + (row - 1);

        // if (col.charCodeAt(0) > 97 && row > 1) {
        //     moves.push(leftDiagonal);
        // }

        // if (col.charCodeAt(0) < 104 && row > 1) {
        //     moves.push(rightDiagonal);
        // }
    }
    // const a=[];
    // moves.forEach(el=> {
    //     console.log(mainMap.filter(square => square.id === el));
    // })
      
    function findSquaresWithID(squares, id) {
        return squares.flatMap(row => row.filter(sq => sq.id === id));
    }
    
    // Array to store found squares
    const foundSquares = moves.flatMap(id => findSquaresWithID(mainMap, id));
    // console.log(foundSquares);
    
    circle(foundSquares,el);
    for (let i = 0; i < moves.length; i++) {
        console.log(moves[i] + " ");
    }
}

















// function pawnMovement(pos, isWhite) {
//     var row = parseInt(pos.charAt(1));
//     var col = pos.charAt(0);
//     var moves = [];

//     // Define a function to check if a square is empty
//     function isEmpty(square) {
//         var element = document.getElementById(square);
//         return element.innerHTML === '';
//     }

//     if (isWhite) {
//         // Check the square in front
//         var forwardSquare = col + (row + 1);
//         if (row < 8 && isEmpty(forwardSquare)) {
//             moves.push(forwardSquare);

//             // Check for initial two-square move
//             if (row === 2 && isEmpty(col + (row + 2))) {
//                 moves.push(col + (row + 2));
//             }
//         }

//         // Check for diagonal captures
//         var leftDiagonal = String.fromCharCode(col.charCodeAt(0) - 1) + (row + 1);
//         var rightDiagonal = String.fromCharCode(col.charCodeAt(0) + 1) + (row + 1);

//         if (col.charCodeAt(0) > 97 && row < 8 && !isEmpty(leftDiagonal) && !isSameColor(leftDiagonal, isWhite)) {
//             moves.push(leftDiagonal);
//         }

//         if (col.charCodeAt(0) < 104 && row < 8 && !isEmpty(rightDiagonal) && !isSameColor(rightDiagonal, isWhite)) {
//             moves.push(rightDiagonal);
//         }
//     } else {
//         // Check the square in front
//         var forwardSquare = col + (row - 1);
//         if (row > 1 && isEmpty(forwardSquare)) {
//             moves.push(forwardSquare);

//             // Check for initial two-square move
//             if (row === 7 && isEmpty(col + (row - 2))) {
//                 moves.push(col + (row - 2));
//             }
//         }

//         // Check for diagonal captures
//         var leftDiagonal = String.fromCharCode(col.charCodeAt(0) - 1) + (row - 1);
//         var rightDiagonal = String.fromCharCode(col.charCodeAt(0) + 1) + (row - 1);

//         if (col.charCodeAt(0) > 97 && row > 1 && !isEmpty(leftDiagonal) && !isSameColor(leftDiagonal, isWhite)) {
//             moves.push(leftDiagonal);
//         }

//         if (col.charCodeAt(0) < 104 && row > 1 && !isEmpty(rightDiagonal) && !isSameColor(rightDiagonal, isWhite)) {
//             moves.push(rightDiagonal);
//         }
//     }
//     changeColor(moves,pos);

//     for (let i = 0; i < moves.length; i++) {
//         console.log(moves[i] + " ");
//     }

// }