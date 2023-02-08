/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.
*/

function plusMinus(arr) {
    // Write your code here
    let minus = 0;
    let plus = 0;
    let z = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0) z++
        else if(arr[i] > 0) plus++
        else minus++
    }
    console.log((plus/arr.length).toFixed(6))
    console.log((minus/arr.length).toFixed(6))
    console.log((z/arr.length).toFixed(6))
}
