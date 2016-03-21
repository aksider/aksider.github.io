var a = prompt('Введите число которое будете возводить в степень:', '');
var b = prompt('Введите число для степени в которую будете возводить:', '');

if ( !isNaN ( Math.round(a) ) ) {
    if ( !isNaN ( Math.round(b) ) ) {
        if ( b > 0) {
            console.log('Result of POW = ', myPow(a, b) );
        }
    }
}

function myPow(a, b) {
    return (!b) ? 1 : a * myPow(a, b-1);
}