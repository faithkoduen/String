let str = "extravaganza"
let lastFour = str.slice(8);
console.log(lastFour);


const food = "The quick for jumped over the lazy boy";
let countThe = (Story.toLowerCase().split("The").lenght-1)
console.log(`"the" appears:${countThe}times`);
let countBrown = (story .toLowerCase().split("brown").length-1);
console.log(`"brown"appears:${countBrown}times`);

const string1 = "The pupils are reading in the library";
let wordAre = string1.includes("are");
console.log(`"are" found: ${wordAre}`);
const string2 = "The child was sitting in the table before it fell";
let wordSitting = string2.includes("sitting");
console.log(`"sitting"found: ${wordsitting}`);

//upperCase
let UpperCase = "wonderful".toUpperCase();
console.log(upperCaseStr);


//lowerCase
let lowerCaseStr1 = "amazing".toUpperCase();
console.log(lowerCaseStr1)
let lowerCaseStr2 = "underneath".toLowerCase();
console.log(lowerCaseStr2)


//titleCase
let titleCaseword = "A wornderful World"
.split("")
.map(word=>word.CharAt(0).toUpperCase()+word.slice(1).toLowerCase())
.join(" ");
console.log(titleCaseword)