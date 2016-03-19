var myArray = [];
var userName;
var equalsCount;

for (var i = 0; i<5 ; i++) {
    myArray[i] = prompt('Введи имя для ' + (i + 1) + '-го элемента массива: ', '');
}

userName = prompt('Введите имя пользователя: ', '');

equalsCount = 0;

for (var i in myArray) {
    if ( userName == myArray[i] ) equalsCount++;
}

if (equalsCount == 0) {
    alert('Ошибка! Нет такого имени в массиве!');
} else alert(userName +' , вы успешно вошли');