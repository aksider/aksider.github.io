var myStart = document.getElementById('myButtonStart');
var myTimer = document.getElementById('myTimer');
var myReset = document.getElementById('myButtonReset');
var mySplit = document.getElementById('myButtonSplit');
var mySplitBox = document.getElementById('mySplitBox');

var myPause = 0;
var intervalID;
var startMs;
var result = 0;
var hh = 0;
var mm = 0;
var ss = 0;
var hasStarted = false;
var splitCounter = 0;
var timeDiffrence;
var startSplitTimer;
var endSplitTimer;


function mySplitMake(myText) {
    var splitText = document.createElement('p');
    
    splitCounter += 1;

    splitText.classList.add('mySplitText');
    splitText.setAttribute('id', 'mySplitText');
    
    
    if (myText === 'SPLIT') {
        splitText.innerHTML = splitCounter + ' ' + myText + ': ' + msToTime(endSplitTimer - startSplitTimer);
    } else {
        splitText.innerHTML = splitCounter + ' ' + myText + ': ' + msToTime(new Date().getTime() - startSplitTimer);
    }
    
    mySplitBox.appendChild(splitText);
}


function timer() {
    var date1 = new Date();
    var ms = date1.getMilliseconds();
    
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
    
    result = result + '.' + (new Date().getTime() - startMs);
    
    myTimer.innerHTML = result;
}


function msToTime(myMs) {
    var mySeconds = (myMs / 1000);
    var myMinutes = (mySeconds / 60);
    var myHours = (myMinutes / 60);

    mySeconds %= 60;
    myMinutes %= 60;
    myHours %= 24;
    
    var sec, min, hrs;

    if (mySeconds > 1) {
        if (mySeconds < 10) {
            sec = '0' + mySeconds;
        } else {
            sec = mySeconds;
        }
    } else {
        sec = '0' + mySeconds;
    }
    
    
    if (myMinutes > 1) {
        if (myMinutes < 10) {
            min = '0' + Math.floor(myMinutes);
        } else {
            min = Math.floor(myMinutes);
        }
    } else {
        min = '00';
    }
    
    
    if (myHours > 1) {
        if (myHours < 10) {
            hrs = '0' + Math.floor(myHours);
        } else {
            hrs = Math.floor(myHours);
        }
    } else {
        hrs = '00';
    }


    return hrs + ':' + min + ':' + sec;

}


function startCount(event) {

    if (myPause === 0) {

        myStart.innerHTML = 'Stop';
        startMs = new Date().getTime();
        startSplitTimer = new Date().getTime();
        myPause = 1;
        hasStarted = true;
        intervalID = setInterval(timer, 10);
        
        
    } else if (myPause === 1) {
        
        myStart.innerHTML = 'Start';
        mySplitMake('STOP');
        myPause = 2;
        hasStarted = false;
        clearInterval(intervalID);
        
    } else if (myPause === 2) {
        
        myStart.innerHTML = 'Stop';
        startSplitTimer = new Date().getTime();
        hasStarted = true;
        myPause = 1;
        intervalID = setInterval(timer, 0);
        
    }
    
}


function startSplit() {
    endSplitTimer = new Date().getTime();
    if (hasStarted) {
        mySplitMake('SPLIT');
    }
}

function clearSplit() {
        
    while (document.getElementById('mySplitText')) {
        mySplitBox.removeChild(document.getElementById('mySplitText'));
    }
        
}


function startClear() {
    myStart.innerHTML = 'Start';
    myTimer.innerHTML = '00:00:00.000';
    result = 0;
    hh = 0;
    mm = 0;
    ss = 0;
    myPause = 0;
    clearInterval(intervalID);
    clearSplit();
    splitCounter = 0;
}


myStart.addEventListener('click', startCount);
mySplit.addEventListener('click', startSplit);
myReset.addEventListener('click', startClear);
