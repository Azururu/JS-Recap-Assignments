const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');

const celcius = parseFloat(prompt("Enter a temperature in celcius"));

const f = (celcius * 9 / 5) + 32;
const strFahrenheit = f.toString();


const k = celcius + 273.15;
const strKelvin = k.toString();
fahrenheit.innerText = strFahrenheit;
kelvin.innerText = strKelvin;