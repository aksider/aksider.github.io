var a, b;

enterData();

function enterData() {
    a = prompt('Введите число которое будете возводить в степень:', '');
    b = prompt('Введите число для степени в которую будете возводить:', '');
    
    checkInteger();
}

function isInteger(x, y) {
  return (x == y);
}

function checkInteger() {
    if (!isInteger(a, parseInt(a)) || !isInteger(b, parseInt(b)) ) {
        enterData();
    } else {
        if ( b > 0 ) {
            console.log('Result of POW = ', myPow(a, b) );
        } else {
            console.log('Result of POW = ', 1/(myPow(a, -b)) );
        }
    }
}

function myPow(a, b) {
    return (!b) ? 1 : a * myPow(a, b-1);
}