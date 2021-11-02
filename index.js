//Daniela Roscero-Intro to Javascript Assignment

// Import stylesheets
import './style.css';

//Const and Var Keywords
const FAVORITE_BOOK = 'Circe'
var currentRead = 'The Murmur of the Bees'
var currentRead = '1984'
/*The variable can be revalued, but if you try to revalue the constant, there will be an error. In this hypothetical, I'm assumung my favorite book will not change, so I won't ever try to reassign value to that const.
*/

//String Interpolation
var firstName = 'Daniela';
var lastName = 'Roscero';
var fullName = `My name is ${firstName + lastName}`;
console.log(fullName);

//Basic Math
var uspopulation = 328239523; //Census Bureau, 2019: https://www.census.gov/quickfacts/fact/table/US/PST045219
var usgdp = 21430000000; //World Bank, 2019: https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?end=2020&locations=US&start=1960
console.log(usgdp / uspopulation);


//Java Function
function stringLength (argument) {
if (argument.length >= 10) {
  console.log ("long")
  } else {
  console.log ("short")
return argument.length
  }
}
console.log (stringLength("Texas"))
console.log (stringLength ("University of Texas at Austin"))

/*
OBJECTS
Objects are a way to store data. Each object also has a series of properties that describe it.
Object example below
*/ 
var house = {
  "address": "129 Main St, Ausitn TX, 78705"
  "floors": 3,
  "bedrooms": 4,
  "bathrooms": 2
};

/*
ARRAYS
Arrays are lists of objects. In other words, each of the lised items represents an object that can be referenced later by indicating which number of the listed items you want to see. 
Array example below 
*/
const fruits = ["orange" , "strawberry" , "pear"];