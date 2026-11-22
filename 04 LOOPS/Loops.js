// Write a program to print numbers from 10 to 1 using a for loop.

// for(let i = 10; i>=1;i--){
//     console.log(i)
// }

// Write a program to calculate the factorial of a number using a for loop.

// let result = 1
// let num = 5

// for(let i = 1; i<=num; i++){
//    result*=i
// }
// console.log(result)

//  Write a program to find the second-largest number in an array using a for loop without using sort().

// const arr = [12, 45, 7, 89, 89, 23];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   const num = arr[i];

//   if (num > largest) {
//     secondLargest = largest;
//     largest = num;
//   } else if (num > secondLargest && num !== largest) {
//     secondLargest = num;
//   }
// }

// console.log(secondLargest === -Infinity ? null : secondLargest); // Output: 45


// Write a program to print the multiplication table of 7 using a while loop.

// let table = 7;
// let num = 1

// while(num<=10){
//     console.log(`${table} X ${num} = ${table*num}`)
//     num+=1
// }

// output

// let i = 5;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// Write a program to calculate the sum of numbers from 1 to 50 using a do...while loop

// let result = 0
// let num = 1 

// do{
//     result+=num
//     num++

// }while(num<=50)

// console.log(result)

// out put 

// let nums = [2, 4, 6, 8, 10];

// for (let num of nums) {
//     if (num > 5) {
//         console.log(num);
//     }
// }


// Q9. (4 marks) Write a program to find the largest number in an array using for...of without using Math.max()

// let nums = [12, 45, 7, 89, 23, 56];

// let largestNum = nums[0]

// for(let num of nums){
//     if(num>largestNum){
//         largestNum=num
//     }
// }
// console.log(largestNum)


// out put 

let student = {
    name: "Kunal",
    age: 27,
    course: "MCA"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}
