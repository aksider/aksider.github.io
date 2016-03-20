var body = document.body;

var myPageGenerator = {
    makeHeader: function (headerText) {
        var headerBox = document.createElement('div');
        var header = document.createElement('h3');
        
        header.classList.add('h3');
        header.classList.add('text-center');
        header.innerHTML = headerText;
        
        headerBox.classList.add('myHeader');
        headerBox.appendChild(header);
        
        body.appendChild(headerBox);
    },
    
    makeQuestion: function (questionNumber, questionText) {
        var questionBox = document.createElement('div');
        var question = document.createElement('h3');

        question.classList.add('h3');
        question.classList.add('text-left');
        question.innerHTML = questionNumber + '. ' + questionText;
        
        questionBox.classList.add('myQuestion');
        questionBox.appendChild(question);
        
        body.appendChild(questionBox);
    },
    
    makeAnswer: function (answerText) {
        var answerLabelText = document.createTextNode(answerText);
        var answerBox = document.createElement('div');
        var answerLabel = document.createElement('label');
        var answerCheckbox = document.createElement('input');
        
        answerBox.classList.add('checkbox');
        
        answerCheckbox.type = 'checkbox';

        answerLabel.appendChild(answerCheckbox);
        answerLabel.appendChild(answerLabelText);
        
        answerBox.classList.add('myAnswer');
        answerBox.appendChild(answerLabel);
        
        body.appendChild(answerBox);
    },
    
    makeButton: function (buttonText) {
        var buttonBox = document.createElement('div');
        var buttonCheck = document.createElement('button');
    
        buttonCheck.type = 'button';
        buttonCheck.classList.add('btn');
        buttonCheck.classList.add('btn-primary');
        buttonCheck.classList.add('btn-lg');
        buttonCheck.classList.add('btn-block');
        buttonCheck.innerHTML = buttonText;
        buttonCheck.value = 'value';
        
        buttonBox.classList.add('myButton');
        buttonBox.appendChild(buttonCheck);
        body.appendChild(buttonBox);
    }
};

myPageGenerator.makeHeader('Тест по программированию');

myPageGenerator.makeQuestion(1, 'Вопрос №1');
myPageGenerator.makeAnswer('Вариант ответа №1');
myPageGenerator.makeAnswer('Вариант ответа №2');
myPageGenerator.makeAnswer('Вариант ответа №3');

myPageGenerator.makeQuestion(2, 'Вопрос №2');
myPageGenerator.makeAnswer('Вариант ответа №1');
myPageGenerator.makeAnswer('Вариант ответа №2');
myPageGenerator.makeAnswer('Вариант ответа №3');

myPageGenerator.makeQuestion(3, 'Вопрос №3');
myPageGenerator.makeAnswer('Вариант ответа №1');
myPageGenerator.makeAnswer('Вариант ответа №2');
myPageGenerator.makeAnswer('Вариант ответа №3');

myPageGenerator.makeButton('Проверить мои результаты');