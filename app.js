// Question 1===============================================================================

function btn1() {
var num = document.getElementById("ask").value;


var round = Math.round(num);
var flor =Math.floor(num);
var ciel = Math.ceil(num);

document.getElementById("num").innerText = num; 


document.getElementById("round").innerText = round; 


document.getElementById("floor").innerText = flor; 


document.getElementById("ciel").innerText = ciel; 
}


// Question 2===============================================================================

function btn2 () {
var mnum =document.getElementById("ask1").value ;

document.getElementById("mnum").innerText = mnum; 

var round = Math.round(mnum);
document.getElementById("mround").innerText = round; 

var flor =Math.floor(mnum);
document.getElementById("mfloor").innerText = flor; 

var ciel = Math.ceil(mnum);
document.getElementById("mciel").innerText = ciel; 

}

// Question 3===============================================================================

function btn3 () {
var pnum =document.getElementById("ask2").value  ;

document.getElementById("pnum").innerText = pnum; 

var round = Math.round(pnum);
document.getElementById("pround").innerText = round; 

var flor =Math.floor(pnum);
document.getElementById("pfloor").innerText = flor; 

var ciel = Math.ceil(pnum);
document.getElementById("pciel").innerText = ciel; 

}

// Question 4===============================================================================

function btn4 () {
var mpnum = document.getElementById("ask3").value;

document.getElementById("mpnum").innerText = mpnum; 

var round = Math.round(mpnum);
document.getElementById("mpround").innerText = round; 

var flor =Math.floor(mpnum);
document.getElementById("mpfloor").innerText = flor; 

var ciel = Math.ceil(mpnum);
document.getElementById("mpciel").innerText = ciel; 

}

// Question 5===============================================================================

function btn5 () {
var abs = document.getElementById("ask4").value ;
var result= Math.abs(abs);
document.getElementById("abs").innerText = abs + " is " + result;
}

// Question 6===============================================================================

var rndom =Math.floor( Math.random()*6);
document.getElementById("rndm").innerText = rndom; 

// Question 7===============================================================================

var coin =["Heads","Tails"];
var result1 = coin[Math.floor( Math.random() * coin.length)];
document.getElementById("coin").innerText = result1; 

// Question 8===============================================================================

var random  = Math.floor( Math.random()*100);
document.getElementById("rndmValue").innerText = random; 

// Question 9===============================================================================
function btn6 () {
var weight = document.getElementById("ask5").value;
document.getElementById("weight").innerText = weight + " Kilograms"; 
}

// Question 10===============================================================================
function btn7 () {

var secret = Math.floor( Math.random()*10);
var user = document.getElementById("secret").value;
 if (user == secret) {
    document.getElementById("cong").innerText="Congratulation";

 }

 else {
    user !== secret;
    document.getElementById("again").innerText="Sorry Guess again!";
 }

 document.getElementById("actual").innerText="The Actual Number is " + secret;
 

}

// Question 11===============================================================================

var current = new Date();
document.getElementById("current").innerHTML=current;

// Question 12===============================================================================

var monthsArray = ["Januaury","Febuaury" ,"March","April","May","June","July","August","September",
"October","November","December"];

var date = new Date();
var month = date.getMonth();
var final = monthsArray[month];
document.getElementById("mnth").innerText=final;

// Question 13===============================================================================

var daysArray =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var days = date.getDay();
var final1 = daysArray[days];
document.getElementById("days").innerText=final1;

// Question 14===============================================================================
var daysArray =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var days = date.getDay();
var final1 = daysArray[days];
if (final1 === [0] || final1 === [6]) {
    document.getElementById("fun").innerText="It's Fun day";

}

else {
    document.getElementById("normal").innerText="It's Normal day";
}

// Question 15===============================================================================

var dayMonth = date.getDate();

if (dayMonth <= 15) {
    document.getElementById("first").innerText="First fifteen days of month";
}

else {
    document.getElementById("last").innerText="Last days of month"
}

// Question 16===============================================================================
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)


// Question 17===============================================================================

var hours = date .getHours();
if (hours < 12) {
    document.getElementById("am").innerText="It's AM"
}

else {
    hours >= 12;
    document.getElementById("pm").innerText="It's PM"


}


// Question 18===============================================================================
var today = new Date();
var currentYear=today.getFullYear();
var previousYear= currentYear-2;  
var lastMonth = 12;
var laterDate = new Date(previousYear, lastMonth,0 );
document.getElementById("later").innerText=laterDate;


// Question 19===============================================================================

var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
var todayy = current.getDate();
var ramadan = new Date(2015, 5, 15);

var diff = Math.round(Math.floor((todayy - ramadan) / oneDay));
diff =Math.abs(diff);

document.getElementById("rday").innerText =todayy;
document.getElementById("lday").innerText =diff;

// Question 20===============================================================================
var todayDate = new Date();
var specifiedDate = new Date(2015, 11, 5);
specifiedDate.setHours(22);
specifiedDate.setMinutes(50);
specifiedDate.setSeconds(16);

var seconds = Math.round(Math.floor((todayDate - specifiedDate) / 1000));

document.getElementById("ref").innerText= specifiedDate;
document.getElementById("sec").innerText= seconds;


// Question 21===============================================================================
var minus = new Date()
document.getElementById("crrnt").innerText =minus;
minus.setHours( minus.getHours()-1);

document.getElementById("minus").innerText =minus;


// Question 22===============================================================================

var minusYear = new Date()
document.getElementById("crrntDate").innerText =minusYear;
minusYear.setFullYear( minusYear.getFullYear()-100);

document.getElementById("oldYear").innerText =minusYear;

// Question 23===============================================================================

function age () {
    var userInput = document.getElementById("age").value;
    var neww = new Date();
    var birthYear = neww .getFullYear();
    var finalResult = birthYear - userInput;
    document.getElementById("userAge").innerText =userInput;
    document.getElementById("userBirthYear").innerText =finalResult;

}


// Question 24===============================================================================
function clickk () {

var monthsArray = ["Januaury","Febuaury" ,"March","April","May","June","July","August","September",
"October","November","December"];

var billMonth = new Date().getMonth();
var currentBillMonth = monthsArray[billMonth];
var userName = document.getElementById("customerName").value;
var userUnit = document.getElementById("units").value;
var charges = 14
var subCharges=500;
var netAmount = userUnit * charges;
var grossAmount = netAmount + subCharges;
document.getElementById("name").innerText=userName;
document.getElementById("billMonth").innerText=currentBillMonth;
document.getElementById("unit").innerText=userUnit;
document.getElementById("charges").innerText=charges;
document.getElementById("net").innerText=netAmount;
document.getElementById("sub").innerText=subCharges;
document.getElementById("gross").innerText=grossAmount;

}


// Question 25===============================================================================


























































