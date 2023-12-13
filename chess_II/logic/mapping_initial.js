// selecting files(columns)
const arrOfFiles=document.querySelectorAll(".files");
const files=["a","b","c","d","e","f","g","h"];
let fileNo=0;
for(const i of arrOfFiles)
{
    let counter=1;
   for(const ele of i.children)
   {
    ele.setAttribute("id",files[fileNo]+counter)
    // console.log(ele);
    counter++;
   }
   fileNo++;
}
// const arrOfFiles = document.querySelectorAll(".square");
// const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let fileNo = 0;

// for (const i of arrOfFiles) {
//     let counter = 1;
//     for (const ele of i.children) {
//         const id = files[fileNo] + counter;
//         ele.setAttribute("id", id);
//         console.log(id); // Print the ID
//         counter++;
//     }
//     fileNo++;
// }
