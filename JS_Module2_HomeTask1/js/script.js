function myPow(a, b) {
    return (!b) ? 1 : a * myPow(a, b-1);
}

var a = prompt('Введите число которое будете возводить в степень:', '');
var b = prompt('Введите число для степени в которую будете возводить:', '');

alert(Math.round(a));
alert(Math.round(b));

if ( !isNaN ( Math.round(a) ) ) {
    if ( !isNaN ( Math.round(b) ) ) {
        console.log('Result of POW = ', myPow(a, b) );
    }
}