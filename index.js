
function saturdayFun(activity = 'roller-skate'){
     return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (flair = "*") {
    const whatEver = function (adj ="a hard worker") {
        return `You are ${flair}${adj}${flair}!`
    }
    return whatEver;
}
wrapAdjective("*")("a hard worker")

function wrapAdjective (flair = "||") {
    const whatEver = function (adj ="a hard worker") {
        return `You are ${flair}${adj}${flair}!`
    }
    return whatEver;
}
wrapAdjective("*")("a hard worker")
    


// const array = (function (thingToAdd){ // -> Function expression
//     const base = 3;
//     return [
//         function (){
//             return base + thingToAdd;
//         },
//         function (){
//             return base;
//         },
//     ];
// })(2);
// array[0]
// array[0]()

// function demoChain(name) {
//     const part1 ='hi';
//     return function () {
//         const part2 = "there"
//         return function () {
//             console.log(`${part1.toUpperCase()} ${part2} ${name}`)
//         }
//     }
// }
// demoChain("Dr. Stephen Strange")()()
