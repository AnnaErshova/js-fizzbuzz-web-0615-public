'use strict';

var fizzbuzz = function fizzbuzz(i){
  {
    if (i%15 === 0) {
      return "FizzBuzz";
    } else if (i%5 === 0) {
      return "Buzz";
    } else if (i%3 === 0) {
      return "Fizz";
    } else {
      return i;
    }
  }
};


//var fizzbuzz = function fizzbuzz(i){
//  var a = i % 3 == 0; // true 
//  var b = i % 5 == 0; // false
//  return (a ? (b ? "FizzBuzz" : "Fizz") : (b ? "Buzz" : i));
//};
