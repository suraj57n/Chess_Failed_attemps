var chessPieces = {
    "\u2656": "&#9814;", // White Rook
    "\u2657": "&#9815;", // White Bishop
    "\u2658": "&#9816;", // White Knight
    "\u2654": "&#9812;", // White King
    "\u2655": "&#9813;", // White Queen
    "\u2659": "&#9817;", // White Pawn
    "\u265C": "&#9820;", // Black Rook
    "\u265D": "&#9821;", // Black Bishop
    "\u265E": "&#9822;", // Black Knight
    "\u265A": "&#9818;", // Black King
    "\u265B": "&#9819;", // Black Queen
    "\u265F": "&#9823;" ,
    "" :"&nbsp;"// Black Pawn
};

console.log(chessPieces["\u2656"]+"  "+"\u2656")

//Logic when any box is touched or clicked
var pieces = document.querySelectorAll(".box");
// Attach event listeners to all elements with the class ".box"
for (let piece of pieces) {
    piece.addEventListener("click", handlePieceClick);
    piece.addEventListener("touchstart", handlePieceClick);
}
// Handle piece clicks or touches

// gameEnd=false;
// while(!gameEnd){
//     var pieces = document.querySelectorAll(".box");
// // Attach event listeners to all elements with the class ".box"
// for (let piece of pieces) {
//     piece.addEventListener("click", handlePieceClick);
//     piece.addEventListener("touchstart", handlePieceClick);
// }
// }

var mach=document.getElementById("a2");
var m2=document.getElementById("a1");
var Piece=m2.innerHTML;
m2.innerHTML=mach.innerHTML;
mach.innerHTML=Piece;


function handlePieceClick(event) {
    let pieceText = event.target.innerHTML;
    let pos=event.target.id;
    // console.log(pieceText + "abhi touch kara");
  
    switch (true) {
        case pieceText === "\u2656": // White rook
            console.log("White rook touched");
            rookMovement(pos);
            break;
        case pieceText === "\u2657": // White bishop
            console.log("White bishop touched");
            bishopMovement(pos);
            break;
        // Add cases for other white pieces here

        case pieceText === "\u265C": // Black rook
            console.log("Black rook touched");
            rookMovement(pos);
            break;
        case pieceText === "\u265D": // Black bishop
            console.log("Black bishop touched");
            bishopMovement(pos);
            break;
        // Add cases for other black pieces here

        case pieceText === "\u265E": // Black knight
            console.log("Black knight touched");
            knightMovement(pos);
            break;
        case pieceText === "\u2658": // White knight
            console.log("White knight touched");
            knightMovement(pos);
            break;

        case pieceText === "\u2659": // White pawn
            console.log("White pawn touched");
            pawnMovement(pos, true);
            break;
        case pieceText === "\u265F": // Black pawn
            console.log("Black pawn touched");
            pawnMovement(pos, false);
            break;

        case pieceText === "\u2654": // White king
            console.log("White king touched");
            kingMovement(pos);
            break;
        case pieceText === "\u265A": // Black king
            console.log("Black king touched");
            kingMovement(pos);
            break;

        case pieceText === "\u2655": // White queen
            console.log("White queen touched");
            queenMovement(pos);
            break;
        case pieceText === "\u265B": // Black queen
            console.log("Black queen touched");
            queenMovement(pos);
            break;

        default:
            console.log("Empty box touched");
            break;
    }
}





//rook movement



function rookMovement(pos) {
    var row = parseInt(pos.charAt(1));
    var col = pos.charAt(0);
    var arr = [];

    // Move horizontally (left)
    for (let i = col.charCodeAt(0) - 1; i > 'a'.charCodeAt(0); i--) {
        // arr.push(String.fromCharCode(i) + row);
        var pl=String.fromCharCode(i)+row;
        let tempPlace=document.getElementById(pl);
        if(tempPlace.innerHTML=="")
        {
            arr.push(String.fromCharCode(i) + row);
        }
        else{
            break;
        }
    }

    // Move horizontally (right)
    for (let i = col.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
        // arr.push(String.fromCharCode(i) + row);
        var pl=String.fromCharCode(i)+row;
        let tempPlace=document.getElementById(pl);
        if(tempPlace.innerHTML=="")
        {
            arr.push(String.fromCharCode(i) + row);
        }
        else{
            break;
        }
    }

    // Move vertically (up)
    for (let i = row - 1; i >= 1; i--) {
        // arr.push(col + i);
        var pl=col+i;
        let tempPlace=document.getElementById(pl);
        if(tempPlace.innerHTML=="")
        {
            arr.push(col+i);
        }
        else{
            break;
        }
    }

    // Move vertically (down)
    for (let i = row + 1; i <= 8; i++) {
        var pl=col+i;
        let tempPlace=document.getElementById(pl);
        if(tempPlace.innerHTML=="")
        {
            arr.push(col+i);
        }
        else{
            break;
        }
    }
    for(let i=0;i<arr.length;i++) {
        console.log(arr[i]+" ");
    }
    changeColor(arr,pos);
}


//bishop movement




function bishopMovement(pos) {
    var row = parseInt(pos.charAt(1));
    var col = pos.charAt(0);
    var arr = [];

    // Move diagonally (up-right)
    for (let i = row + 1, j = col.charCodeAt(0) + 1; i <= 8 && j <= 'h'.charCodeAt(0); i++, j++) {
        var tempPlace=document.getElementById(String.fromCharCode(j)+i);
        if(tempPlace.innerHTML=="")
        {
            arr.push(String.fromCharCode(j) + i);
        }
        else{
            break;
        }
    }

    // Move diagonally (up-left)
    for (let i = row + 1, j = col.charCodeAt(0) - 1; i <= 8 && j >= 'a'.charCodeAt(0); i++, j--) {
        var tempPlace=document.getElementById(String.fromCharCode(j)+i);
        if(tempPlace.innerHTML=="")
        {
            arr.push(String.fromCharCode(j) + i);
        }
        else{
            break;
        }
    }

    // Move diagonally (down-right)
    for (let i = row - 1, j = col.charCodeAt(0) + 1; i >= 1 && j <= 'h'.charCodeAt(0); i--, j++) {
        var tempPlace=document.getElementById(String.fromCharCode(j)+i);
        if(tempPlace.innerHTML=="")
        {
            arr.push(String.fromCharCode(j) + i);
        }
        else{
            break;
        }
    }

    // Move diagonally (down-left)
    for (let i = row - 1, j = col.charCodeAt(0) - 1; i >= 1 && j >= 'a'.charCodeAt(0); i--, j--) {
        var tempPlace=document.getElementById(String.fromCharCode(j)+i);
        if(tempPlace.innerHTML=="")
        {
            arr.push(String.fromCharCode(j) + i);
        }
        else{
            break;
        }
    }
    for(let i=0;i<arr.length;i++) {
        console.log(arr[i]+" ");
    }
    changeColor(arr,pos);
}

//color change



function changeColor(ids,pos) {
    for (let i = 0; i < ids.length; i++) {
        var element = document.getElementById(ids[i]);
        if (element.innerHTML==='') {
            element.classList.add("touch"); // Add "touch" class unconditionally
        }
        else if (element.innerHTML !== '') {
                break; // Stop the loop when a non-empty element is encountered
            }
    }
    let boxes = document.querySelectorAll(".box");
    var movepiece=document.querySelectorAll(".touch");
    for(let i=0;i<movepiece.length;i++)
    {
        movepiece[i].addEventListener("touchstart",() => {
            // if(!isSameColor(movepiece[i].id,pos))
            // {
            //     capture(pos,movepiece[i].id);
            // }
            // else{
                move(pos,movepiece[i].id)
                return;
            // }
        });
        movepiece[i].addEventListener("click",() => {
            // if(!isSameColor(movepiece[i].id,pos))
            // {
            //     capture(pos,movepiece[i].id);
            // }
            // else{
                move(pos,movepiece[i].id);
            // }
        });
    } 
for (let box of boxes) {
    box.addEventListener("click", (event) => {
        for (let i = 0; i < ids.length; i++) {
            var element = document.getElementById(ids[i]);
            if (element) {
                element.classList.remove("touch");
            }
        }
    });
}

    for (let i = 0; i < ids.length; i++) {
        console.log(ids[i] + " ");
    }
}

// function changeColor(ids, pos) {
//     for (let i = 0; i < ids.length; i++) {
//       var element = document.getElementById(ids[i]);
  
//       if (element.innerHTML === '') {
//         element.classList.add("touch");
//       } else {
//         break;
//       }
//     }
  
//     let boxes = document.querySelectorAll(".box");
//     var movePiece = document.querySelectorAll(".touch");
  
//     for (let i = 0; i < movePiece.length; i++) {
//       movePiece[i].addEventListener("touchstart", () => {
//         handleMoveOrCapture(pos, movePiece[i].id);
//       });
  
//       movePiece[i].addEventListener("click", () => {
//         handleMoveOrCapture(pos, movePiece[i].id);
//       });
//     }
  
//     for (let box of boxes) {
//       box.addEventListener("click", (event) => {
//         event.target.classList.remove("touch");
//       });
//     }
  
//     for (let i = 0; i < ids.length; i++) {
//       console.log(ids[i] + " ");
//     }
//   }
  
//   function handleMoveOrCapture(pos, targetId) {
//     if (!isSameColor(targetId, pos)) {
//       capture(pos, targetId);
//     } else {
//       move(pos, targetId);
//     }
//   }
  
//knight movement


function knightMovement(position) {
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
            var targetElement = document.getElementById(newPosition);
            if (targetElement.innerHTML === '') {
                moves.push(newPosition);
            }
        }
    }
    for(let i=0;i<moves.length;i++) {
        console.log(moves[i]+" ");
    }
    changeColor(moves,position);
}



//king movements



function kingMovement(pos) {
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
            var targetElement = document.getElementById(newPosition);
            if (targetElement && targetElement.innerHTML === '') {
                moves.push(newPosition);
            }
        }
    }
    for(let i=0;i<moves.length;i++) {
        console.log(moves[i]+" ");
    }
    changeColor(moves,pos);
    return moves;
}




//queen movement



function queenMovement(pos) {
    var row = parseInt(pos.charAt(1));
    var col = pos.charAt(0);
    var arr = [];

    // Horizontal and vertical movements (similar to rook)
    for (let i = col.charCodeAt(0) - 1; i >= 'a'.charCodeAt(0); i--) {
        arr.push(String.fromCharCode(i) + row);
    }
    for (let i = col.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
        arr.push(String.fromCharCode(i) + row);
    }
    for (let i = row - 1; i >= 1; i--) {
        arr.push(col + i);
    }
    for (let i = row + 1; i <= 8; i++) {
        arr.push(col + i);
    }

    // Diagonal movements (similar to bishop)
     // Move diagonally (up-right)
     for (let i = row + 1, j = col.charCodeAt(0) + 1; i <= 8 && j <= 'h'.charCodeAt(0); i++, j++) {
        arr.push(String.fromCharCode(j) + i);
    }

    // Move diagonally (up-left)
    for (let i = row + 1, j = col.charCodeAt(0) - 1; i <= 8 && j >= 'a'.charCodeAt(0); i++, j--) {
        arr.push(String.fromCharCode(j) + i);
    }

    // Move diagonally (down-right)
    for (let i = row - 1, j = col.charCodeAt(0) + 1; i >= 1 && j <= 'h'.charCodeAt(0); i--, j++) {
        arr.push(String.fromCharCode(j) + i);
    }

    // Move diagonally (down-left)
    for (let i = row - 1, j = col.charCodeAt(0) - 1; i >= 1 && j >= 'a'.charCodeAt(0); i--, j--) {
        arr.push(String.fromCharCode(j) + i);
    }
    for(let i=0;i<arr.length;i++) {
        console.log(arr[i]+" ");
    }
    changeColor(arr,pos);

}

//pawn movement




function pawnMovement(pos, isWhite) {
    var row = parseInt(pos.charAt(1));
    var col = pos.charAt(0);
    var moves = [];

    // Define a function to check if a square is empty
    function isEmpty(square) {
        var element = document.getElementById(square);
        return element.innerHTML === '';
    }

    if (isWhite) {
        // Check the square in front
        var forwardSquare = col + (row + 1);
        if (row < 8 && isEmpty(forwardSquare)) {
            moves.push(forwardSquare);

            // Check for initial two-square move
            if (row === 2 && isEmpty(col + (row + 2))) {
                moves.push(col + (row + 2));
            }
        }

        // Check for diagonal captures
        var leftDiagonal = String.fromCharCode(col.charCodeAt(0) - 1) + (row + 1);
        var rightDiagonal = String.fromCharCode(col.charCodeAt(0) + 1) + (row + 1);

        if (col.charCodeAt(0) > 97 && row < 8 && !isEmpty(leftDiagonal) && !isSameColor(leftDiagonal, isWhite)) {
            moves.push(leftDiagonal);
        }

        if (col.charCodeAt(0) < 104 && row < 8 && !isEmpty(rightDiagonal) && !isSameColor(rightDiagonal, isWhite)) {
            moves.push(rightDiagonal);
        }
    } else {
        // Check the square in front
        var forwardSquare = col + (row - 1);
        if (row > 1 && isEmpty(forwardSquare)) {
            moves.push(forwardSquare);

            // Check for initial two-square move
            if (row === 7 && isEmpty(col + (row - 2))) {
                moves.push(col + (row - 2));
            }
        }

        // Check for diagonal captures
        var leftDiagonal = String.fromCharCode(col.charCodeAt(0) - 1) + (row - 1);
        var rightDiagonal = String.fromCharCode(col.charCodeAt(0) + 1) + (row - 1);

        if (col.charCodeAt(0) > 97 && row > 1 && !isEmpty(leftDiagonal) && !isSameColor(leftDiagonal, isWhite)) {
            moves.push(leftDiagonal);
        }

        if (col.charCodeAt(0) < 104 && row > 1 && !isEmpty(rightDiagonal) && !isSameColor(rightDiagonal, isWhite)) {
            moves.push(rightDiagonal);
        }
    }
    changeColor(moves,pos);

    for (let i = 0; i < moves.length; i++) {
        console.log(moves[i] + " ");
    }

}
function isSameColor(square, isWhite) {
    var element = document.getElementById(square);
    var pieceColor = element.innerHTML.charAt(isWhite ? 0 : 1);
    return isWhite ? pieceColor !== '' : pieceColor !== pieceColor.toUpperCase();
}

// capture logic:
// get the last two digits of the inner html and check if they are above or below 18
// if above 18 they belong to white else black
// a boolean variable will store the value and if they are opposite to the player playing then caputre is possible else
// it cant move to that position unless during casteling



//caputre code


function capture(pieceId, capturePieceId) {
    // Assuming 'n' is the length of the piece's innerHTML
    const n=document.getElementById(pieceId).innerHTML.length;
    const h = document.getElementById(pieceId).innerHTML[n - 1];
    const g = document.getElementById(capturePieceId).innerHTML[n - 1];
  
    // Assuming 'isOpponentPiece' checks if two pieces are opponents
    if (!isOpponentPiece(h, g)) {
      return;
    }
  
    const hunter = document.getElementById(pieceId).innerHTML;
    const gatherer = document.getElementById(capturePieceId);
  
    gatherer.innerHTML = hunter;
    document.getElementById(pieceId).innerHTML = '';
  }
  

//check color




function check(pos) {
    return !(pos >= 'A' && pos <= 'F');
}


//evaluate check on king



function kingCheck(pos){
    checkStraight(pos);
    checkDiagonal(pos);
    checkKnight(pos);
    if(checkStraight(pos) || checkDiagonal(pos) || checkKnight(pos))
    {
        return true;
    }
    return false;
}

// check conditions of checkmate on king


function checkMate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (kingCheck(arr[i]) === true) {
            return true;
        }
    }
    return false;
}

// check vertical and diagonal checks on king


function checkStraight(pos) {
    let row = parseInt(pos.charAt(pos.length - 1));
    let col = pos.charAt(0);

    let threatPositions = [];

    // Check horizontally (left)
    for (let i = col.charCodeAt(0) - 1; i >= 'a'.charCodeAt(0); i--) {
        let square = String.fromCharCode(i) + row;
        if(document.getElementById(square).innerHTML==""){
            continue;
        }
        else{
            let p=document.getElementById(square).innerHTML;
            if(check(p.charAt(p.length-1)!=check(q.charAt(q.length-1))))
            {
                return true;
            }
            else{
                return false;
            }
        }
    }

    // Check horizontally (right)
    for (let i = col.charCodeAt(0) + 1; i <= 'h'.charCodeAt(0); i++) {
        let square = String.fromCharCode(i) + row;
        if(document.getElementById(square).innerHTML==""){
            continue;
        }
        else{
            let p=document.getElementById(square).innerHTML;
            if(check(p.charAt(p.length-1)!=check(q.charAt(q.length-1))))
            {
                return true;
            }
            else{
                return false;
            }
        }
    }

    // Check vertically (up)
    for (let i = row - 1; i >= 1; i--) {
        let square = col + i;
        if(document.getElementById(square).innerHTML==""){
            continue;
        }
        else{
            let p=document.getElementById(square).innerHTML;
            if(check(p.charAt(p.length-1)!=check(q.charAt(q.length-1))))
            {
                return true;
            }
            else{
                return false;
            }
        }
    }

    // Check vertically (down)
    for (let i = row + 1; i <= 8; i++) {
        let square = col + i;
        if(document.getElementById(square).innerHTML==""){
            continue;
        }
        else{
            let p=document.getElementById(square).innerHTML;
            if(check(p.charAt(p.length-1)!=check(q.charAt(q.length-1))))
            {
                return true;
            }
            else{
                return false;
            }
        }
    }

    // Now you have the positions where threats are found
    // You can analyze them further as needed
}

function isThreatened(square) {
    // Implement your logic to check if a square is under threat
    // You might consider the positions of opposing pieces
    // Return true if the square is threatened, false otherwise
}

//check diagonal checks on king



function checkDiagonal(pos) {
    const row = parseInt(pos.charAt(pos.length - 1));
    const col = pos.charAt(0);
    
    const directions = [
        { row: -1, col: -1 }, // Up-left
        { row: -1, col: 1 },  // Up-right
        { row: 1, col: -1 },  // Down-left
        { row: 1, col: 1 }    // Down-right
    ];

    for (const direction of directions) {
        let currentRow = row + direction.row;
        let currentCol = col.charCodeAt(0) + direction.col - 'a'.charCodeAt(0);

        while (isValidPosition(currentRow, currentCol)) {
            const square = String.fromCharCode('a'.charCodeAt(0) + currentCol) + currentRow;
            const piece = document.getElementById(square).innerHTML;

            if (piece) {
                if (isOpponentPiece(piece)) {
                    return true; // Threat detected
                } else {
                    break;
                }
            }

            currentRow += direction.row;
            currentCol += direction.col;
        }
    }

    return false; // No threats detected
}


// check if the position is valid on king


function isValidPosition(row, col) {
    return row >= 1 && row <= 8 && col >= 0 && col <= 7;
}



// check if the piece is different color or not



function isOpponentPiece(piece,q) {
    const currentPlayer = q.charAt(q.length - 1);
    const pieceColor = piece.charAt(piece.length - 1);
    return currentPlayer !== pieceColor;
}



//check if the king has check on knight



function checkKnight(pos) {
    const row = parseInt(pos.charAt(pos.length - 1));
    const col = pos.charAt(0);

    const knightOffsets = [
        { row: -2, col: -1 }, { row: -2, col: 1 },
        { row: -1, col: -2 }, { row: -1, col: 2 },
        { row: 1, col: -2 }, { row: 1, col: 2 },
        { row: 2, col: -1 }, { row: 2, col: 1 }
    ];

    for (const offset of knightOffsets) {
        const targetRow = row + offset.row;
        const targetCol = col.charCodeAt(0) - 'a'.charCodeAt(0) + offset.col;

        if (isValidPosition(targetRow, targetCol)) {
            const targetSquare = String.fromCharCode('a'.charCodeAt(0) + targetCol) + targetRow;
            const piece = document.getElementById(targetSquare).innerHTML;

            if (piece && isOpponentPiece(piece)) {
                return true; // Threat detected
            }
        }
    }

    return false; // No threats detected
}

// Define isValidPosition and isOpponentPiece functions as mentioned in the previous example




//promotion logic and code



function promotion(pos, color) {
    if (color == false) {
        let boxes = document.getElementsByClassName("blackPromotion");
        boxes.classList.add("vis");
        for (let i = 0; i < boxes.length; i++) {
            let pboxes = boxes[i].getElementsByClassName("pbox");
            pboxes[i].addEventListener("click", (event) => {
                pos.innerHTML = event.target.innerHTML; // Set the innerHTML of pos to the clicked pbox content
            });
// Make the corresponding blackPromotion box visible
        }
        boxes.classList.remove("vis");
    }
    else {
        let boxes = document.getElementsByClassName("whitePromotion");
        boxes.classList.add("vis");
        for (let i = 0; i < boxes.length; i++) {
            let pboxes = boxes[i].getElementsByClassName("pbox");
            pboxes[i].addEventListener("click", (event) => {
                pos.innerHTML = event.target.innerHTML; // Set the innerHTML of pos to the clicked pbox content
            });

            boxes[i].classList.add("vis"); // Make the corresponding whitePromotion box visible
        }
        boxes.classList.remove("vis");
    }
}



/// moving pieces
function move(initial, final) {
    const piece = document.getElementById(initial).innerHTML;
  
    // Look up the corresponding HTML Unicode
    const htmlUnicode = chessPieces[piece];
  
    // Set the value of the final element to the HTML Unicode
    document.getElementById(final).innerHTML = htmlUnicode;
  
    // Clear the initial innerHTML
    document.getElementById(initial).innerHTML = '';
  }
  
// function move(initial, final) {
//     let f = document.getElementById(initial);
//     let l = document.getElementById(final);
  
//     // Declare 'p' as 'let' to allow reassignment
//     l.innerHTML = chessPieces[f.innerHTML];
//     console.log(l.innerHTML);// Set the content of 'final' to the content of 'initial'
//     f.innerHTML = ""; // Clear the content of 'initial'
//   }
// function move(initial, final) {
//     let f = document.getElementById(initial);
//     let l = document.getElementById(final);

//     // Create a mapping between JavaScript Unicode and HTML Unicode
//     const unicodeMapping = {
//         "\u2656": "&#9814", // White Rook
//         "\u2657": "&#9815", // White Bishop
//         "\u2658": "&#9816", // White Knight
//         "\u2654": "&#9812", // White King
//         "\u2655": "&#9813", // White Queen
//         "\u2659": "&#9817", // White Pawn
//         "\u265C": "&#9820", // Black Rook
//         "\u265D": "&#9821", // Black Bishop
//         "\u265E": "&#9822", // Black Knight
//         "\u265A": "&#9818", // Black King
//         "\u265B": "&#9819", // Black Queen
//         "\u265F": "&#9823"  // Black Pawn
//     };

//     // Get the HTML Unicode from the mapping
//     let piece = unicodeMapping[f.innerHTML];
//     console.log(unicodeMapping[f.innerHTML]);
//     l.innerHTML = String(piece); // Set the content of 'final' to the HTML Unicode
//     f.innerHTML = "";     // Clear the content of 'initial'
// }
// function move(initial, final) {
//     let f = document.getElementById(initial);
//     let l = document.getElementById(final);
  
//     let unicode = f.innerHTML; // Get the Unicode from 'initial'
//     let htmlUnicode = chessPieces[unicode]; // Look up the corresponding HTML Unicode
    
//     l.innerHTML = htmlUnicode; // Set the content of 'final' to the HTML Unicode
//     f.innerHTML = ""; // Clear the content of 'initial'
// }

// (function() {
//     const chessPieces = {
//       "\u2654": "&#9814;", // White Rook
//       "\u2657": "&#9815;", // White Bishop
//       "\u2658": "&#9816;", // White Knight
//       "\u2654": "&#9812;", // White King
//       "\u2655": "&#9813;", // White Queen
//       "\u2659": "&#9817;", // White Pawn
//       "\u265C": "&#9820;", // Black Rook
//       "\u265D": "&#9821;", // Black Bishop
//       "\u265E": "&#9822;", // Black Knight
//       "\u265A": "&#9818;", // Black King
//       "\u265B": "&#9819;", // Black Queen
//       "\u265F": "&#9823;"  // Black Pawn
//     };
  
//     function move(initial, final) {
//       let f = document.getElementById(initial);
//       let l = document.getElementById(final);
  
//       const p = chessPieces[f];
//       l.innerHTML = p;
//       f.innerHTML = '';
//     }
  
//     // Export the function
//     window.move = move;
//   })();
// function move(initial, final) {
//     var f = document.getElementById(initial);
//     var l = document.getElementById(final);
  
//     var unicode = f.innerHTML; // Get the Unicode from 'initial'
//     var htmlUnicode = chessPieces[unicode]; // Look up the corresponding HTML Unicode
//     l.innerHTML=htmlUnicode;
//     f.innerHTML='';// Clear the content of 'initial'
// }
function move(initial, final) {
    // Store the piece in a variable
    let piece = document.getElementById(initial).innerHTML;
  
    // Look up the corresponding HTML Unicode
    let htmlUnicode = chessPieces[piece];
    // Set the value of the final element to the HTML Unicode
    piece=0;
    // // Erase the initial innerHTML
    document.getElementById(initial).innerHTML = "";
    document.getElementById(final).innerHTML=htmlUnicode;
  }
  
