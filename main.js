console.log('runJS')

const getData = async (pokemon) => {
    console.log('rungetdata')
    console.log(pokemon)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log('rungetdata')
    console.log(response);
    return response.data;
}

//define form and grab data from the form
let form = document.querySelector('#pokeDataForm')
console.log(form);

// Function to load data and display HTML
const loadData = async () => {
    const pokeSection = document.getElementsByClassName('pokemon-results')[0].childElementCount
    if (pokeSection){
        console.warn('You already have data. Hit "clear" to search again')
    }else{
        const poke = await getData();
        console.log(poke);
        poke.forEach((element) =>{
            createList(element.id, element.name, element.height)
        });
    }
}
//create the html
const  createPokeHTML = (pokemon) =>{
    console.log('create poke html')
    let pokeDisplay = document.getElementsByClassName('pokemonDisplay')[0];
    pokeDisplay.innerHTML = '';
    //display name
    let pokeName = document.createElement('h1');
    pokeName.innerHTML = 'Name: ' + pokemon.name;
    pokeDisplay.innerAdjacentElement('beforeend', pokeName);
    //display height
    let pokeHeight = document.createElement('h3');
    pokeHeight.innerHTML = 'Height: ' + pokemon.height;
    pokeDisplay.innerAdjacentElement('beforeend', pokeHeight);
    //display weight
    let pokeWeight = document.createElement('h3');
    pokeWeight.innerHTML = 'Weight: ' + pokemon.weight;
    pokeDisplay.innerAdjacentElement('beforeend', pokeWeight);
    let pokeImage = document.createElement('img');
    pokeImg.src = pokemon.sprites.front_default;
    console.log(pokeImg);
    poleDisplay.insertAdjacentElement('beforeend'), pokeImg;
}

form.addEventListener('submit', loadData=>{
    loadData.preventDefault();
    console.log('runaddEventLIstener')
    console.log(loadData);
    let name = loadData.path[0][0].value;
    console.log(name);
})

const createList = (id, Name, Height) =>{
    const html = `<a href="https://pokeapi.co/api/v2/pokemon/${pokemon}/" class="list-group-item list-group-item-action list-group-item-light" id=${id}>${Name} ${Height}</a>`;
    document.querySelector('.pokemon).insertAdjacentHTML('beforeend', html);
}

// Function to clear data from HTML
const clearData = () => {
    document.getElementsByClassName('pokemon-results')[0].innerHTML = '';
}








let pokeHeight = document.createElement('h3');
pokeHeight.innerHTML = 'Height: ' + pokemon.height;
pokeDisplay.innerAdjacentElement('beforeend', pokeHeight);
//display weight
let pokeWeight = document.createElement('h3');
pokeWeight.innerHTML = 'Weight: ' + pokemon.weight;
pokeDisplay.innerAdjacentElement('beforeend', pokeWeight);
let pokeImage = document.createElement('img');
pokeImg.src = pokemon.sprites.front_default;
console.log(pokeImg);
poleDisplay.insertAdjacentElement('beforeend'), pokeImg;