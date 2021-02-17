const counter = () => {
    for(let i = 0; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(i + " fizzbuzz")
        } else if (i % 3 === 0) {
            console.log(i + " fizz")
        } else if (i % 5 === 0) {
            console.log(i + " buzz")
        } else {
            console.log(i)
        }
    }
}
// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    counter();
    
}

// Now we run the main function...
fizzbuzz();
