
//data structure than ca store and organize values in numbered/index list
//store booleans, numbers, arrays (or nested arrays)

//Array literal [] stored in a variable
var numbers = [9, 10, 11, 12];
console.log(numbers);

//creating an array with a new js keyword

var strings = new Array("lime" ,"cherry", "lemon", "orange");
console.log(strings);

//use js new keyword to matk the index

Boolean[0] = 9<10;
Boolean[1] = 11===11.5
Boolean[2] = 8>12;
console.log("boolean");

//creat an arry with all the students
//use one of the methods to creat an array

var classList = new Array()
classList[0] = "Destynee";
classList[1] = "Marvin";
classList[2] = "Abraham";
classList[3] = "Kevin";
classList[4] = "Ngoc";
classList[5] = "Sheily";
classList[6] = "Syed";
classList[7] = "April";
console.log(classList);

//accessing an array
//use the index[] position
//number inside -1 is what output will be 
console.log(classList[6])

//,length method will give index number of array
console.log(classList.length);

//array methods
//built-in methods .methodname(data);
// method is .push 
classList.push("Krystina");
// .push adds an item to the end of the array
//.pop
classList.pop();
//.pop removes the last item on the list

//.shift
classList.shift();
//.shift shifts everyone down an index
// removes index from the beginning


//.unshift
classList.unshift("Destynee");
//,unshift adds a new index to beginning of array



//looping over an array
//to see all items in an array iterations
//for loop - most common
//while loop
//forEach loop

//3 things we need to loop through data
for (i = 0; i<classList.link; i++) {
//It is starting at [0]
// and will not stop until it is at the full length of the class
//how it is moving-incraments or not(++)
console.log(classList[i]);
}









