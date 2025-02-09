
/** simple interest */
function simpleInterestFn(pa,roi,time){
    document.getElementById("si").innerHTML=`Simple Interest is: ${(pa*roi*time)/100}`;
}
function simpleInterest(){
    const inputData = prompt("Enter the 'Principal Amount', 'Interest Rate' and 'No. of Years' (seperated by commas)");
    if(inputData){
        let amountArray = inputData.split(',');
        let pa = parseInt(amountArray[0]);
        let roi = parseInt(amountArray[1]);
        let time = parseInt(amountArray[2]);
        simpleInterestFn(pa,roi,time);
    }else{
        alert('Please enter the values')
    }
}

/** checkPalindrome */
function checkPalindromeFn(str){
    if(str){
        const reverseStr = str.split("").reverse().join("");
        if(str === reverseStr){
            return true
        }else{
            return false
        }
    }
}
function checkPalindrome(){
    const string = (document.getElementById("palindrome").value).replaceAll(' ','');
    let result;
    if(string){
        if(checkPalindromeFn(string)){
        result = 'Give string is "A PALINDROME"'
        }else{
        result = 'Give string is "NOT A PALINDROME"'
        }
    }else{
        result = 'Enter the string'
    }
    document.getElementById("palindromeResult").innerHTML =result
}


/** Circle Area */

function calculateCircleAreaFn(radius){
    return Math.PI*(radius**2)
}

function calculateCircleArea(){
    const radius = parseInt(document.getElementById("circle").value);
    let result;
    if(radius <= 0){
        result = 'Radius must be greater than 0'
    }
    else if(radius){
        result = `Area is: ${calculateCircleAreaFn(radius)}`;
    }else{
        result = "Enter the radius"
    }
    document.getElementById("ariaResult").innerHTML = result;
}

/** copy object */
//shallow copy using spread
/*
function copyObjectFn(obj){
    return objCopy = {...obj}
}
*/

// //shallow copy using spread
/*
function copyObjectFn(obj){
    return objCopy = Object.assign({},obj)
}
*/

// deep copy 
function copyObjectFn(obj){
    let copyObj = {};
    for(key in obj){
     copyObj[key] = obj[key];
    }
    return copyObj
}

function copyObject(){
    const obj = JSON.parse(document.getElementById("obj").textContent);
    let coppiedObj = copyObjectFn(obj)
    console.log(coppiedObj);
}

/** Employee */

function salaryFilter(){
    const employees = JSON.parse(document.getElementById("emp").textContent);
    const salaryConst = parseInt(document.getElementById("salaryConst").value);
    const filteremp = employees.filter((emp)=>{
        return emp.salary > salaryConst;
    })
    let filterEmpName = [];
    filteremp.map((emp)=>{
        filterEmpName.push(emp.name)
    })
    if(filterEmpName.length){
        document.getElementById("salaryR1").innerHTML = filterEmpName.join(",")
    }else{
        document.getElementById("salaryR1").innerHTML = `looks like no employees are getting more than ${salaryConst}`
    }
}
function calcAge(dob){
    let currentTime = new Date();
    let dobArr = dob.split("-");
    let dobTime = new Date(`${dobArr[2]}-${dobArr[1]}-${dobArr[0]}`);
    let age = currentTime - dobTime;
    let days = Math.floor(age/(1000*60*60*24));
    let years = days/365;
    return years;
}

function groupEmp(){
    const employees = JSON.parse(document.getElementById("emp").textContent);
    let under20 = [];
    let under20_30 = [];
    let above30 = []
    employees.filter((emp)=>{
        let age = calcAge(emp.dob);
         if(age<=20){
            under20.push(emp.name);
         }else if((20 < age) && (age <= 30)){
            under20_30.push(emp.name)
         }else{
            above30.push(emp.name)
         }
    })
    document.getElementById("under20").innerHTML = under20.join(",")
    document.getElementById("under20_30").innerHTML = under20_30.join(",")
    document.getElementById("above30").innerHTML = above30.join(",")
}

function incrementSalary(){
    let employees = JSON.parse(document.getElementById("emp").textContent);
    const hike = parseInt(document.getElementById("hike").value);
    const salLimit = parseInt(document.getElementById("salLimit").value);
    const ageLimit = parseInt(document.getElementById("ageLimit").value);
    let updateEmp = employees;
    employees.filter((emp)=>{
        let age = calcAge(emp.dob);
        if((emp.salary < salLimit) && age > ageLimit){
            emp.salary = parseInt(emp.salary)*hike
        }
    })
    document.getElementById("emp").innerHTML = JSON.stringify(updateEmp,null, " ");
    console.log(updateEmp);
}