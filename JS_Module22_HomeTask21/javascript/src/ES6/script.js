$(() => {


  let html = $('#test').html();
  

  const question = [
  {
  	question: 'Кто такой Стив Джобс?',
  	answer: [
    'Отец детей',
    'Уникум',
    'Человек'
    ],
    rightAnswer: {
        3:true
      }
  },
  {
    question: 'Есть ли жизнь под кроватью?',
    answer: [
    'Да',
    'Нет',
    'Если нужно - найдем!',
    ],
    rightAnswer: {
        3:true
      }
  },
  {
    question: 'Протеин это химия?',
    answer: [
    'Я не качок',
    'Гы-гы',
    'Нет',
    ],
    rightAnswer: {
        3:true
      }
  },
  ];

  let content = tmpl(html, {
  	data: question
  	});

  const [answerArray, manyAnswerArray, $body] = [[],[], $('body')];

  $body.append(content);



  function checkAnswer(e){
     const user = [];
    
    for (let i = 0; i < question.length; i++) {
      let inputs = $('.question' + i +' input:radio');
        for (let k = 0; k < inputs.length; k++) { 
           let checked = []; 
           let right = []; 

           if (inputs[k].checked == true) {
              checked[k] = inputs[k].checked;
           }
           right[k] = question[i].rightAnswer[k+1] == 1;

           if (checked[k] !== right[k]) {
            user.push("0");
           } else {
            user.push("1");
            };
        };
            // console.log(user);
    };

    let resultAverage = 0;
    let resultTest = 0;
    for (let i = 0; i < user.length; i++) {
       if (user[i]) {
         resultTest += 1;
       };
       if (user[i] == 1) {
         resultAverage += 1;
       };
    };

    resultTest = resultAverage * 100/(resultTest/3);

    $modal = $('<div class="test-modal"> ' + 'Ваш результат: ' + resultTest + '%' + ' </div>');
    $overlay = $('<div class="test-overlay"></div>')

    $overlay.one('click', hideModal);
    $body.append($overlay);
    $body.append($modal);
};

  let hideModal = () => {
    $('.checkbox').removeAttr('checked');
    $modal.remove();
    $overlay.remove();
  }

  let result = $('.result');

  result.on('click', checkAnswer);
});