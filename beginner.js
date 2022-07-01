// Basic Function that adds two numbers together
function addition (num1, num2){
    return num1 + num2
}
console.log(addition(3,2))
console.log(addition(-3,-6))
console.log(addition(7,3))

// Basic Function that converts hours into seconds
function hoursIntoSeconds (hourAmount){
    return hourAmount * 60 * 60
}
console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))

// Basic Function that converts the Perimeter of a Rectangle
function calcPerimeter(length, width){
    return (length * 2) + (width * 2)
}
console.log(calcPerimeter(6,7))
console.log(calcPerimeter(20,10))
console.log(calcPerimeter(2,9))

// Basic Function that calculates the Area of a Triangle
function calcTriangleArea(base, height){
    return 0.5 * base * height
}
console.log(calcTriangleArea(3,2))
console.log(calcTriangleArea(10,10))
console.log(calcTriangleArea(20,20))

// Basic Function that accepts a string and adds 'Frontend' onto the end of it
// Can convert string into number: (+num) if input is string '1'
function appendFrontend (string){
    return string + 'Frontend'
}
console.log(appendFrontend('apple'))
console.log(appendFrontend('banana'))
console.log(appendFrontend('orange'))

// Basic Function returns sum of both nubmers thatis greater than 100
function sumGreaterThan100 (num1, num2){
    if (num1 + num2 > 100){
        return true;
    }
    else{
        return false;
    }
}
console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

// Basic Function that returns true if number is less than or equal to zero
function lassThanOrEqualToZero (number){
    return number <= 0;
}
console.log(lassThanOrEqualToZero(3));
console.log(lassThanOrEqualToZero(0));
console.log(lassThanOrEqualToZero(-2));

// Given boolean, return opposite boolean
function oppositeBoolean (bool){
    return !bool
}
console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

// Basic Function that returns true if number is not 0
function isNotZero (element){
    return element !== 0;
}
console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

// Basic Function that calculates remainder
function calcRemainder (num1, num2){
    return num1 % num2;
}
console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

// Basic Function that returns true if number is odd
function isOdd (num) {
    return (num % 2) !== 0
}
console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

// Basic Function that if number is even return 1, else return -1
function booleanInteger(num){
    return (num % 2) === 0 ? 1 : -1
}
console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

// Basic Function that check if user is logged in and subscribed
function isLoggedInAndSubscribed (string1, string2) {
    return (string1 === 'LOGGED_IN') && (string2 === 'SUBSCRIBED')
}
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));