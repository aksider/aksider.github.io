$(function () {
    
    function saveData() {
    
        var localData = {
            questionsArray: [
                        ["В какой из этих басен и сказок лисице не удалось достичь желаемого?", "“Ворона и лисица”", "“Лиса и виноград”", "“Колобок”", "“Кот и лиса”", 2],
                        ["Кем стал братец Иванушка, ослушавшись сестрицу Аленушку?", "Ягненочком", "Теленочком", "Козленочком", "Жеребеночком", 3],
                        ["Что дама не сдавала в багаж?", "Корзину", "Картонку", "Гардину", "Маленькую собачонку", 3],
                        ["Какого из этих животных не было среди Бременских музыкантов?", "Осла", "Козла", "Петуха", "Кота", 2],
                        ["Какой персонаж не вошел в знаменитую тройку Крылова?", "Лебедь", "Креветка", "Щука", "Рак", 2],
                        ["У какого из этих героев в голове были одни опилки?", "Буратино", "Кот Леопольд", "Винни-Пух", "Страшила", 3],
                        ["Что просил у великого и ужасного Гудвина Железный Дровосек?", "Деньги", "Сердце", "Мозги", "Солидол", 2],
                        ["Какой подарок ко дню рождения Сова подарила ослику Иа?", "Горшок", "Воздушный шар", "Мед", "Хвост", 4],
                        ["Кого со страху проглотил Крокодил из стихотворения “Тараканище”?", "Зайца", "Волка", "Жабу", "Солнце", 3],
                        ["Что было нарисовано на холсте в коморке Папы Карло?", "Дверь", "Золотой ключик", "Котелок", "Сверчок", 3]
                    ],
            testName: 'Тест',
            buttonText: 'Проверить мои результаты'
        };

        localStorage.setItem('testData', JSON.stringify(localData));
    }

    function readData() {

        var localData = localStorage.getItem('testData');

        localData = JSON.parse(localData);

        return localData;
    }


    saveData();
    testData = readData();
    console.log(testData.testName);
    
    
    var html = $('#myTest').html();
    var content = tmpl(html, {
        data: testData
    });
    
    var $body = $('body');
    var $modalBox;
    var $overlay;
    
    $('body').append(content);
    
    $('#myButton').click(function (e) {
        var elements =  $('.answer');
        console.log(elements.length);
        
        
        $modalBox = $('<div class="modal-box"><h3 class="h3 text-center">' + checkAnswers(elements) + '</h3>');
        $overlay = $('<div class="modal-box-overlay">');
        
        $body.append($overlay);
        $body.append($modalBox);
        $overlay.one('click', hideModal);
        
    });

    
    function hideModal() {
        $modalBox.remove();
        $overlay.remove();
        location.reload();
    }
    
    function checkAnswers(elements) {
        var rightAnswer = 0;
                
        for (var i = 0, k = 0, n = 0; i < elements.length; i += 1) {
            
            console.log(elements[i].checked, elements[i].value, testData.questionsArray[n][5]);
            if ((elements[i].checked) && (elements[i].value == testData.questionsArray[n][5])) {
                rightAnswer += 1;
            }
            if (k === 3) {
                k = 0; n += 1;
            } else {
                k += 1;
            }
        }
        
        if (rightAnswer == testData.questionsArray.length) {
            return 'Вы прошли тест';
        } else {
            return 'Вы не прошли тест';
        }
    }
    
});