/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

function diagonalDifference(arr) {
    // Write your code here
    let primary =0
    let secondary =0
    for(let i = 0; i<arr.length;i++){
        primary += arr[i][i]
    }
    for(let j = arr.length-1; j>=0;j--){
        secondary += arr[j][arr.length-1-j]
    }
    if(primary-secondary>0) {
    return primary-secondary
    } else {
       return (primary-secondary)*(-1) 
    }
}