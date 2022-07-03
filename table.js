//TO RETRIEVE THE DATA
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const name = urlParams.get('name');
const father_name = urlParams.get('father_name');
const identity = urlParams.get('identity');
const instituion = urlParams.get('instituion');
const phone = urlParams.get('phone');
const email = urlParams.get('email');
const major = urlParams.get('major');
const semester = urlParams.get('semester');

const subject_1_name = urlParams.get('1_name');
const subject_1_total = urlParams.get('1_total');
const subject_1_obtained = urlParams.get('1_obtained');

const subject_2_name = urlParams.get('2_name');
const subject_2_total = urlParams.get('2_total');
const subject_2_obtained = urlParams.get('2_obtained');

const subject_3_name = urlParams.get('3_name');
const subject_3_total = urlParams.get('3_total');
const subject_3_obtained = urlParams.get('3_obtained');

const subject_4_name = urlParams.get('4_name');
const subject_4_total = urlParams.get('4_total');
const subject_4_obtained = urlParams.get('4_obtained');

const subject_5_name = urlParams.get('5_name');
const subject_5_total = urlParams.get('5_total');
const subject_5_obtained = urlParams.get('5_obtained');

//TO SHOW THE DATA
var element = document.getElementById('name');
element.innerHTML = name;
var element = document.getElementById('father_name');
element.innerHTML = father_name;
var element = document.getElementById('identity');
element.innerHTML = identity;
var element = document.getElementById('instituion');
element.innerHTML = instituion;
var element = document.getElementById('phone');
element.innerHTML = phone;
var element = document.getElementById('email');
element.innerHTML = email;
var element = document.getElementById('major');
element.innerHTML = major;
var element = document.getElementById('semester');
element.innerHTML = semester;

//SUBJECT RETRIEVE
var element = document.getElementById('subject_name_1');
element.innerHTML = subject_1_name;
var element = document.getElementById('subject_total_1');
element.innerHTML = subject_1_total;
let x1 = + subject_1_total;
var element = document.getElementById('subject_obtained_1');
element.innerHTML = subject_1_obtained;
let y1 = + subject_1_obtained;

var element = document.getElementById('subject_name_2');
element.innerHTML = subject_2_name;
var element = document.getElementById('subject_total_2');
element.innerHTML = subject_2_total;
let x2 = + subject_2_total;
var element = document.getElementById('subject_obtained_2');
element.innerHTML = subject_2_obtained;
let y2 = + subject_2_obtained;

var element = document.getElementById('subject_name_3');
element.innerHTML = subject_3_name;
var element = document.getElementById('subject_total_3');
element.innerHTML = subject_3_total;
let x3 = + subject_3_total;
var element = document.getElementById('subject_obtained_3');
element.innerHTML = subject_3_obtained;
let y3 = + subject_3_obtained;

var element = document.getElementById('subject_name_4');
element.innerHTML = subject_4_name;
var element = document.getElementById('subject_total_4');
element.innerHTML = subject_4_total;
let x4 = + subject_4_total;
var element = document.getElementById('subject_obtained_4');
element.innerHTML = subject_4_obtained;
let y4 = + subject_4_obtained;

var element = document.getElementById('subject_name_5');
element.innerHTML = subject_5_name;
var element = document.getElementById('subject_total_5');
element.innerHTML = subject_5_total;
let x5 = + subject_5_total;
var element = document.getElementById('subject_obtained_5');
element.innerHTML = subject_5_obtained;
let y5 = + subject_5_obtained;

var element = document.getElementById('total_total');
element.innerHTML = x1 + x2 + x3 + x4 + x5;
var element = document.getElementById('total_obtained');
element.innerHTML = y1 + y2 + y3 + y4 + y5;