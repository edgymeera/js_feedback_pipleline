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