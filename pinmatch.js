document.getElementById('dontMatch').style.display = "none";
document.getElementById('Matched').style.display = "none";

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function(){
    const generatePinDisplay = document.getElementById('generate-pin-display').value;
    const randomNumber = Math.floor(Math.random()*9999)+1000;
    document.getElementById('generate-pin-display').value = randomNumber;
})



function calcNumber(v) {
    const CalcDisplay = document.getElementById('Calc-display');
    CalcDisplay.value += v;
}

// Clear Btn 
const clear = document.getElementById('clear').addEventListener('click', function(){
        document.getElementById('Calc-display').value = ""
})

// Del Btn

const del = document.getElementById('delete').addEventListener('click', function(){
    const CalcDisplay = document.getElementById('Calc-display').value;
    const delNumber = CalcDisplay.slice(0, -1)
    document.getElementById('Calc-display').value = delNumber;
})


// Submit Btn
const submitBtn = document.getElementById('submit-btn').addEventListener('click', function() {
    const generatePinDisplay = document.getElementById('generate-pin-display').value;
    const CalcDisplay = document.getElementById('Calc-display').value;

    if( generatePinDisplay == CalcDisplay ){
        document.getElementById('Matched').style.display = "block";
    }
    else{
        document.getElementById('dontMatch').style.display = "block";
    }
    
    document.getElementById('Calc-display').value = "";

})




