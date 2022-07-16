const randomNumber = (a, b) => {
    // const { random, floor } = Math;
    // const number = floor(random()* 101);
    return a / b;
} 

const upper = (str) => str.toUpperCase();
const firstLetter = (str) => str.charAt(0);
const glue = (a, b) => a.concat(b);
// const lastLetter = (str) => str.charAt(str.length-1)

async function dogFetch () {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await response
        .json();
    return await (response.ok ? Promise.resolve(json) : Promise.reject(json));
}



module.exports= { randomNumber, upper, firstLetter, glue, dogFetch };