/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {
    // Write your code here
    let max = arr[0];
    let min = arr[0];
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
    }
    let maxSum = sum - min
    let minSum = sum - max
    console.log(minSum+' '+ maxSum)
}