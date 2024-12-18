function makeid(l) {
  // write your code here
	const character="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let charlength=character.length;
	let result = ' ';
	for(let i = 0; i <l; i++) {
            result += character.charAt(Math.floor(Math.random() * charlength));
        }
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
