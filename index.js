var myBill = document.getElementById("bill").value;
var myPeople = document.getElementById("people").value; 
var myPercent = "";
var customPercent = "";


// This changes the color of the percentage button clicked.
var n = document.getElementsByClassName("percent").length;
for (var i=0; i<n; i++){
    document.getElementsByClassName("percent")[i].addEventListener("click", function() {
        myPercent = this.value;  
        myFunction();
        if(this.classList.contains("active-button") === false && this.classList.contains("custom") === false){
            for (var i=0; i<n; i++){
                document.getElementsByClassName("percent")[i].classList.remove("active-button");
            }
            this.classList.add("active-button");  
        }
        else{
            this.classList.remove("active-button");

        }
        console.log(myPercent);
});
}

// This calls the function that calculates the tip and total amount when the bill input is changed.
document.getElementById("bill").onchange = function(){myFunction()};


document.getElementById("custom").onchange = function(){
    myPercent = document.getElementById("custom").value;
    myFunction();
};


// This calls the function that calculates the tip and total amount when the people input is changed.
document.getElementById("people").onchange = function(){myFunction()};

// This changes the color of the reset button and resets all values.
document.getElementById("reset").addEventListener("click", resetValues);
document.getElementById("reset").addEventListener("click", resetButtonToggle);



function resetValues(){
    document.getElementById("bill").value = "";
    document.getElementById("people").value = ""
    document.getElementsByClassName("value")[0].innerHTML = "0.00";
    document.getElementsByClassName("value")[1].innerHTML = "0.00";
    myPercent = "";
    for (i=0; i<n; i++){
        document.getElementsByClassName("percent")[i].classList.remove("active-button");
    }

}


function resetButtonToggle() {
    if(myBill !== "" || myPeople !== "" || myPercent !== ""){
        document.getElementById("reset").disabled = true;
    }else{
        document.getElementById("reset").disable = false;
    
    }
    
}

function myFunction(){
    myBill = document.getElementById("bill").value;
    myPeople = document.getElementById("people").value; 
    val = document.getElementsByClassName("value");
    
    if(document.getElementById("people").value ==="" || document.getElementById("people").value ===0){
        document.getElementById("error-message").style.visibility = "visible";
        if(myBill !== "" || myPeople !== "" || myPercent !== ""){
            document.getElementById("reset").classList.add("filled-reset");
        }else{
            document.getElementById("reset").classList.remove("filled-reset");
        
        }
    }
    else{
        for (let i =0; i < val.length; i++){
            val[i].innerHTML =  calculator(myBill, myPercent, myPeople)[i];
            document.getElementById("error-message").style.visibility = "hidden";
            if(myBill !== "" || myPeople !== "" || myPercent !== ""){
                document.getElementById("reset").disabled = false;
            }else{
                document.getElementById("reset").disabled = true;
            
            }
    }
    }
}

function calculator(bill, myPercent, people){
    var tip = ((myPercent / 100) * bill).toFixed(2);
    var totalTip = ((bill / people) + Number(tip)).toFixed(2) ;
    return [tip, totalTip];
}


function activeButton(){
    document.getElementsByClassName("percent")[i].addEventListener("click", function() {
        alert("hello");
});
}