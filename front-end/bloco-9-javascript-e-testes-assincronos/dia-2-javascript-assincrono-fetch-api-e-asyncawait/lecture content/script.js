function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

// function fetchPokemon() {
//   const promise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

//   promise.then((response) => {
//     const promiseResponseJson = response.json();

//     promiseResponseJson.then((data) => {   
//       console.log(data)   
//       const pokemon = {
//         name: data.name,
//         imageUrl: data.sprites.front_default
//       }
//       append(pokemon);
//     });
//   });
// }

// function fetchPokemon(pokemonName) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const pokemon = {
//         name: data.name,
//         imageUrl: data.sprites.front_default
//       }
//       append(pokemon);
//     }).catch((error) => {
//       console.log('Vishii');
//     });
// }

// async/await

async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const data = await response.json();
    const pokemon = {
      name: data.name,
      imageUrl: data.sprites.front_default
    }
    append(pokemon);
  } catch (error) {
    console.log('Vishi deu erro')
  }
}

// function requestPokemons() {
//   fetchPokemon('ditto')
//     .then(() => fetchPokemon('bulbasaur'))
//     .then(() => fetchPokemon('charmander'))
//     .then(() => fetchPokemon('squirtle'))
//     .then(() => fetchPokemon('dratini'))
//     .catch(() => console.log('Deu ruim'))
// }

async function requestPokemons(){
  try {
    await fetchPokemon('ditto');
    await fetchPokemon('bulbasaur');
    await fetchPokemon('squirtle');
    await fetchPokemon('dratini');
  } catch (error) {
    console.log(error);
  }
}


// const pokemon = fetchPokemon()

window.onload = requestPokemons;