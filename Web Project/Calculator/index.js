console.log("Let starts calculating.")

var calculation = "";
let tasks = document.getElementsByClassName("box");
let boxes = Array.from(tasks);
let resultPanel = document.getElementById("result");

function printInput(divElem){
    if(divElem.innerHTML=="CE"){
        calculation = "";
        resultPanel.innerText = 0;
        return;
    }

    if(divElem.innerHTML=="C"){
        const len = calculation.length;
        calculation = calculation.substring(0, len-1);
        resultPanel.innerText = calculation;
        return;
    }

    if(divElem.innerHTML=="="){
        calculation = eval(calculation);
        resultPanel.innerText = calculation;
        return;
    }

    if(divElem.innerHTML=="X"){
        calculation += "*";
        resultPanel.innerText = calculation;
        return;
    }
    
    if(divElem.innerHTML=="<sup>+</sup>/<sub>-</sub>"){
        
        return;
    }
    
    if(divElem.innerHTML=="1/x"){

        return;
    }

    calculation += divElem.innerHTML;
    resultPanel.innerText = calculation;
    
}

boxes.forEach(element => {
    element.addEventListener('click', ()=> {
        printInput(element);
    })
});