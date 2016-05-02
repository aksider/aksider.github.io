function Human() {
    this.name = 'name';
    this.age = 0;
    this.sex = 'sex';
    this.height = 0;
    this.weight = 0;
}

function Worker() {
    this.workingPlace = 'workingPlace';
    this.salary = 0;
    this.toWork = function () {
        console.log('I am working');
    };
}

function Student() {
    this.studyingPlace = 'studyingPlace';
    this.grants = 0;
    this.watchSoaps = function () {
        console.log('I am watching soaps');
    };
}

Worker.prototype = new Human();
Student.prototype = new Human();

var Worker1 = new Worker();
var Worker2 = new Worker();
var Worker3 = new Worker();
var Student1 = new Student();
var Student2 = new Student();
var Student3 = new Student();


Worker1.name = 'John Smith';
Worker1.age = 30;
Worker1.sex = 'male';
Worker1.height = 180;
Worker1.weight = 90;
Worker1.workingPlace = 'CIA';
Worker1.salary = 30000;
Worker1.toWork;

Worker2.name = 'Peter Smith';
Worker2.age = 45;
Worker2.sex = 'male';
Worker2.height = 175;
Worker2.weight = 85;
Worker2.workingPlace = 'KIA';
Worker2.salary = 3000;
Worker2.toWork;

Worker3.name = 'Julia Jackson';
Worker3.age = 33;
Worker3.sex = 'female';
Worker3.height = 160;
Worker3.weight = 60;
Worker3.workingPlace = 'Google';
Worker3.salary = 5000;
Worker3.toWork;

Student1.name = 'Ivan Ivanov';
Student1.age = 20;
Student1.sex = 'male';
Student1.height = 170;
Student1.weight = 60;
Student1.studyingPlace = 'Univer';
Student1.grants = 1000;
Student1.watchSoaps;

Student2.name = 'Maria Kukushkina';
Student2.age = 21;
Student2.sex = 'female';
Student2.height = 160;
Student2.weight = 55;
Student2.studyingPlace = 'Univer2';
Student2.grants = 900;
Student2.watchSoaps;

Student3.name = 'Kolya Sidorov';
Student3.age = 22;
Student3.sex = 'male';
Student3.height = 175;
Student3.weight = 80;
Student3.studyingPlace = 'Univer3';
Student3.grants = 1200;
Student3.watchSoaps;


console.log(Worker1);
console.log(Worker2);
console.log(Worker3);

console.log(Student1);
console.log(Student2);
console.log(Student3);