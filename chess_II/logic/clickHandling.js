const allSquare=document.getElementsByClassName("square");
const clickElements=[];//push elements in click elements in empty array
for(const x of allSquare)
{
    x.addEventListener("click",() =>{
        const idOfEle=x.getAttribute("id");
        const eleInner=document.getElementById(idOfEle).innerHTML;
        if(clickElements.length>0){
            for(let i=0;i<clickElements.length;i++){
                clickElements[i].removeAttribute("style");
            }
        }
        if(eleInner.includes("black") || eleInner.includes("white")){
            document.getElementById(idOfEle).style.background="yellow";
            clickElements.push(x)
        }
    })
}