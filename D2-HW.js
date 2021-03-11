/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

 /*
(Numbers)
    Integer values, decimals e.g. 1 , 3.14 If we wanted to do any kind of math in javascript say 5 + 10 we would use number values using the appropiate operands in this
    case '+' to add them together, if we typed this in the console it would return 15.

 (Strings)
  A string in javascript is a data type that we can use to store a series of characters enclosed by single|double quotes
  that includes numbers, letters/words and symbols e.g. 

  lets say we wanted to store an email address, in this case we would use a string..

  let myEmail = "carlanthony782@gmail.com" // Here we have declared a variable with a value of a string that contains an email address

  The reason why a string is suitable is because an email is essentially a line of text that consist of letters, numbers(with no numeral value), symbols
  and allows us to use strings methods that let us change the string or retreive specific information from the string such as the first letter etc.
            

(Boolean) - True or False(Yes or No)
    A value that equates to either true or false, e.g.In the console if we type 30 > 20 the result of the arithmetic is true, because 30 is more than 20
    similarly if we was type 100 == 5  the result will be false, because 100 is not equal 5.

 (Null & Undefined)
    Both of these data types are similar in their value of being equal to nothing but they both have their differences.

 (Undefined) - Is the un-intentional use of a value that is equal to nothing in an erroneous context, e.g.
               Trying to use a variable without declaring it will return a value of undefined.

 (Null) - Is the intentional use of a value that is equal to nothing, e.g lets say we are trying to test
        the condition of an input field within a form to see whether the input field has a value or not. 
        In this case we can use null to determine if the input field is empty because it contains no value.

 */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/
/*
    A variable is how we store values in javaScript, that we can reference to use/manipulate later on.
    or instance lets say we want to add two numbers together but not at this current time, 
    we can assign the values to variables...

e.g.
    let num1 = 50 //variable name num1
    let num2 = 8//variable name num2

    We have now declared two variables that we can reference by using the name associated with each variable 
    and the freedom to use them whenever and wherever we like

    Calling the variables via console.log using their designated names with a plus(+) operand inbetween them,
    allows us to add the values of both variables together and in this case returning a correct answer of 58!
     console.log(num1 + num2) //Output 58
*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

    let num1 = 12
    let num2 = 20
    console.log(num1+num2)

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* WRITE YOUR CODE HERE */

    let x = 12

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

    let name = "John Doe"

/* 

EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

/* WRITE YOUR CODE HERE */

    console.log(x-12);

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* WRITE YOUR CODE HERE */

    let name1 = "john"
    let name2 = "John"

        if(name1 != name2){
            console.log('name1 is different from name2')
        }
        else if(name1.toLowerCase === name2.toLowerCase){
            console.log('name1 is equal to name2');
        }


/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* WRITE YOUR CODE HERE */
//Update using array
     x = 7
    let numberStrings = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
        console.log(numberStrings[x-1]);
//Using the number 7 via the value of variable 'x' and subtracting 1 making the index value '[6]',
//we access the numberString array thats contains the conversion of numbers 1-9 in words 
//using the index position and obtain the string "Seven" the word conversion of 7.
//The index value of 6 gets "Seven" because arrays start counting from zero.

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/


    let walkBreakInSecs = 0;
    let run = (walkBreakInSecs === 30 ) ? "Get the running!"/*Value if True*/ : "Walk for 30 seconds "/*Value if False*/
    console.log(run);


//Function Example
//Depending if the argument passed is the boolean value true or false, will determine whether "Morning"(true) or "Night"(false) is logged to the console.
    function day(time){
            return (time ? "Morning" : "Night");
        }
        let work= day(true)
        let sleep =  day(false)

        console.log(work);//Result "Morning"
        console.log(sleep);//Result "Night"

