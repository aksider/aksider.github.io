var myStart = document.getElementById('myButtonStart');
var myTimer = document.getElementById('myTimer');
var myMilisec = document.getElementById('myMilisec');
var myClear = document.getElementById('myClear');

var myPause = 0;
var intervalID;
var startMs;
var result = 0;
var hh = 0;
var mm = 0;
var ss = 0;


vremya = function () {
    var date1 = new Date();
    var ms = date1.getMilliseconds();
    var timeDiffrence;
    
    timeDiffrence = date1.getTime() - startMs;
    
    if ((timeDiffrence / 1000) >= 1) {
        startMs = new Date().getTime();
        ss = ss + 1;
    }
    
    if (ss >= 60) {
        mm = mm + 1;
        ss = 0;
    }

    if (mm >= 60) {
        hh = hh + 1;
        mm = 0;
    }
    
    if (hh >= 99) {
        hh = 0;
    }
    
    
    if (hh < 10) {
        result = "0" + hh;
    } else {
        result = hh;
    }
    if (mm < 10) {
        result = result + ":0" + mm;
    } else {
        result = result + ":" + mm;
    }
    if (ss < 10) {
        result = result + ":0" + ss;
    } else {
        result = result + ":" + ss;
    }
    
    myMilisec.innerHTML = new Date().getTime() - startMs;
    myTimer.innerHTML = result;
};


function startCount(event) {

    if (myPause === 0) {

        myStart.innerHTML = 'Pause';
        startMs = new Date().getTime();
        myPause = 1;
        intervalID = setInterval(vremya, 0);
        
    } else if (myPause === 1) {
        
        myStart.innerHTML = 'Continue';
        myPause = 2;
        clearInterval(intervalID);
        
    } else if (myPause === 2) {
        
        myStart.innerHTML = 'Pause';
        myPause = 1;
        intervalID = setInterval(vremya, 0);
    }
    
}


function startClear() {
    myStart.innerHTML = 'Start';
    myMilisec.innerHTML = '0';
    myTimer.innerHTML = '00:00:00';
    result = 0;
    hh = 0;
    mm = 0;
    ss = 0;
    myPause = 0;
    clearInterval(intervalID);
}


myStart.addEventListener('click', startCount);
myClear.addEventListener('click', startClear);