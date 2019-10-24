$(function() {
    $('#number-chooser').submit(event => {
        event.preventDefault();
        let countTo = $(event.currentTarget).find('#number-choice')
        let numberArray = fizzBuzzCount(countTo);
        $('div.js-results').append(numberArray);
        };

        //Put the results in the div="js-results" where each number is its own element (per instructed format)
        //Apply content to spans for fizz, buzz and fizzbuzz as appropriate
    
    });
});

function fizzBuzzCount(num) {
    let result = [];
    if (num < 0) {
        return 'No negatives!'
    } 
    for (let i = 0; i <= num; i++ ) {
    if (num % 3 === 0) {
        result.push('fizz');
    }
    else if (num % 5 === 0) {
        result.push('buzz');
    }
    else if (num % 3 ===0 && num % 5 === 0) {
        result.push('fizzbuzz');
    }
    else result.push(num);
    }
    return result;
};
