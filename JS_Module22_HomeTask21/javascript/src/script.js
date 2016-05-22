'use strict';

$(function () {

  var html = $('#test').html();

  var question = [{
    question: 'В какой из этих басен и сказок лисице не удалось достичь желаемого?',
    answer: ['“Ворона и лисица”', '“Лиса и виноград”', '“Колобок”', '“Кот и лиса”'],
    rightAnswer: {
      2: true
    }
  }, {
    question: 'Кем стал братец Иванушка, ослушавшись сестрицу Аленушку?',
    answer: ['Ягненочком', 'Теленочком', 'Козленочком', 'Жеребеночком'],
    rightAnswer: {
      3: true
    }
  }, {
    question: 'Что дама не сдавала в багаж?',
    answer: ['Корзину', 'Картонку', 'Гардину', 'Маленькую собачонку'],
    rightAnswer: {
      3: true
    }
  }, {
    question: 'Какого из этих животных не было среди Бременских музыкантов?',
    answer: ['Осла', 'Козла', 'Петуха', 'Кота'],
    rightAnswer: {
      2: true
    }
  }, {
    question: 'Какой персонаж не вошел в знаменитую тройку Крылова?',
    answer: ['Лебедь', 'Креветка', 'Щука', 'Рак'],
    rightAnswer: {
      2: true
    }
  }, {
    question: 'У какого из этих героев в голове были одни опилки?',
    answer: ['Буратино', 'Кот Леопольд', 'Винни-Пух', 'Страшила'],
    rightAnswer: {
      3: true
    }
  }, {
    question: 'Что просил у великого и ужасного Гудвина Железный Дровосек?',
    answer: ['Деньги', 'Сердце', 'Мозги', 'Солидол'],
    rightAnswer: {
      2: true
    }
  }, {
    question: 'Какой подарок ко дню рождения Сова подарила ослику Иа?',
    answer: ['Горшок', 'Воздушный шар', 'Мед', 'Хвост'],
    rightAnswer: {
      4: true
    }
  }, {
    question: 'Кого со страху проглотил Крокодил из стихотворения “Тараканище”?',
    answer: ['Зайца', 'Волка', 'Жабу', 'Солнце'],
    rightAnswer: {
      3: true
    }
  }, {
    question: 'Что было нарисовано на холсте в коморке Папы Карло?',
    answer: ['Дверь', 'Золотой ключик', 'Котелок', 'Сверчок'],
    rightAnswer: {
      3: true
    }
  }];

  var content = tmpl(html, {
    data: question
  });

  var answerArray = [];
  var manyAnswerArray = [];
  var $body = $('body');


  $body.append(content);

  function checkAnswer(e) {
    var user = [];

    for (var i = 0; i < question.length; i++) {

      var inputs = $('.question' + i + ' input:radio');

      for (var k = 0; k < inputs.length; k++) {
        var checked = [];
        var right = [];

        if (inputs[k].checked == true) {
          checked[k] = inputs[k].checked;
        }

        right[k] = question[i].rightAnswer[k + 1] == 1;

        if (checked[k] !== right[k]) {

          user.push("0");
        } else {
          user.push("1");
        };
      };
      // console.log(user);
    };

    var resultAverage = 0;
    var resultTest = 0;
    for (var i = 0; i < user.length; i++) {
      if (user[i]) {
        resultTest += 1;
      };
      if (user[i] == 1) {
        resultAverage += 1;
      };
    };

    resultTest = resultAverage * 100 / (resultTest / 4);

    $modal = $('<div class="test-modal"> ' + 'Ваш результат: ' + resultTest + '%' + ' </div>');
    $overlay = $('<div class="test-overlay"></div>');

    $overlay.one('click', hideModal);
    $body.append($overlay);
    $body.append($modal);
  };

  var hideModal = function hideModal() {
    $('.checkbox').removeAttr('checked');
    $modal.remove();
    $overlay.remove();
  };

  var result = $('.result');

  result.on('click', checkAnswer);
});
