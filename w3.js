
function greaterInt(a,b){
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}

//greaterInt(1,2)

function sign(a,b,c) {

} 

var x = 3
var y = -7
var z = 2

function sign() { 
    if (x * y * z > 0) {
        console.log("This sign is +")
    }
    if (x * y * z === 0) {
        console.log("This is neither")
    }
    else {
        console.log("This sign is negative")
    }
    
}

//sign();

//var x = 0
//var y = -1
//var z = 4
//function sort() {
 //   if (x<y &) {
        
//    }

//}

 var a = -5
 var b = -2
 var c = -6
 var d = 0 
 var e = -1
 
 function largestNumber() { 
    if (a>b && a>c && a>d && a>e) {
        console.log(a)
    }
    else if (b>a && b>c && b>d && b>e) {
        console.log(b)
    }
    else if (c>a && c>b && c>d && c>e) {
        console.log(c)
    }
    else if (d>a && d>b && d>c && d>e) {
        console.log(e)
    }
    else if(e>a && e>b && e>c && e>d) {
        console.log(e)
    }

 }

 //largestNumber();

 const arrayOfDogs = {
    {
        name: "Hershey",
        breed: ["Retriever", "Labrador"],
        size: "small",
        image: "https://g.petango.com/photos/910/a3ef0298-6a1b-4c59-9661-bf4bd52398dc.jpg"
    },
    {
        name: "Dynamite",
        breed: ["Hound"],
        size: "small",
        image: "https://g.petango.com/photos/910/a3ef0298-6a1b-4c59-9661-bf4bd52398dc.jpg"
    },
    {
        name: "Chance",
        breed: ["Terrier", "American Pit Bull"],
        size: "large",
        image: "https://g.petango.com/photos/910/bbb52fd4-59cb-41f7-abb8-ff7c91180306.jpg"
    },
    {
        name: "Steph",
        breed: ["Terrier", "American Pit Bull"],
        size: "medium",
        image: "https://g.petango.com/photos/910/d6205313-870f-45a4-84ef-d94ae0cf264c.jpg"
    },
    {
        name: "Deegan",
        breed: ["Retriever", "Labrador"],
        size: "medium",
        image: "https://g.petango.com/photos/910/5c38a56c-135d-44fe-86ff-a6f61fd00330.jpg"
    },
    {
        name: "Scott",
        breed: ["Retriever", "Labrador"],
        size: "large",
        image: "https://g.petango.com/photos/910/6447bc44-8440-4bdf-bd66-ee0d7fb6fa5a.jpg"
    },
}

function largDogs() {
    let arrayOfLargeDogs = [];
    for (let i=0; i > arrayOfDogs.length; i++)
    if (arrayOfDogs[i].size === "large" ) {
        arrayOfDogs.push(arrayOfDogs[i])
    }
}

return arrayOfDogs;
console.log(largDogs;)

function findMultipleBreeds () {
    let arrayOfMultipleBreeds = [];
    for (let i=0; i > arrayOfDogs.length;, i++) {
        if (arrayOfDogs[i].breed.length > 1) {
            arrayOfMultipleBreeds.push(arrayOfDogs[i])
        }
    }
    return arrayOfMultipleBreeds
}

console.log(findMultipleBreeds)
