"use strict";
const arrayOfPawn=[];
for(const i of files)
{
    arrayOfPawn.push(document.getElementById(i + 2));
}
for(const i of files)
{
    arrayOfPawn.push(document.getElementById(i + 7));
}

arrayOfPawn.forEach(pawn => {
    const stepSquare=[];
    const clickElement=pawn;
    pawn.addEventListener('click', () => {
        const currentId = pawn.getAttribute('id');
        const ini = pawn.innerHTML;
        console.log(ini);
        if (ini.includes('black')) {
            console.log(currentId);
            let change = parseInt(currentId[1]);

            for (let i = 0; i < 2; i++) {
                change++;
                stepSquare.push(document.getElementById(currentId[0] + change));
            }
        } else {
            console.log(currentId);
            let change = parseInt(currentId[1]);

            for (let i = 0; i < 2; i++) {
                change--;
                stepSquare.push(document.getElementById(currentId[0] + change));
            }
        }
        highlightCircle(stepSquare,clickElement);
    });
});


//array to track circles
// Array to track circles
const trackCircle = [];

// Function to add highlighting
const highlightCircle = function (attachCircles,clickElements) {
    if (trackCircle.length !== 0) {
        undoCircle(trackCircle);
    }
    const child = '<div class="circle"></div>';
    attachCircles.forEach((el) => {
        el.classList.add("flex");
        el.addEventListener("click",()=>{
            console.log(el);
            console.log(clickElements.innerHTML);
            el.innerHTML = clickElements.innerHTML;
            const removeCircleFromThis = attachCircles.filter((i) => i !== el);
            undoCircle(removeCircleFromThis);
            clickElements.innerHTML = '';
        })
        el.innerHTML = child;
        trackCircle.push(el);
    });
};

const undoCircle = function (circlesArray) {
    circlesArray.forEach((a) => {
        a.innerHTML = "";
        a.classList.remove("flex");
    });
};

