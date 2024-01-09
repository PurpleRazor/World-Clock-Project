alert("hello");

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");

sydneyDateElement.innerHTML = moment().format("mmmm Do YYYY");
sydneyTimeElement = "1:49:15 <small>AM</small>";
