let tempConverter = () => {

    let userInput = document.getElementById("inputId").value;

    let selectionEle = document.getElementById("selectId");
    let optionValue = selectId.options[selectionEle.selectedIndex].value;

    let celToFah = (celsius)=>{
        let fahrenheitEle = ((celsius * 9/5)+32).toFixed(1);
        return fahrenheitEle;
    }

    let fahToCel = (fahrenheit)=>{
        let celsiusEle = ((fahrenheit - 32)*5/9).toFixed(1);
        return celsiusEle;
    }
    if (optionValue == 'celsius'){
        document.getElementById("headId").innerHTML = celToFah
        (userInput) + "&#176; F";
    }
    else{
        document.getElementById("headId").innerHTML = fahToCel
        (userInput) + "&#176; C";
    }

}

let userValue = document.getElementById("inputId");
let resetBtn = document.getElementById("resetId");

function clearValue(){
    userValue.value = "";
    document.getElementById("headId").innerHTML = "";
}

resetBtn.onclick = function(){
    clearValue();
}



