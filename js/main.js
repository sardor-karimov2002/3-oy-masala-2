let arr1=[1,2,3,4,5,6,7,8,9,10,11 ,13  ,100];

function searchMax() {
    let max = Number.MIN_VALUE * -1;
    let i = 0
    for (i ; i< arr1.length ; i++){
        if(arr1[i] > max) max = arr1[i]
    }
    arr1 = arr1.filter(function (e) {
        return e != max
    })
    return max
}
let arr2 = [searchMax(),searchMax(),searchMax()]
console.log(arr2);