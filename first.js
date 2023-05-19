// console.log("This is log");


// console.log(typeof numberOfStudents); //undefined
// var numberOfStudents = 25;
// console.log(typeof numberOfStudents); //number
// numberOfStudents = 99;
// console.log(typeof (typeof numberOfStudents)); //string
// numberOfStudents = "nineteen"
// console.log(typeof numberOfStudents); //string


// var1 = 23;
// console.log(typeof var1); 
// var2 = "hello";
// console.log(typeof var2); 
// var3 = null;
// console.log(typeof var3);


// myName = "Meera";
// myAge = "23";
// console.log(myName, myAge);
// console.log(myName.indexOf("A"));
// console.log(myName[0]);
// console.log(myName.charAt(3));
// console.log(myName.indexOf("e"));
// console.log(myName.lastIndexOf("e"));


// longString = "hey there my name is meera";
// console.log(longString.endsWith("there"));
// console.log(longString.endsWith("meera"));
// console.log(longString.length);
// console.log(longString.includes("meera"));

// console.log(3 + "3"); //33
// console.log(3 * "3"); //9


// console.log(eval("2 + 2"));
// console.log(2 + parseInt("2"));
// console.log(2 + parseInt("ksjeiwfhf")); //NaN - not a number


// var toBeEvaluated = eval(""); // to test, write 3 + 3, or \"qwerty\", or false
// if (isNaN(toBeEvaluated) == true) 
// {

//     console.log("I cannot proceed")

//     if (typeof(toBeEvaluated) == "string") 
//     {

//         console.log(toBeEvaluated[toBeEvaluated.length-1])

//     }

// }
// else if (isNaN(toBeEvaluated) == false)
// {

//     console.log(toBeEvaluated * 3)

// }
// else 
// {

//     console.log(toBeEvaluated)

// }


// // Another way
// var toBeEvaluated = eval("false"); // to test, write 3 + 3, or \"qwerty\", or false
// if (typeof(toBeEvaluated) == "string") 
// {

//     var lastIndex = toBeEvaluated.length - 1;
//     console.log(toBeEvaluated.charAt(lastIndex))

// }
// else
// {

//     var valueToPrint = isNaN(toBeEvaluated) ? "I cannot proceed" : (typeof toBeEvaluated == "number") ? parseInt(toBeEvaluated) * 3 : toBeEvaluated;
//     console.log(valueToPrint)

// }


// currentDay = "Thursday"
// switch(currentDay)
// {

//     case "Saturday":
//         console.log("woohoo");

//     case "Sunday":
//         console.log("go back to sleep");
//         break;
    
//     case "Friday":
//         console.log("weekend!");
//         break;
    
//     default:
//         console.log("time to work");
//         break;
    
// }


// for (i = 0; i <= 100; i++)
// {
//     if (i % 2 == 0)
//     {
//         console.log(i)
//     }
// }


// for (i = 0; i <= 100; i += 2)
// {
//     console.log(i)
// }


// while (i <= 100)
// {
//     if (i % 2 == 0)
//     {
//         console.log(i)
//     }
//     i++
// }


// var myArray = [1, 2, 3];
// console.log(myArray);
// myArray[0] = 5
// console.log(myArray);
// myArray = 7;
// console.log(myArray);


// myArray = [1, 2, 3];
// myNewArray = myArray;
// console.log(myNewArray);
// myArray[1] = 6;
// console.log(myNewArray); // The new array will change when we change the old array - because they would have the same reference


// // To prevent that from happening
// myArray = [1, 2, 3];
// myNewArray = [...myArray];
// console.log(myNewArray);
// myArray[1] = 6;
// console.log(myNewArray);


// var myArr = [1, 2, "Meera", true];
// var myNewArr = [...myArr];
// for (var i = 0; i < myArr.length; i++)
// {

//     console.log(myArr[i])

// }


// studentNames = ["Meera", "Alya", "Shumookh", "Fatima"]
// for (i = 0; i < studentNames.length; i++) 
// {

//    toPrint = "Student " + studentNames[i] + " is number " + i.toString();
//    console.log(toPrint);

// }


// numbersArray = [1, 2, 3];
// reveresedArray = [];
// x = 0;
// for (i = numbersArray.length-1; i >= 0; i--) 
// {

//     reveresedArray[x] = numbersArray[i];
//     x++

//     //reveresedArray.push(numbersArray[i]); // Another way to do it

// }
// console.log(reveresedArray);


// lettersArray = ["x", "y", "z"];
// reveresedLetters = [];
// for (i = lettersArray.length-1; i >= 0; i--) 
// {

//    newIndex = lettersArray.length - 1 - i;
//    reveresedLetters[newIndex] = lettersArray[i];

// }
// console.log(reveresedLetters);


// nameArray = ["Meera", "Alya", "Shumookh", "Fatima"];
// console.log(nameArray.includes("Alya"));
// console.log(nameArray.map(firstName => "Ms. " + firstName));


// function hello() 
// {

//     alert("HELLO THERE");

// }
// hello();


// function helloName(name)
// {
    
//     alert("Hello, " + name);

//     return "You are the best";

// }
// print = helloName("Meera");
// console.log(print) // We need to return something otherwise it will return undefined


// function arrayConverter(array)
// {

//     newArray = []

//     for (i = 0; i < array.length; i++)
//     {

//         if (typeof(array[i]) === "string")
//         {
//             newArray[i] = array[i].toUpperCase();
//         }
//         else if (typeof(array[i]) === "number")
//         {
//             newArray[i] = array[i] ** 2;
//         }
//         else
//         {
//             newArray[i] = null;
//         }
        
//     }

//     return newArray;

// }
// testArray = ["hello", 2, false];
// console.log(arrayConverter(testArray));


// var courseInfo = new Object();
// courseInfo["topic"] = "javascript";
// courseInfo["duration"] = "5 days";
// courseInfo["numOfStudents"] = 25;
// courseInfo["students"] = ["momo", "aoao", "shosho"];
// console.log(courseInfo);
// for(key in courseInfo)
// {

//     var value = courseInfo[key]
//     console.log(key, "=", value);

// }



// function hello()
// {

// }
// var hello = function()
// {

//     console.log("Hello world")

// }
// courseInfo["hello"] = hello;
// courseInfo["hello"]();
// courseInfo.hello();


// var work = new Object();
// work.place = "Edge";
// console.log(work.place);
// work.place = "Abu Dhabi";
// console.log(work.place);


// randomArr = [1,2,3,4,5];
// for (i in randomArr)  // "in" iterates the indexes, one by one
// {

//     console.log(i);
//     console.log(randomArr[i]);

// }


// randomArr = [1,2,3,4,5];
// for (i of randomArr)  // "of" iterates the values, one by one
// {

//     console.log(i);

// }


// // Another way to create objects
// courseInfo = 
// {

//     topic: "javascript",
//     duration: 5,
//     numOfStudents: 25,

// }


// function iterateObjects(objArray) 
// {

//     var newArray = [];

//     // Each iteration is an object
//     for (var obj of objArray) 
//     {

//         var keyStr = "";

//         // Each iteration is a key
//         for (var key in obj) 
//         {

//             keyStr += key + " ";

//         }
//         newArray.push(keyStr)

//     }

//     return newArray;

// }
// testArray = [{name: "Meera", age: 45}, {time: 24, size: 33}];
// console.log(iterateObjects(testArray));


// function nullValues(objArray) 
// {

//     for (var obj of objArray)
//     {

//         for (var key in obj)
//         {

//             obj[key] = null;

//         }

//     }

//     return objArray;

// }
// testArray = [{name: "Meera", age: 45}, {time: 24, size: 33}];
// console.log(nullValues(testArray));


// var person1 = {firstname: "Meera", age: 22};
// var person2 = {...person1, firstname: "Alya", score: 100};
// person1.age = 23;
// console.log("Person 1:", person1);
// console.log("Person 2:", person2);


// var arr1 = ["s", "o", "s"];
// var arr2 = [...arr1, "help"];
// console.log("Array 1:", arr1);
// console.log("Array 2:", arr2);


// var target = { a: 1, b: 2 };
// var source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject);
// // Output: { a: 1, b: 3, c: 4 }
// console.log(target);
// // Output: { a: 1, b: 3, c: 4 }


// const target = {};
// const source = { a: 1, b: 2 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject);
// // Output: { a: 1, b: 2 }
// console.log(target);
// // Output: { a: 1, b: 2 }


// var error = new Error("This is my new error");
// console.log(error);
// throw error; // If an error is thorwn, everything under it will not continue and the execution will stop


// try 
// {

//     var error = new Error("This is my new error");
//     throw error; // throw error so we can catch it, or the code will continue executing with the error

// }
// catch(e)
// {

//     console.log("Error has been caught");
//     console.log(e)

// }
// finally
// {

// console.log("I will always be executed!");

// }
// console.log("I'm done")


// var pi = 3.14159;
// pi.toFixed(10000); // RangeError


// function foo() {
//     bar++ // ReferenceError
// }


// var foo = {};
// foo.bar(); // TypeError


// var userInput = prompt("Please tell me what you need");
// console.log(userInput);


// function getNamesFromTheUser(message) 
// {

//     var userInput = prompt(message);
//     var namesList = userInput.split(",");

//     if (namesList.length < 2) 
//     {
//         throw new Error("User has provided less than two names!");
//     }

//     return namesList;

// }
// try 
// {

//     var names = getNamesFromTheUser("Please enter comma seperated list of users");
//     console.log("We have got the names:", names);

// }
// catch (e)
// {

//     try 
//     {

//         var names = getNamesFromTheUser("You didn't provide what was needed, please try again");
//         console.log("We have got the names:", names);

//     }
//     catch (e)
//     {

//         alert("Sorry, but you dont want to help me...");

//     }

// }
// console.log("We are done!");


// function getNumbersFromUser(message)
// {

//     var userInput = prompt(message);
//     if (!userInput.length) // If no user input was provided
//     {
//         console.warn("User input is empty!")
//     }
//     var strNumbersList = userInput.split(",");
//     var numbersList = [];

//     for(strnum of strNumbersList)
//     {

//         num = parseInt(strnum);

//         if (isNaN(num))
//         {
//             throw new TypeError("TypeError - This is not a number");
//         }
//         else
//         {
//             numbersList.push(num);
//         }

//     }

//     alert("Thank you for your help");
//     return numbersList;

// }
// try
// {

//     var numbers = getNumbersFromUser("Please enter comma seperated list of numbers");
//     console.log("List of numbers:", numbers);

// }
// catch(e)
// {

//     console.error("Something is wrong!")

//     try 
//     {
    
//         var numbers = getNumbersFromUser("You need to enter numbers only!");
//         console.log("List of numbers:", numbers);

    
//     }
//     catch (e)
//     {

//         console.error("Something is wrong!")
//         alert(e.message);
    
//     }

// }
// console.log("We are done!");


// function createSandwich(ingredients)
// {

//     if (!ingredients)
//     {

//         console.log("Sorrym cannot do it");
//         return;

//     }
//     console.log("I'm creating the sandwich with these ingredients: ", ingredients);

// }
// function getIngredients(createSand)
// {

//     console.log("Going to the market");
//     console.log("Buying stuff...");
//     var ingredients = ["tomato", "bread", "mayo"];

//     try
//     {

//         createSand(ingredients);

//     }
//     catch(e)
//     {

//         console.log("cannot create");

//     }

// }
// getIngredients(createSandwich);


// function helloWorld()
// {

//     console.log("Hello World");

// }
// console.log("Step1");
// var timerID = setTimeout(helloWorld, 3000);
// console.log("Timer ID:", timerID);
// console.log("Step2");


// function helloWorld()
// {

//     console.log("Hello World");

// }
// console.log("Step1");
// var timerID = setTimeout(helloWorld, 0);
// console.log("Timer ID:", timerID);
// console.log("Step2");


// function helloWorld()
// {

//     console.log("Hello World", counter);
//     if (counter == 5)
//     {

//         clearInterval(intervalID);

//     }
//     counter+=1

// }
// counter = 0;
// var intervalID = setInterval(helloWorld, 1000);


// function getSeconds()
// {

//     var strSeconds = prompt("Please enter a number of seconds:");
//     var seconds = parseInt(strSeconds);

//     if (isNaN(seconds))
//     {

//         throw new TypeError("Seconds can only be a number!");

//     }
//     else if (seconds < 1)
//     {

//         throw new RangeError("Number should be larger than 0!");

//     }
//     else
//     {

//         return seconds;

//     }

// }
// function getMessage(message)
// {

//     var message = prompt("Please enter a message:");
//     return message;

// }
// function main()
// {

//     try 
//     {

//         var sec = getSeconds();
//         var msg = getMessage();
//         setInterval(function(){console.log(msg)}, sec * AMOUNT_OF_MS_IN_SECONDS);

//     }
//     catch (e)
//     {

//         alert(e.message)

//     }

// }
// var AMOUNT_OF_MS_IN_SECONDS = 1000;
// main();


// // Synchronous Code
// function callbackFunction()
// {
//     console.log("Hello");
// }
// function executeCallback(callbackFunc)
// {
//     console.log("I'm executing now");
//     callbackFunction();
// }
// console.log("Step 1");
// executeCallback(callbackFunction);
// console.log("Step 2");


// // Asynchronous Code
// function callbackFunction()
// {
//     console.log("Hello");
// }
// function executeCallback(callbackFunc)
// {
//     console.log("I'm executing now");
//     callbackFunction();
// }
// console.log("Step 1");
// setTimeout(callbackFunction, 0);
// console.log("Step 2");


// // Asynchronous Code
// function doSomethingVeryHeavy()
// { 

//     for(var i = 0; i < 10000000000; i++)
//     {

//     }
//     console.log("Done");

// }
// console.log("Step 1");
// setTimeout(doSomethingVeryHeavy, 0)
// console.log("Step 2");
// prompt("Write something:")


// // Promise
// console.log("Step 1")
// function promiseHandler(resolve, reject)
// {

//     setTimeout(function()
//     {
//         console.log("Something");
//         resolve(5);
//     }, 10000);

// }
// function resolveHandler(number)
// {

//     console.log("I'm the resolver, and this is the value:", number);

// }
// var promise = new Promise(promiseHandler);
// promise.then(resolveHandler); // When promise is successful
// console.log("Step 2");


// function getPositiveNumber(message)
// {

//     var personsNumberStr = prompt(message);
//     var personsNumber = parseInt(personsNumberStr);
//     if (isNaN(personsNumber))
//     {
    
//         throw new TypeError("It can only be a number!");
    
//     }
//     else if (personsNumber < 0)
//     {

//         throw new RangeError("It can only be a positive number!");

//     }
//     else
//     {

//         return personsNumber;

//     }

// }
// function createPersons(numToCreate)
// {

//     var persons = [];

//     for (i = 0; i < numToCreate; i++)
//     {
        
//         var personFirst = prompt("Enter first name " + i.toString() + " :");
//         if (personFirst.length > 25)
//         {
    
//             throw new RangeError("It can only be up to 25 characters");
    
//         }
    
//         var personLast = prompt("Enter last name " + i.toString() + " :");
//         if (personLast.length > 50)
//         {
    
//             throw new RangeError("It can only be up to 50 characters");
    
//         }
    
//         var personAge = getPositiveNumber("Enter age " + i.toString() + " :")
//         if (personAge < 21)
//         {
    
//             throw new RangeError("Age should be larger than 21");
    
//         }
    
//         var personObject = {firstName: personFirst, lastName: personLast, age: personAge};

//         persons.push(personObject);
    
//     }

//     return persons;

// }
// function main()
// {

//     try 
//     {

//         var numToCreate = getPositiveNumber("How many people would you like to create?");
//         var persons = createPersons(numToCreate);
//         console.log(persons);

//         intervalID = setInterval(function() 
//         {

//             var personToPrint = persons.shift();
//             console.log(personToPrint);

//             if (!persons.length)
//             {

//                 clearInterval(intervalID);

//             }

//         }, 2000);

//     }
//     catch (e)
//     {

//         console.log(e.message);

//     }

// }
// main();