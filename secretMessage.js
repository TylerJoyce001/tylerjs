let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015', 'Chris', 'Pine', 'Learn', 'JavaScript'];
console.log(secretMessage.length); // checking length before
secretMessage.pop();
console.log(secretMessage.length); // checking length after pop()
secretMessage.push('to', 'Program'); //pushing into array
console.log(secretMessage.indexOf('easily')); // replacing 'easily' with 'right' 
secretMessage[7] = 'right'
secretMessage.shift(); // removing 'Learning'
secretMessage.unshift('Programming'); // addiing 'Programming'
// console.log(secretMessage);
secretMessage.splice(6, 10, 'know'); // remove index 6 - 10
console.log(secretMessage);
console.log(secretMessage.join()); // Printing as 

// Secret Message Using arrays