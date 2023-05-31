console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
var records = [
  {
    Booktitle: "Important Meeting",
    Author: "Abiola",
    Rating: 5,
    Number_of_Sales: 20,
  }
]
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log(records)

records[0].Number_of_Sales+= 5;

records[0].Rating+=1;

// Lets Use Splice
// // Replace the Rating value at index 0 with 9 using splice
// The splice method takes three arguments:
// // // The starting index: 0 in this case
// // // The number of elements to remove: 1 (since we are replacing one element)
// // // The element(s) to add: We create a new object using spread syntax ({ ...records[0], 
// // Rating: 9}) to retain the existing properties of the object at index 0 and update the "Rating" 
// // value to 9.

records.splice(0, 1, { ...records[0], Rating: 9});



console.log(records)




// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--


function logBookData(records, numberOfSales) {
  console.log("Number of Sales:", numberOfSales);
  records[0].Number_of_Sales += 5;
}





logBookData(records, records[0].Number_of_Sales);
// --^-- write your code here --^--

logBookData(records, records[0].Number_of_Sales);
// --^-- write your code here --^--
