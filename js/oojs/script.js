/* Question one */

function Person(name) {
    this.name = name;
}

Person.prototype.showIntro = function () {
    console.log(`Hello! My Name is ${this.name}`);
};

function Employee(name, ID) {
    Person.call(this, name); 
    this.ID = ID;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; 

Employee.prototype.showIDWithName = function () {
    console.log(`My Name is ${this.name} and my id is ${this.ID}`);
};

function Developer(name, ID, techStack) {
    Employee.call(this, name, ID); 
    this.techStack = techStack;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer; 

Developer.prototype.showStackWithNameIDandStack = function () {
    console.log(`My Name is ${this.name} and my id is ${this.ID}. My tech stacks are: ${this.techStack}`);
};




function showAnsOne(){
    let person = new Person('Hari');
    let employee = new Employee('Suresh', 124);
    let developer = new Developer('Jon', 3245, "JavaScript, HTML, CSS");

    person.showIntro();
    employee.showIntro();
    employee.showIDWithName();
    developer.showIntro();
    developer.showIDWithName();
    developer.showStackWithNameIDandStack();
}



/** Question two */

function displayNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
        setTimeout(() => {
          console.log(numbers[i]);
        }, i * 3000);
      }
}

function showAnsTwo(){
    const listOfNumbers = [1, 2, 3, 4, 5];
    displayNumbers(listOfNumbers)
}

/** Question 6 */

function Counter() {
    let count = 0;
    let timer = null;

    function showCount() {
        document.getElementById('value').innerHTML = count;
    }

    return {
        start: function() {
            if (!timer) {
                timer = setInterval(() => {
                    count++;
                    showCount();
                }, 1000);
            }
        },
        pause: function() {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        },
        stop: function() {
            clearInterval(timer);
            timer = null;
            count = 0;
            showCount();
        }
    };
}

const counter = Counter();

document.getElementById('play').addEventListener('click', () => counter.start());
document.getElementById('pause').addEventListener('click', () => counter.pause());
document.getElementById('stop').addEventListener('click', () => counter.stop());
