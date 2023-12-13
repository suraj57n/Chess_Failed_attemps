'use strict';
export function otherData(obj){
    const rank=obj.id[1];
    //white pawn
    // console.log(rank);
    if(rank==2)
    {
        const b='white';
        const c='pawn';
        // console.log(a,b,c);
        return {b,c};
    }
    //black pawn
    else if(rank==7)
    {
        const b='black';
        const c='pawn';
        return {b,c};
    }
    else if(obj.id=='h1' || obj.id=='a1'){
       
        const b='white';
        const c='rook';
        return {b,c};
    }
    else if(obj.id=='h8' || obj.id=='a8'){
       
        const b='black';
        const c='rook';
        return {b,c};
    }
    else if(obj.id=='b8' || obj.id=='g8'){
       
        const b='black';
        const c='knight';
        return {b,c};
    
    }
    else if(obj.id=='b1' || obj.id=='g1'){
        
        const b='white';
        const c='knight';
        return {b,c};
    }
    else if(obj.id=='c8' || obj.id=='f8'){
      
        const b='black';
        const c='bishop';
        return {b,c};
    
    }
    else if(obj.id=='c1' || obj.id=='f1'){
     
        const b='white';
        const c='bishop';
        return {b,c};
      
    }
    else if(obj.id=='d8')
    {
       
        const b='black';
        const c='queen';
        return {b,c};
       
    }
    else if(obj.id=='d1')
    {
    
        const b='white';
        const c='queen';
        return {b,c};
        
    }
    else if(obj.id=='e1')
    {
       
        const b='white';
        const c='king';
        return {b,c};
        
    }
    else if(obj.id=='e8')
    {
       
        const b='black';
        const c='king';
        return {b,c};
        // return ['./black/king.png','black','king'];
    }
    else{
        // const a='./white/pawn.png';
        // const b='white';
        // const c='pawn';
        // return {a,b,c};
        const b=false;
        const c=false;
        // console.log("errors");
        return {b,c};
    }
}
export function addPawnPieceToObject(obj){
    const rank=obj.id[1];
    //white pawn
    // console.log(rank);
    if(rank==2)
    {
        return ['./white/pawn.png','white','pawn'];
    }
    //black pawn
    else if(rank==7)
    {
        return ['./black/pawn.png','black','pawn'];
    }
    else if(obj.id=='h1' || obj.id=='a1'){
        return ['./white/rook.png','white','rook'];
    }
    else if(obj.id=='h8' || obj.id=='a8'){
        return ['./black/rook.png','black','rook'];
    }
    else if(obj.id=='b8' || obj.id=='g8'){
        return ['./black/knight.png','black','knight'];
    }
    else if(obj.id=='b1' || obj.id=='g1'){
        return ['./white/knight.png','white','knight'];
    }
    else if(obj.id=='c8' || obj.id=='f8'){
        return ['./black/bishop.png','black','bishop'];
    }
    else if(obj.id=='c1' || obj.id=='f1'){
        return ['./white/bishop.png','white','bishop'];
    }
    else if(obj.id=='d8')
    {
        return ['./black/queen.png','black','queen'];
    }
    else if(obj.id=='d1')
    {
        return ['./white/queen.png','white','queen'];
    }
    else if(obj.id=='e1')
    {
        return ['./white/king.png','white','king'];
    }
    else if(obj.id=='e8')
    {
        return ['./black/king.png','black','king'];
    }
    else{
        // console.log("errors");
        return false;
    }
} 