/** object calculator */

const calculator = {
    read : function(){
        this.value1 = parseFloat(prompt("Enter Value one"));
        this.value2 = parseFloat(prompt("Enter Value two"));
        if(isNaN(this.value1) || isNaN(this.value2)){
            document.getElementById("readValueForCal").innerHTML = "No input given"
        }else{
            document.getElementById("readValueForCal").innerHTML = `${this.value1} and ${this.value2}`
        }
        
    },
    add: function(){
        const add = this.value1 + this.value2;
        if(!isNaN(add) ){
            document.getElementById("resultAdd").innerHTML = add
        }else{
            document.getElementById("resultAdd").innerHTML = "Please Enter  values"
        }
        
    },
    subtract: function(){
        const subtract = this.value1 - this.value2;
        if(!isNaN(subtract) ){
            document.getElementById("resultSubtract").innerHTML = subtract
        }else{
            document.getElementById("resultSubtract").innerHTML = "Please Enter  values"
        }
    },
    multiply: function(){
        const multiply = this.value1 * this.value2;
        if(!isNaN(multiply) ){
            document.getElementById("resultMultiply").innerHTML = multiply
        }else{
            document.getElementById("resultMultiply").innerHTML = "Please Enter  values"
        }
    },
}
function readValueForCal(){
    calculator.read();
}
function addValue(){
    calculator.add();
}
function subtractValue(){
    calculator.subtract();
}
function multiplyValue(){
    calculator.multiply();
}

/*** Object temperatureConverter */
const temperatureConverter = {
    read : function(){
        this.value = parseFloat(prompt("Enter temperature value in Celsius"));
        if(isNaN(this.value)){
            document.getElementById("readValueForTemp").innerHTML = "No input given"
        }else{
            document.getElementById("readValueForTemp").innerHTML = this.value
        }
        
    },
    toFahrenheit : function(){
        const result =  (this.value * 9/5) + 32;
        if(!isNaN(result)){
            document.getElementById("resultToFahrenheit").innerHTML = `${result} °F`
        }else{
            document.getElementById("resultToFahrenheit").innerHTML = "Please Enter the value"
        }
        return result
    },
    toKelvin : function(){
        const result =  this.value + 273.15;
        if(!isNaN(result)){
            document.getElementById("resultToKelvin").innerHTML = `${result} K`
        }else{
            document.getElementById("resultToKelvin").innerHTML = "Please Enter the value"
        }
        return result
    },
    display: function(){
        console.table({
            "Celsius value": isNaN(this.value)?"No input given":this.value,
            "Fahrenheit value": isNaN(temperatureConverter.toFahrenheit())?"No input given":temperatureConverter.toFahrenheit(),
            "Kelvin value": isNaN(temperatureConverter.toKelvin())?"No input given":temperatureConverter.toKelvin()
          });
    }
}
function readValueForTemp(){
    temperatureConverter.read();
}
function toFahrenheit(){
    temperatureConverter.toFahrenheit();
}
function toKelvin(){
    temperatureConverter.toKelvin();
}
function displayValue(){
    temperatureConverter.display();
}
