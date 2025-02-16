/** question 1 */
const cities = ["Delhi", "Mumbai", "Pune", "Delhi", "Gurgaon", "Noida", "Mumbai"];

const filterArray = () => {
    document.querySelector('#filter').textContent = JSON.stringify( [...new Set(cities)]);
    // Note: Set() gives  object. To convert this  into array I'm using spread operator, and to display on page I'm using JSON.stringify
};

document.getElementById("filterArray").addEventListener('click',()=>filterArray());
/** Question 2 */
const listOfWords = ["Night", "State", "Fried", "Taste", "Peals", "Thing", "Fired", "Lapse","Ratle", "Slape", "Amit", "Test"];

function filterAnagrams(lists){
        const anagramMap = new Map();
            for(const word of lists){ 
                const keyForsort = word.toLowerCase().split('').sort().join('');
                // console.log('sorted',keyForsort);
                if(anagramMap.has(keyForsort)){
                    anagramMap.get(keyForsort).push(word);
                }else{
                   anagramMap.set(keyForsort,[word]) 
                }
            }
            // console.log('anagramMap',anagramMap);
            return [...anagramMap.values().filter((item)=> item.length > 1)];
}
function showfilterAnagrams(){
   const resultArray =  filterAnagrams(listOfWords);
    // console.log(resultArray);
   const result = resultArray.map((item)=> `${item}</br>`);
   
   document.querySelector('#anagrams').innerHTML = result.join('')
    
}
document.getElementById("showfilterAnagrams").addEventListener('click',()=> showfilterAnagrams());


/** Question 3 */

class Vehicle {
    #chassisNumber = "abcd1234";
    company = "Yamaha";
    static info = "Vehicle is a machine used to transportation"
    constructor(model){
        this.model = model
    }
    static showVehicle(){
        console.log(this.info)
    }
    showChassisNumber(){
        console.log(`Vehicle chassis no. is ${this.#chassisNumber}`);
    }
}
class Bike  extends Vehicle{
    constructor(model,price){
        super(model);
        this.price = price;
    }
    showBike(){ 
        console.log(`Your Bike model is ${this.model} and it's price is Rs. ${this.price}`)
    }
}
class eBike extends Bike{
    constructor(model, price, range){
        super(model,price);
        this.range = range;
    }
    showEbike(){
        console.log(`Your eBike model is ${this.model} and it's price is Rs. ${this.price} and range is ${this.range} KM`)
    }
}

function runClass(){
    const vehicle = new Vehicle();
    Vehicle.showVehicle();
    vehicle.showChassisNumber();
    const bike = new Bike("YZ", 120000);
    const ebike = new eBike("R15", 150000,"200");
    ebike.showEbike();
    console.log(ebike.company)
}
document.getElementById("runClass").addEventListener('click',()=> runClass());

/** Question 3 */
class Numbers{
    static add(a,b){
        return a+b
    }
    static subtract(a,b){
        return a-b
    }
    static multiply(a,b){
        return a*b
    }
    static division(a,b){
        return b !== 0 ? a / b: "Can not devide by zero"
    }
}


/** NOTE: i'm writing the below code for practice only I have add some validation as well */
function calculate(operation) {
    const inputs = document.querySelectorAll("#inputs input");
    const number1 = parseFloat(inputs[0].value);
    const number2 = parseFloat(inputs[1].value);
    inputs.forEach(input => input.nextElementSibling.innerHTML = "");
    let hasError = false;
    let result;
    switch (operation) {
        case "add":
            result = Numbers.add(number1,number2);
            break;
        case "subtract":
            result = Numbers.subtract(number1, number2);
            break;
        case "multiply":
            result = Numbers.multiply(number1, number2);
            break;
        case "division":
            result = Numbers.division(number1, number2);
            break;
        default:
            result = "Invalid operation";
    }
    if (!number1) {
        inputs[0].nextElementSibling.innerHTML = "Enter the value";
        hasError = true;
    }
    if (!number2) {
        inputs[1].nextElementSibling.innerHTML = "Enter the value";
        hasError = true;
    }
    if(!hasError){
        document.querySelector(`#${operation}Result span`).innerHTML = result;
    }
    inputs.forEach((input)=>{
        input.addEventListener('keydown', () => {
            input.nextElementSibling.innerHTML = "";
        });
    
        input.addEventListener('blur', () => {
            document.querySelectorAll(".operation span:not(.error)").forEach(function(span){
                span.innerHTML = "";
            })
        });
    
    })
}

const allBtn = document.querySelectorAll('.operation button');
allBtn.forEach(btn => {
    btn.addEventListener('click', (event)=>{
        calculate(event.target.dataset.operation);
    })
})

/** Question 5 */
import {PI, areaOfCircle, areaOfRectangle, areaOfCylinder} from './util.js';

document.getElementById("seeImpportResult").addEventListener('click',()=> seeImpportResult());
function seeImpportResult(){
    const result = {
        'Value of Constant (PI)' : PI,
        'Area of Circle: input(12)' : areaOfCircle(12),
        'Area of Rectangle: input(20,40)' : areaOfRectangle(20,40),
        'Area of Cylinder: input(2,10)' : areaOfCylinder(2,10),
        'Area of Circle with wrong values: input("a",-1)' : areaOfCircle("a",-1),
        'Area of Rectangle with wrong values: input("0,0")' : areaOfRectangle(0,0),
        'Area of Cylinder with wrong values: input("a","+")' : areaOfCylinder("a","+")
    }
    console.log("Note: all constant and method defination are being imported from different file named util.js")
    console.table(result)
}

/** Question 6 */

import uniQueArray from './uniqueArray.js';
const arr = [1,2,3,2,4,1,5,6,2,1,2];
document.getElementById("seeImportMethod").addEventListener('click',()=> {
    console.log("Note: used module is imported from different file named:uniqueArray.js")
    console.log(uniQueArray(arr))
});

/** Question 7 */
const MakeArrayFlat = (arr) => arr.reduce((acc, elm) => acc.concat(Array.isArray(elm) ? elm : [elm]), []);
const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
const flatArray = MakeArrayFlat(nestedArray);

document.getElementById("seeFlatMethod").addEventListener('click',()=>{
    console.log("Note I'm using reduce method, we can also use flat() method as well");
    console.log('arr.flat() // for first level');
    console.log('arr.flat(Infinity) //for all levels');
    console.log(flatArray)
})