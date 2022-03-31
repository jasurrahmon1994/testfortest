// Task 1: Making double each element of given "s" string

let doubleElements = s => {
    let double = "";
    s.split("").map(el => {
        double = double + el + el;
    })
    console.log(double);
}

// doubleElements("jasur");

// Task 2: Concatting given strings

let concatElements = (a, b) => {
    console.log(a + b + a);
}

// concatElements("jasur", "dasturchi")

// Task 3: creating new string with given numbers & strings

let createString = (num1, num2, string1, string2) => {
    console.log(string1.substr(0, num1) + " " + string2.substr(0, num2));
}

// createString(5, 5, "salomat", "jasurbek")

// Task 4: Finding text within another text;

let findText = (string1, string2) => {
    console.log(string2.includes(string1));
}

// findText("salom", "salom hammaga")

// Task 5: Finding the repeatence of given text within another text

let findRepeteance = (a, b) => {
    let findPos = 0;
    let count = 0;
    while(findPos < b.length){
        if(b.indexOf(a, findPos) != -1){
            findPos = b.indexOf(a, findPos);
            count++;
            findPos++;
        } else{
            console.log(`Found times: ${count}`);
            break;
        }
    }
}

// findRepeteance('o', 'oltin olma, duo ol, duo oltin emasmi')

// Task 6: Given 2 stings. Find the first string within second one & delete it

let deleteString = (a, b) => {
    let start = b.indexOf(a);
    if(start != -1){
        console.log(b.slice(0, start) + b.slice(start + a.length));
    }
}

// deleteString("bormadi", "jasur bu safar uyga bormadi");

// Task 7: Finding and replaceing function

let findAndReplace = (cut, find, replace) => {
    let start = cut.indexOf(find);
    let cutArr = cut.split("");
    let replaceArr = replace.split("");
    cutArr.splice(start, find.length, ...replaceArr);
    console.log(cutArr.join(""));
}

// findAndReplace("jasur bu safar uyga bormadi", "bormadi", "bordi")

// Task 8: Finding and cutting median chars in string

let cutMedians = string => {
    if(string.length % 2) {
        console.log(string[Math.floor(string.length / 2)]);
    } else {
        console.log(string[(string.length / 2 - 1).toFixed(0)] + string[(string.length / 2 ).toFixed(0)]);
    }
}

// cutMedians("jasurbek")

// Task 1: Cutting first three symbols  

let cut3symbols = string => {
    if(string.length > 2) {
        console.log(string.substr(0, 3));
    } else {
        let puppy = "";
        for(let i = 0; i < 3 - string.length; i++) {
            puppy += "@"
        }
        console.log(string + puppy);
    }
}

// cut3symbols(" ")

// Task 1: Calculating the sum of numbers in string

let sumOfNumbers = string => {
   let sum = 0;
    string.split("").forEach(el => {
       if(!isNaN(el)){
        sum += +el;
       }
   })
   console.log(sum);
}

sumOfNumbers("jasur456555bek3213");


// Task 1: 