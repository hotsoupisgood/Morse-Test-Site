//
//
//var arrayOfNums;
//var arrayOfNumsX = 5;
//var arrayOfNumsY = 5;
//var fillArray = function () {
//    'use strict';
//    var y, x;
//    for (y = 0; y < arrayOfNumsY; y++) {
//        for (x = 0; x < arrayOfNumsX; x++) {
//            arrayOfNums[x][y] = Math.random() % 100;
//        }
//    }
//};
//var findBestRouts = function () {
//    'use strict';
//    var arrayOfBestTrips
//};

var testPackage = '<paper-material><div align = center id = "controls" ><paper-button id = "short" raised >.</paper-button><paper-button id = "long" raised>-</paper-button><div id = "outputDiv"> <paper-fab id = "outputFab">Hi</paper-fab></div></div><paper-fab id = "leftFab" disabled></paper-fab><paper-fab id = "rightFab" disabled></paper-fab></paper-material><div id = "outStringDiv" class = "centerText"></div>';
var indexPackage = '<a class="goodreference" href="http://www.learnmorsecode.com">Good Reference</a>';
var aboutPackage = 'I made dis';
var rootMorseTree;
var moveMorseTree;
var testOutPutString;
var Node = function (value, letter) {
    'use strict';
    this.value = value;
    this.letter = letter;
    this.nodeL = null;
    this.nodeR = null;
    return this;
};
Node.prototype.setUsedLetter = function (letter) {
    'use strict';
    this.letter = letter;
};
Node.prototype.setNavNumber = function (value) {
    'use strict';
    this.value = value;
};
var renewLetterFabs = function () {
    'use strict';
    if (document.getElementById('rightFab') !== null && document.getElementById('leftFab') !== null) {
        if (moveMorseTree.nodeL !== null) {
            document.getElementById('leftFab').innerHTML = moveMorseTree.nodeL.letter;
        } else {
            document.getElementById('leftFab').innerHTML = '';
        }
        if (moveMorseTree.nodeR !== null) {
            document.getElementById('rightFab').innerHTML = moveMorseTree.nodeR.letter;
        } else {
            document.getElementById('rightFab').innerHTML = '';
        }
    }
};
var refreshOutString = function () {
    'use strict';
    if (document.getElementById('outStringDiv') !== null) {
        document.getElementById('outStringDiv').innerHTML += moveMorseTree.letter;
    }
    if (document.getElementById('rightFab') !== null && document.getElementById('leftFab') !== null && document.getElementById('outputFab') !== null) {
        if (moveMorseTree.nodeL !== null) {
            document.getElementById('leftFab').innerHTML = '';
        }
        if (moveMorseTree.nodeR !== null) {
            document.getElementById('rightFab').innerHTML = '';
        }
        document.getElementById('outputFab').innerHTML = '';
    }
};
var resetMove = function () {
    'use strict';
    moveMorseTree = rootMorseTree;
};
var getMoveLetter = function () {
    'use strict';
    return moveMorseTree.letter;
};
var creatBst = function () {
    'use strict';
    rootMorseTree = new Node(16, " Holy Fucking Shit It's Raining");
    moveMorseTree = rootMorseTree;
    moveMorseTree = rootMorseTree;

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("E");
    moveMorseTree.setNavNumber(8);

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("I");
    moveMorseTree.setNavNumber(4);

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("S");
    moveMorseTree.setNavNumber(2);

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("H");
    moveMorseTree.setNavNumber(1);

    moveMorseTree.nodeL = null;
    moveMorseTree.nodeR = null;

    moveMorseTree = rootMorseTree;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("A");
    moveMorseTree.setNavNumber(12);

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("R");
    moveMorseTree.setNavNumber(10);

    moveMorseTree.nodeR = null;

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("L");
    moveMorseTree.setNavNumber(9);

    moveMorseTree.nodeL = null;
    moveMorseTree.nodeR = null;

    moveMorseTree = rootMorseTree;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree = moveMorseTree.nodeR;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("W");
    moveMorseTree.setNavNumber(14);

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("P");
    moveMorseTree.setNavNumber(13);

    moveMorseTree.nodeL = null;

    moveMorseTree.nodeR = null;

    moveMorseTree = rootMorseTree;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree = moveMorseTree.nodeR;

    moveMorseTree = moveMorseTree.nodeR;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("J");
    moveMorseTree.setNavNumber(15);

    moveMorseTree.nodeL = null;

    moveMorseTree.nodeR = null;

    moveMorseTree = rootMorseTree;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("V");
    moveMorseTree.setNavNumber(3);

    moveMorseTree.nodeL = null;

    moveMorseTree.nodeR = null;

    moveMorseTree = rootMorseTree;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("U");
    moveMorseTree.setNavNumber(6);

    moveMorseTree.nodeR = null;

    moveMorseTree.nodeL = new Node();
    moveMorseTree.nodeL.setUsedLetter("F");
    moveMorseTree.nodeL.setNavNumber(5);

    moveMorseTree.nodeL.nodeL = null;

    moveMorseTree.nodeL.nodeR = null;

    moveMorseTree = rootMorseTree;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("T");
    moveMorseTree.setNavNumber(28);

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("N");
    moveMorseTree.setNavNumber(22);

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("D");
    moveMorseTree.setNavNumber(19);

    moveMorseTree.nodeR = new Node();
    moveMorseTree.nodeR.setUsedLetter("X");
    moveMorseTree.nodeR.setNavNumber(21);

    moveMorseTree.nodeR.nodeR = null;

    moveMorseTree.nodeR.nodeL = null;

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("B");
    moveMorseTree.setNavNumber(17);

    moveMorseTree.nodeL = null;

    moveMorseTree.nodeR = null;

    moveMorseTree = rootMorseTree;

    moveMorseTree = moveMorseTree.nodeR;

    moveMorseTree = moveMorseTree.nodeL;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("K");
    moveMorseTree.setNavNumber(26);

    moveMorseTree.nodeL = new Node();
    moveMorseTree.nodeL.setUsedLetter("C");
    moveMorseTree.nodeL.setNavNumber(24);

    moveMorseTree.nodeL.nodeL = null;

    moveMorseTree.nodeL.nodeR = null;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("Y");
    moveMorseTree.setNavNumber(27);

    moveMorseTree.nodeL = null;

    moveMorseTree.nodeR = null;

    moveMorseTree = rootMorseTree;

    moveMorseTree = moveMorseTree.nodeR;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("M");
    moveMorseTree.setNavNumber(40);

    moveMorseTree.nodeR = new Node();
    moveMorseTree.nodeR.setUsedLetter("O");
    moveMorseTree.nodeR.setNavNumber(42);

    moveMorseTree.nodeR.nodeL = null;

    moveMorseTree.nodeR.nodeR = null;

    moveMorseTree.nodeL = new Node();
    moveMorseTree = moveMorseTree.nodeL;
    moveMorseTree.setUsedLetter("G");
    moveMorseTree.setNavNumber(34);

    moveMorseTree.nodeL = new Node();
    moveMorseTree.nodeL.setUsedLetter("Z");
    moveMorseTree.nodeL.setNavNumber(31);

    moveMorseTree.nodeL.nodeL = null;

    moveMorseTree.nodeL.nodeR = null;

    moveMorseTree.nodeR = new Node();
    moveMorseTree = moveMorseTree.nodeR;
    moveMorseTree.setUsedLetter("Q");
    moveMorseTree.setNavNumber(38);

    moveMorseTree.nodeL = null;

    moveMorseTree.nodeR = null;
    
    resetMove();
    
    return this;
};
var shortFunc = function () {
    'use strict';
    if (moveMorseTree.nodeL !== null) {
        var tempNode = moveMorseTree;
        moveMorseTree = tempNode.nodeL;
    }
    if (document.getElementById('outputFab') !== null) {
        document.getElementById('outputFab').innerHTML = moveMorseTree.letter;
    }
    renewLetterFabs();
};
var longFunc = function () {
    'use strict';
    if (moveMorseTree.nodeR !== null) {
        var tempNode = moveMorseTree;
        moveMorseTree = tempNode.nodeR;
    }
    if (document.getElementById('outputFab') !== null) {
        document.getElementById('outputFab').innerHTML = moveMorseTree.letter;
    }
    renewLetterFabs();
};
var app = {
    // Application Constructor
    initialize: function () {
        'use strict';
        this.bindEvents();
        creatBst();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        'use strict';
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        'use strict';
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        'use strict';
        var parentElement = document.getElementById(id), listeningElement = parentElement.querySelector('.listening'), receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};