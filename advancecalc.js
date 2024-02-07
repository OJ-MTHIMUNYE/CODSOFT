


const numbers = document.querySelector(".keys");
const oparators = document.querySelector(".oparators");
const display = document.querySelector(".restxt");
const equal = document.querySelector(".eql");
const Delete = document.querySelector(".Delete");
const clear = document.querySelector(".clear");





function DisplayValue(numbers){

    display.value += numbers.target.value;
   

}

function CalcResults(){

    display.value = eval(display.value);


}

function DeleteNums(){

    display.value = display.value.slice(0, -1);
    
}

function Clear(){

    display.value = "";
    
    
}

numbers.addEventListener("click",DisplayValue);
equal.addEventListener("click",CalcResults);
Delete.addEventListener("click",DeleteNums);
clear.addEventListener("click", Clear);