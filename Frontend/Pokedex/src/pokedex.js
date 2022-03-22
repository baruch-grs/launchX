const getPokemonInfo = async () => {
  const pokeNameInput = document.getElementById('pokeName').value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeNameInput}`;
  try {
    let response = await fetch(url);
    response = await response.json();
    pokeImage(response.sprites.front_default);
    showPokeInfo(pokeInfo(response));
  } catch (error) {
    throw new Error('ERROR', error);
  }
}
const showPokeInfo = (data) => {
  let element = document.getElementById('pokeInfo');
  element.innerHTML = `
    <ul>
      <li> ${data.height} </li>
      <li> ${data.weight} </li>
      <li> ${data.types} </li>
    </ul>

  `;
}

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
}

const getTypes = (arr) => {
  return arr.map((item) => item.type.name);
}

const pokeInfo = (data) => {
  return {
    weight: data.weight,
    height: data.height,
    types: getTypes(data.types)
  }
}



