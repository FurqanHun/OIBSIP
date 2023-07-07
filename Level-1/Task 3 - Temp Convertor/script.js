const temp = document.getElementById("temp");
temp.addEventListener("keypress", function(event) {
  const key = event.key;
  const allowedKeys = ["-", "+"]; // Allowed keys
  if (temp.value === "" && allowedKeys.includes(key)) {
    //baaaaby shark dududududu baby duduudududu
  } else if (allowedKeys.includes(key)) { //if + or - is pressed again
    alert("hoi hoi hoi cant write + or - multiple times...");
    event.preventDefault();
  } else if(key === "."){ //if key is a dot
    if(temp.value.includes(".")){ //if there is already a dot
      alert("why do your temp has multiple dots in it?");
      event.preventDefault();
    } else{
      allowedKeys = ["."];
    }
  }else if(key == "Enter"){
    convert();

  }
  else if(isNaN(key)){ //if key is not a number
      alert("why do your temp has characters in it?");
      event.preventDefault();
    }
else
  {//if key is a number
    allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
});

const myButton = document.querySelector('#submit-btn'); //event listener for button
myButton.addEventListener("click", function() {
  convert();
});

function convert() {
  let temp = document.getElementById("temp").value;
  let unit = document.getElementById("unit").value;

  const celcius = document.getElementById("celcius");
  const fahrenheit = document.getElementById("fahrenheit");
  const kelvin = document.getElementById("kelvin");

  if(unit === "celcius"){
    celcius.textContent = temp + " °C";
    fahrenheit.textContent = (temp * 9/5) + 32 + " °F";
    kelvin.textContent = (temp * 1) + 273.15 + " K";
  }
  else if(unit === "fahrenheit"){
    celcius.textContent = (temp - 32) * 5/9 + " °C";
    fahrenheit.textContent = temp + " °F";
    kelvin.textContent = (temp - 32) * 5/9 + 273.15 + " K";
  }
  else if(unit === "kelvin"){
    celcius.textContent = temp - 273.15 + " °C";
    fahrenheit.textContent = (temp - 273.15) * 9/5 + 32 + " °F";
    kelvin.textContent = temp + " K";
  }
  
  console.log(temp);
  console.log(unit);
  console.log(celcius.textContent);
  console.log(fahrenheit.textContent);
  console.log(kelvin.textContent);
}
