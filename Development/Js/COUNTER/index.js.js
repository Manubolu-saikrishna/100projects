document.addEventListener("DOMContentLoaded", function () {
let add = document.querySelector("#add");

if(add){
  add.addEventListener("click", function () {
    let output = document.querySelector(".outputContent");
  
    
    let result = Number(output.innerText) + 1;
    if (result > 10) {
      result = 0;
    }
    output.innerText = result;
    output.style.transform = 'translateY(-100%)';
    output.style.opacity = 0 ;
    output.style.transitionDuration = '0s'
    
    
  });}
}),
  document.addEventListener("DOMContentLoaded", function () {
    let subtract=document.querySelector("#subtract");

  subtract.addEventListener("click", function () {
    let output = document.querySelector(".outputContent");
    let result = Number(output.innerText) - 1;
  
    if (result < 0) {
      result = 0;
    }
    output.innerText = result;

  });
});
