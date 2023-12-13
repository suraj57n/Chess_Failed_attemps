"use strict";
function handlePieceClick(event) {
    // console.log(event.target.outerHTML);
    // // console.log(typeof pieceText);
    // const pos=event.target.parentNode.id;
    // console.log(pos);
    // const pieceText = event.target.outerHTML;
    console.log(event.target.outerHTML);
    let pos="";
    let pieceText="";
    const box=event.target;
    if(box.tagName === "IMG"){
        pos=box.parentNode.id;
        pieceText=box.outerHTML;
    }
    else{
        pos=box.id;
    }
    console.log(pos);
    // console.log(pieceText + "abhi touch kara");
//   console.log(pieceText );
//   console.log(pieceText.toString());
    const isWhite=pieceText.includes("white");
    switch (true) {
        case (pieceText.includes("rook")&&isWhite): // White rook
            console.log("White rook touched");
            
            break;
        case (pieceText.includes("bishop")&&isWhite):// White bishop
            console.log("White bishop touched");
            
            break;
        // Add cases for other white pieces here

        case (pieceText.includes("rook")&&!isWhite): // Black rook
            console.log("Black rook touched");
            break;
        case (pieceText.includes("bishop")&&!isWhite):// Black bishop
            console.log("Black bishop touched");
            break;
        // Add cases for other black pieces here

        case (pieceText.includes("knight")&&!isWhite): // Black knight
            console.log("Black knight touched");
            break;
        case (pieceText.includes("knight")&&isWhite): // White knight
            console.log("White knight touched");
            break;

        case (pieceText.includes("pawn")&&isWhite): // White pawn
            console.log("White pawn touched");
            
            break;
        case (pieceText.includes("pawn")&&!isWhite): // Black pawn
            console.log("Black pawn touched");
            
            break;

        case (pieceText.includes("king")&&isWhite): // White king
            console.log("White king touched");
            
            break;
        case (pieceText.includes("king")&&!isWhite):// Black king
            console.log("Black king touched");
            
            break;

        case (pieceText.includes("queen")&&isWhite): // White queen
            console.log("White queen touched");
            break;
        case (pieceText.includes("queen")&&!isWhite):// Black queen
            console.log("Black queen touched");
            
            break;

        default:
            console.log("Empty box touched");
            break;
    }
}
let piece=document.getElementsByClassName("square");
for(let p of piece)
{
    // p.addEventListener("click",handlePieceClick)
    p.addEventListener("click",handlePieceClick);
}