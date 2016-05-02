var animal = {
    name: 'Jack',
    age: 2
};

var cat = {
//    name: 'Vasya',
    age: 3
};

cat.__proto__ = animal;

console.log('cat.name', cat.name);


function World() {
    this.sky = 'blue';
}


//var newWorld = new World();

function Company() {
    this.name = 'Google';
    this.people = 10000;
    this.sayHello = function () {
        alert('Hello, World!');
    }
}


//Company.prototype = newWorld;
Company.prototype = new World();


var newCompany = new Company();

console.log('newCompany', newCompany);
console.log('newCompany.sky', newCompany.sky);

newCompany.sayHello();


Company.prototype.sayHello2 = function () {
    alert('Hello, World 2!!!');
}

var newCompany2 = new Company();

newCompany2.sayHello2();


var Constructor = function(){};
var object = new Constructor();
console.log(object.__proto__ === Constructor);
console.log(object.__proto__ === Constructor.prototype);
console.log(object.__proto__ === Constructor.__proto__);

var Constructor4 = function() {
        this.a = 1;
        this.b = 2;
    };

var object2 = Constructor4();

console.log(object2);