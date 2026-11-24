// Find the largest number in an array.

// let nums = [12, 45, 7, 89, 23, 56];

// function largestNumber(arr){
//     let largest = arr[0]
//     for(let i =0; i<arr.length; i++){
//         let num = arr[i]
//         if(num>largest){
//             largest=num
//         }
//     }
// return largest
// }

// console.log(largestNumber(nums))


// Q2. Find the sum of all array elements.
// let nums = [10, 20, 30, 40, 50];

// function SumOfArr(arr){
//     let total = 0
//     for(let i =0; i<arr.length; i++){
//         let num = arr[i]
//         total += num
//     }
// return total
// }

// console.log(SumOfArr(nums))

// Q3. Remove duplicate values from an array.
// let nums = [1, 2, 3, 2, 4, 1, 5,"Kunal","Kunal"];

// function removeDuliCate(arr){
//     let newArr = []

//     for(let word of arr){
//         if(!newArr.includes(word)){
//             newArr.push(word)
//         }
//     }
// return newArr
// }
// console.log(removeDuliCate(nums))


// Create a new array containing only even numbers without modifying the original array.
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// function onlyEvenNumber(arr){
//     let newArr = []
//     for(let i of arr){
//         if(i%2===0){
//             newArr.push(i)
//         }
//     }
//     return newArr
// }
// console.log(onlyEvenNumber(nums))

// Find the second-largest distinct number without using sort().
// let nums = [10, 50, 30, 50, 40, 20];



// function secondLargestDistinct(arr) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let num of arr) {
//         if (num > largest) {
//             secondLargest = largest;
//             largest = num;
//         } else if (num > secondLargest && num !== largest) {
//             secondLargest = num;
//         }
//     }

//     return secondLargest === -Infinity ? null : secondLargest;
// }

// console.log(secondLargestDistinct(nums)); // 40


// Q1. Find the missing number in an array.
// let nums = [1, 2, 3, 5, 6];

// function missingNumber(arr){
//     if(arr.length === 0){
//         return null
//     }

//     let largest = arr[0]
//     for(let i =0; i<arr.length; i++){
//         let num = arr[i]
//         if(num>largest){
//             largest=num
//         }
//     }

//     let smallestNum = arr[0]

//     for(let i =0; i<arr.length; i++){
//         let num = arr[i]
//         if(num<smallestNum){
//             smallestNum=num
//         }
//     }

//     let fullTotal = 0

//     for(let i = smallestNum; i<=largest; i++){
//         fullTotal += i
//     }

//     let arrTotal = 0
//     for(let num of arr){
//         arrTotal += num
//     }

//     return fullTotal - arrTotal
// }

// console.log(missingNumber(nums))



// Q2. Move all zeros to the end without changing the order of other elements.


let nums = [0, 1, 0, 3, 12];

function MoveZero(arr){
    let newArray = []

    let findZero = arr.filter((ele)=>ele===0)
    
    let findNonZero = arr.filter((ele)=>ele>0)

    for(let i of findNonZero){
        newArray.push(i)

    }
   
    for(let i of findZero){
        newArray.push(i)

    }

    
    return newArray
}

console.log(MoveZero(nums))