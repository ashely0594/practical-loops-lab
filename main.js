//Part 1:Fizz Buzz

let num = 100

for ( let i = 1; i <= num; i++) {
    // console.log(i)
} 


for ( let i = 1; i <= num; i++) {
    if (i % 3 == 0 ) {
        console.log('Fizz')
    } if (i % 5 == 0) {
        console.log('Buzz')
    } if ( i % 3 && i % 5 == 0) {
        console.log('Fizz Buzz')
    } if ( i % 3 !== 0 && i % 5 !== 0) {
        console.log(i)
    }
} 



