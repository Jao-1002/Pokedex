const pokemonList = document.getElementById("pokemonList");
const titulo = document.getElementById("titulo");

const primeira = document.querySelector("#primeira");
const segunda = document.getElementById("segunda");
const terceira = document.getElementById("terceira");
const quarta = document.getElementById("quarta");
const quinta = document.getElementById("quinta");
const sexta = document.getElementById("sexta");
const setima = document.getElementById("setima");
const oitava = document.getElementById("oitava");

let geracao = "";

let numeroI = 0;
let numeroF = 0;

function fetchPokemon(numeroI, numeroF) {
    const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonPromises = [];

    for (let i = numeroI; i <= numeroF; i++) {
        pokemonPromises.push(
            fetch(getPokemonUrl(i)).then((response) => response.json())
        );
    }

    Promise.all(pokemonPromises).then((pokemons) => {
        const lisPokemons = pokemons.reduce((accmulator, pokemon) => {
            const types = pokemon.types.map((typeInfo) => typeInfo.type.name);
            function verificacaoTypes(type) {
                if (type !== undefined) {
                    return `<p class="type ${type}">${type}</p>`;
                } else {
                    return ``;
                }
            }

            accmulator += `
                <li class= " pokemon ${types[0]}">
                   <img src=${
                       pokemon.sprites.other.dream_world.front_default
                   } alt=${pokemon.name}/> 
                   <h2>${pokemon.id} - ${pokemon.name}</h2>
                   <div class="containerTypes"> 
                        ${verificacaoTypes(types[0])}
                        ${verificacaoTypes(types[1])}
                   </div> 
                </li>
            `;

            return accmulator;
        }, "");

        pokemonList.innerHTML = lisPokemons;
    });
}
function fetchPokemonn(numeroI, numeroF) {
    const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonPromises = [];

    for (let i = numeroI; i <= numeroF; i++) {
        pokemonPromises.push(
            fetch(getPokemonUrl(i)).then((response) => response.json())
        );
    }

    Promise.all(pokemonPromises).then((pokemons) => {
        const lisPokemons = pokemons.reduce((accmulator, pokemon) => {
            const types = pokemon.types.map((typeInfo) => typeInfo.type.name);
            function verificacaoTypes(type) {
                if (type !== undefined) {
                    return `<p class="type ${type}">${type}</p>`;
                } else {
                    return ``;
                }
            }

            accmulator += `
                <li class= "pokemonpng ${types[0]}">
                   <img src=${pokemon.sprites.front_default} alt=${
                pokemon.name
            }/> 
                   <h2>${pokemon.id} - ${pokemon.name}</h2>
                   <div class="containerTypes"> 
                        ${verificacaoTypes(types[0])}
                        ${verificacaoTypes(types[1])}
                   </div> 
                </li>
            `;
            console.log(accmulator);
            return accmulator;
        }, "");

        pokemonList.innerHTML = lisPokemons;
    });
}

function escolher() {
    switch (geracao) {
        case "primeira":
            numeroI = 1;
            numeroF = 151;
            geracao = 1;
            titulo.innerHTML = `Pokedex da ${geracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "segunda":
            numeroI = 152;
            numeroF = 251;
            geracao = 2;
            titulo.innerHTML = `Pokedex da ${geracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "terceira":
            numeroI = 252;
            numeroF = 386;
            geracao = 3;
            titulo.innerHTML = `Pokedex da ${geracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "quarta":
            numeroI = 387;
            numeroF = 493;
            geracao = 4;
            titulo.innerHTML = `Pokedex da ${geracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "quinta":
            numeroI = 494;
            numeroF = 649;
            geracao = 5;
            titulo.innerHTML = `Pokedex da ${geracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "sexta":
            numeroI = 650;
            numeroF = 721;
            geracao = 6;
            titulo.innerHTML = `Pokedex da ${geracao}° Geração `;
            fetchPokemonn(numeroI, numeroF);
            break;
        case "setima":
            numeroI = 722;
            numeroF = 809;
            geracao = 7;
            titulo.innerHTML = `Pokedex da ${geracao}° Geração `;
            fetchPokemonn(numeroI, numeroF);
            break;
        case "oitava":
            numeroI = 810;
            numeroF = 890;
            geracao = 8;
            titulo.innerHTML = `Pokedex da ${geracao}° Geração `;
            fetchPokemonn(numeroI, numeroF);
            break;

        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}

primeira.onclick = () => {
    geracao = "primeira";
    escolher();
};
segunda.onclick = () => {
    geracao = "segunda";
    escolher();
};
terceira.onclick = () => {
    geracao = "terceira";
    escolher();
};
quarta.onclick = () => {
    geracao = "quarta";
    escolher();
};
quinta.onclick = () => {
    geracao = "quinta";
    escolher();
};
sexta.onclick = () => {
    geracao = "sexta";
    escolher();
};
setima.onclick = () => {
    geracao = "setima";
    escolher();
};
oitava.onclick = () => {
    geracao = "oitava";
    escolher();
};
