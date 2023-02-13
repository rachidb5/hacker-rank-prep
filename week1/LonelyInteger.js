/*
Given an array of integers, where all elements but one occur twice, find the unique element.
*/

function lonelyinteger(a) {
    // Write your code here
    let lone = 0;
    let array = a
    for (let i = 0; i < a.length; i++) {
        let num = 0
        for (let j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                num += 1
            }
        }
        if (num === 1) {
            lone = a[i]
        }
    }
        return lone
}