// Part 1:Fizz Buzz

let num = 100

for ( let i = 1; i <= num; i++) {
    console.log(i)
} 


for ( let i = 1; i <= num; i++) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log('Fizz Buzz')
    }  else if (i % 5 == 0) {
        console.log('Buzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    }  else  {
        console.log(i)
    }
} 

// if (false) {

//     console.log('True');
 
//  } else {
 
//     console.log('False');
 
 

//  //part 2

// // Part 2

let prime = false;
let n = 137500067039;
let i = n;

// // This checks if your number is 2 or 3. Then, it checks if you number is of the form
// // 6n + 1 or 6n - 1. This is because prime numbers must be of this form, though not all
// // numbers of this form are prime. If the number is of this form, proceed to the loop
// // that checks for prime numbers. This is an optimization to make the code run faster.
while (prime == false) {
  if (i === 2 || i === 3) {
    prime = true;
    console.log(`${i} is a prime number.`);
  } else if ((i + 1) % 6 !== 0 && (i - 1) % 6 !== 0) {
    i += 1;
  } else {
//     // isPrime is set to true as default because if we get through the loop below, we have
//     // found a prime number and can enter the branching logic below. If the number is not
//     // found to be prime, isPrime is set to false, preventing entry into the branching
//     // logic
    let isPrime = true;

//     // This loop checks to see if a number is prime. It is enough to check those numbers
//     // less than sqrt(i) because any factor less than sqrt(i) is guaranteed a factor greater
//     // than sqrt(i). Likewise, if there is no factor less than sqrt(i), then there's no
//     // factor greater than sqrt(i) either. This is an optimization to make the code run faster
    for (let k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        isPrime = false;
        break;
      }
    }

//     // This section of the codes checks to see if the prime number found is the same as the
//     // original number given to the code, or if it's a larger number. It prints a statement
//     // reflecting this. It also sets prime = true to avoid entering the while loop again
    if (isPrime == true) {
      prime = true;
      if (i === n) {
        console.log(`${i} is a prime number.`);
      } else {
        console.log(`The prime number following ${n} is ${i}.`);
      }

//       // If the number was found to not be prime, then we increment to check the next number.
    } else {
      i += 1;
    }
  }
}

// //part3 


const str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let array1 = str.split('\n')
for (let i=0; i < str.length; i++) {
    console.log(str[i])
} let commaCell = array1[i].split(',');
console.log(commaCell);

//store each cell of data in a variable 

const cell1 = Id
const cell2 = Name
const cell3 = Occupation
const cell4 = Age



