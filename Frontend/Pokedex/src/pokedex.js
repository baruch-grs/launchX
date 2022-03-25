const getPokemonInfo = async () => {
  const pokeNameInput = document.getElementById('pokeName').value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeNameInput}`;
  try {
    const response = await fetch(url);
    console.log(response);
    let informationWithFormat = await response.json();
    console.log(response);

    if (pokeNameInput.length <= 0 || response.status !== 200) {
      let errorUrlImage = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
      pokeImage(errorUrlImage);
    }

    pokeImage(informationWithFormat.sprites.front_default);
    showPokeInfo(pokeInfo(informationWithFormat));
  } catch (error) {
    throw new Error('ERROR', error);
  }
}
const showPokeInfo = (data) => {
  let element = document.getElementById('pokeInfo');
  element.innerHTML = `
    <ul>
      <li> <h1>Height: ${data.height} </h1></li>
      <li> <h1>Weight: ${data.weight} </h1></li>
      <li> <h1>Types: ${data.types} </h1></li>
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



