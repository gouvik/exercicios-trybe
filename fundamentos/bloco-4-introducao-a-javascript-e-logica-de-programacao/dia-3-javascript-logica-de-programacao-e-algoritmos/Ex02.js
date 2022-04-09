let word = "tryber";
let reverseWord = "";

for (let index = 0; index < word.length; index += 1) {
	reverseWord = reverseWord + word[word.length - 1 - index];
}

console.log(reverseWord);

let wordl = "tryber";
let reverseWord2 = "";

reverseWord2 = wordl.split("").reverse().join("");

console.log(reverseWord2);
