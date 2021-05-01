//Declaration Part 
var i_a_size = document.getElementById('array_size'),
    a_size = i_a_size.value;
var a_speed = document.getElementById("array_speed");
var div_size = [];
var divs = [];
var speed = 1000, delay = 0;
var a_container = document.getElementById("Array_Container");
var generate = document.getElementById("array_generate");
var stop = document.getElementById("stop_sort");
var algo_btn_arr = document.querySelectorAll("button");



//Onload update the array size and generates array
window.onload = update_array_size();
window.onload = v_speed();

a_container.style = "flex-direction: row";

//EventListeners
generate.addEventListener("click", generate_new_array);
stop.addEventListener("click",stop_sort);
i_a_size.addEventListener("input", update_array_size);
a_speed.addEventListener("input", v_speed);
var bool = false;

for (var i = 0; i < algo_btn_arr.length; i++) {
    algo_btn_arr[i].addEventListener("click", add_class);
}





//Functions Part

// Generates Random Array
function generate_new_array() {
    a_container.innerHTML = "";


    for (var i = 0; i < a_size; i++) {
        div_size[i] = Math.floor(Math.random() * 0.5 * (i_a_size.max - i_a_size.min)) + 10;
        divs[i] = document.createElement("div");
        a_container.appendChild(divs[i]);

        divs[i].style = "margin:0.1%; background-color: turquoise; width: " + (100 / (a_size - (2 * 0.1))) + "%; height:" +
            (div_size[i]) + "%;";

    }
    generate.classList.remove("selected");
}
function stop_sort(){
  generate_new_array();
}

//Updates Array every time range input is changes
function update_array_size() {
    a_size = i_a_size.value;
    generate_new_array();
}

//Disables All Button While Sorting 
function disable_btn() {
    for (i = 0; i < algo_btn_arr.length; i++) {
        algo_btn_arr[i].disabled = true;
        algo_btn_arr[i].classList.toggle("btn_locked", true);

    }
    i_a_size.disabled = true;
    a_speed.disabled = true;
    generate.disabled = true;


}

//function sets the timeout delay using the range given from input a_speed
function v_speed() {

    switch (parseInt(a_speed.value)) {
        case 1: speed = 500;
            break;
        case 2: speed = 100;
            break;
        case 3: speed = 50;
            break;
        case 4: speed = 15;
            break;
        case 5: speed = 11;
            break;
        case 6: speed = 10;
            break;
        case 7: speed = 5;
            break;
        case 8: speed = 2;
            break;
        case 9: speed = 1;
            break;
        case 10: speed = 0.5;
            break;
    }

}

// function Changes the color during the animation
function change_color(cont, height, color) {
    window.setTimeout(function () {

        cont.style = "margin:0.1%; background-color: " + color + "; width: " + (100 / (a_size - (2 * 0.1))) + "%; height:" +
            (height) + "%;";

    }, delay += speed);

}

//function enables the button
function enable_btn() {
    window.setTimeout(function () {
        for (i = 0; i < algo_btn_arr.length; i++) {
            algo_btn_arr[i].disabled = false;
            algo_btn_arr[i].classList.toggle("btn_locked", false);
        }
        i_a_size.disabled = false;
        a_speed.disabled = false;
        generate.disabled = false;

    }, delay);
}

function add_class() {

    this.classList.add("selected");


}

function remove_class(btn) {

    window.setTimeout(function () { btn.classList.toggle("selected", false); }, delay);


}

//NAVIGATION functioN

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




