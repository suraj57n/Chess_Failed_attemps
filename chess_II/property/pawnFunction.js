import {movePawn} from "../Movements/pawnPiece.js";
import { kingMovement } from "../Movements/kingMovement.js";
import { bishopMovement } from "../Movements/bishopMovement.js";
import { rookMovement } from "../Movements/rookMovement.js";
import { queenMovement } from "../Movements/queenMovement.js";
import { knightMovement } from "../Movements/knightMovement.js";
export function pawnMove(mainMap) {
    for (let i of mainMap) {
        i.forEach(el=>{
           let box=document.getElementById(el.id);
        //    //console.log(el); 
           box.addEventListener("click",()=>{
            let pieceText=box.innerHTML;
            // console.log(box.outerHTML);
            // //console.log(el);
            const isWhite=pieceText.includes("white");
            

            switch (true) {
                case (pieceText.includes("rook")&&isWhite): // White rook
                    console.log("White rook touched");
                    //console.log(el);
                    rookMovement(el,true);
                    break;
                case (pieceText.includes("bishop")&&isWhite):// White bishop
                    console.log("White bishop touched");
                    //console.log(el);
                    bishopMovement(el,true);
                    break;
        // Add cases for other white pieces here

                case (pieceText.includes("rook")&&!isWhite): // Black rook
                    console.log("Black rook touched");
                    //console.log(el);
                    rookMovement(el,false);
                    break;
                case (pieceText.includes("bishop")&&!isWhite):// Black bishop
                    console.log("Black bishop touched");
                    //console.log(el);
                    bishopMovement(el,false);
                    break;
        // Add cases for other black pieces here

                case (pieceText.includes("knight")&&!isWhite): // Black knight
                    console.log("Black knight touched");
                    //console.log(el);
                    knightMovement(el,false);
                    break;
                case (pieceText.includes("knight")&&isWhite): // White knight
                    console.log("White knight touched");
                    //console.log(el);
                    knightMovement(el,true);
                    break;

                case (pieceText.includes("pawn")&&isWhite): // White pawn
                    console.log("White pawn touched");
                    //console.log(el);
                    movePawn(el,true);

                    break;
                case (pieceText.includes("pawn")&&!isWhite): // Black pawn
                    console.log("Black pawn touched");
                    //console.log(el);
                    movePawn(el,false);
            
                    break;

                case (pieceText.includes("king")&&isWhite): // White king
                    console.log("White king touched");
                    //console.log(el);
                    kingMovement(el,true);
            
                    break;
                case (pieceText.includes("king")&&!isWhite):// Black king
                    console.log("Black king touched");
                    kingMovement(el,false);
                    //console.log(el);
            
                    break;

                case (pieceText.includes("queen")&&isWhite): // White queen
                    console.log("White queen touched");
                    queenMovement(el,true);
                    // //console.log(el);
                    break;
                case (pieceText.includes("queen")&&!isWhite):// Black queen
                    console.log("Black queen touched");
                    queenMovement(el,false);
                    // //console.log(el);
                    break;

                default:
                    // console.log("Empty box touched");
                    // //console.log(el);
                    break;
                }
           })
        })
    }
}
