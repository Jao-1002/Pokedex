const pokemonList = document.getElementById("pokemonList");
const titulo = document.getElementById("titulo");
const icon = document.querySelector(".icon")
const divButtons = document.querySelector(".buttons")
const selecao = document.querySelector(".selecao")


const h21 = document.querySelector("#geracao1")
const h22 = document.querySelector("#geracao2")
const h23 = document.querySelector("#geracao3")
const h24 = document.querySelector("#geracao4")
const h25 = document.querySelector("#geracao5")
const h26 = document.querySelector("#geracao6")
const h27 = document.querySelector("#geracao7")
const h28 = document.querySelector("#geracao8")


const primeira = document.querySelector("#primeira");
const segunda = document.getElementById("segunda");
const terceira = document.getElementById("terceira");
const quarta = document.getElementById("quarta");
const quinta = document.getElementById("quinta");
const sexta = document.getElementById("sexta");
const setima = document.getElementById("setima");
const oitava = document.getElementById("oitava");


let geracao = "";
let numeroGeracao = 0
let numeroI = 0;
let numeroF = 0;


//funções para enviar as lis para a tela
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
                <li class= "pokemonpng ${types[0]}" >
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
            
            return accmulator;
        }, "");

        pokemonList.innerHTML = lisPokemons;
    });
}


function fetchPokemonInfos(numeroI, numeroF) {
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

            function calcular(numeroConverter) {
                return numeroConverter / 10
            }
            accmulator += `
                <li class= " pokemon ${types[0]}">
                   
                   <div class="containerNameTypes">
                        <h2>${pokemon.id} - ${pokemon.name}</h2>
                        <span>${verificacaoTypes(types[0])}</span>
                        <span>${verificacaoTypes(types[1])}</span>
                   </div>
                   <div class="organizandoImagens"> 
                   <img src=${pokemon.sprites.front_default} alt="${pokemon.name} frente"/>
                   <img src=${pokemon.sprites.back_default} alt="${pokemon.name} costa"/>
                   </div>

                   <h3 class="tituloStatusBase">Status base</h3>
                   <div class="containerStatus">
                        
                        <div id="status1">
                        <div class="status">
                            <span>Vida</span>
                            <span>${pokemon.stats[0].base_stat}</span>
                        </div>
                        <div class="status">
                            <span>Ataque</span>
                            <span>${pokemon.stats[1].base_stat}</span>
                        </div>
                        <div class="status">
                            <span>Defesa</span>
                            <span>${pokemon.stats[2].base_stat}</span>
                        </div>
                        <div class="status">
                            <span>Ataque especial</span>
                            <span>${pokemon.stats[3].base_stat}</span>
                        </div>
                        </div>
                        
                        
                        <div id="status2">
                            <div class="status">
                                <span>Defesa especial</span>
                                <span>${pokemon.stats[4].base_stat}</span>
                            </div>
                            <div class="status">
                                <span>Velocidade</span>
                                <span>${pokemon.stats[5].base_stat}</span>
                            </div>
                            <div class="status">
                                <span>Altura</span>
                                <span>${calcular(pokemon.height)}m</span>
                            </div>
                            <div class="status">
                                <span>Peso</span>
                                <span>${calcular(pokemon.weight)}kg</span>
                            </div>
                        </div>
                        
                   </div>
                </li>
            `;

            return accmulator;
        }, "");

        pokemonList.innerHTML = lisPokemons;
    });
}


//funções para ecolher qual geração de pokemons vai aparecer na tela
function escolher() {
    switch (geracao) {
        case "primeira":
            numeroI = 1;
            numeroF = 151;
            numeroGeracao = 1;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "segunda":
            numeroI = 152;
            numeroF = 251;
            numeroGeracao = 2;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "terceira":
            numeroI = 252;
            numeroF = 386;
            numeroGeracao = 3;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "quarta":
            numeroI = 387;
            numeroF = 493;
            numeroGeracao = 4;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "quinta":
            numeroI = 494;
            numeroF = 649;
            numeroGeracao = 5;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemon(numeroI, numeroF);
            break;
        case "sexta":
            numeroI = 650;
            numeroF = 721;
            numeroGeracao = 6;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonn(numeroI, numeroF);
            break;
        case "setima":
            numeroI = 722;
            numeroF = 809;
            numeroGeracao = 7;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonn(numeroI, numeroF);
            break;
        case "oitava":
            numeroI = 810;
            numeroF = 890;
            numeroGeracao = 8;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonn(numeroI, numeroF);
            break;

        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}
function ecolherInfo() {
    switch (geracao) {
        case "primeira":
            numeroI = 1;
            numeroF = 151;
            numeroGeracao = 1;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonInfos(numeroI, numeroF);
            break;
        case "segunda":
            numeroI = 152;
            numeroF = 251;
            numeroGeracao = 2;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonInfos(numeroI, numeroF);
            break;
        case "terceira":
            numeroI = 252;
            numeroF = 386;
            numeroGeracao = 3;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonInfos(numeroI, numeroF);
            break;
        case "quarta":
            numeroI = 387;
            numeroF = 493;
            numeroGeracao = 4;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonInfos(numeroI, numeroF);
            break;
        case "quinta":
            numeroI = 494;
            numeroF = 649;
            numeroGeracao = 5;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonInfos(numeroI, numeroF);
            break;
        case "sexta":
            numeroI = 650;
            numeroF = 721;
            numeroGeracao = 6;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonInfos(numeroI, numeroF);
            break;
        case "setima":
            numeroI = 722;
            numeroF = 809;
            numeroGeracao = 7;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonInfos(numeroI, numeroF);
            break;
        case "oitava":
            numeroI = 810;
            numeroF = 890;
            numeroGeracao = 8;
            titulo.innerHTML = `Pokedex da ${numeroGeracao}° Geração `;
            fetchPokemonInfos(numeroI, numeroF);
            break;

        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}



//função para mudar as informações das lis
let verificarPokemonInfo = 0
pokemonList.onclick = () => {
    console.log(geracao);
    if (verificarPokemonInfo === 0) {
        console.log("transitando para escolherInfo")
        ecolherInfo()
        verificarPokemonInfo = 1
    }else{
        console.log("transitando para escolher")
        escolher()
        verificarPokemonInfo = 0
    }
}

//funções para navegar entre as gerações ao clicar nos buttons correspondentes a geração escolhida
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



//função para chamar os buttons das gerações para escolher em qual quer navegar
let verificar = 0
icon.onclick = () => {
    
    if (verificar === 0) {
        divButtons.style.cssText = 'display: grid'  

        verificar = 1   
    }else{
        verificar = 0
        divButtons.style.cssText = 'display: none'
    }
    
} 


//funções para a tela inicial, para a escolha da geração escolhida para vizualizar primeiro
h21.onclick = () => {
    icon.style.cssText = 'display: block'
    selecao.style.cssText = 'display: none'
    geracao = "primeira";
    escolher();
}
h22.onclick = () => {
    icon.style.cssText = 'display: block'
    selecao.style.cssText = 'display: none'
    geracao = "segunda";
    escolher();
}
h23.onclick = () => {
    icon.style.cssText = 'display: block'
    selecao.style.cssText = 'display: none'
    geracao = "terceira";
    escolher();
}
h24.onclick = () => {
    icon.style.cssText = 'display: block'
    selecao.style.cssText = 'display: none'
    geracao = "quarta";
    escolher();
}
h25.onclick = () => {
    icon.style.cssText = 'display: block'
    selecao.style.cssText = 'display: none'
    geracao = "quinta";
    escolher();
}
h26.onclick = () => {
    icon.style.cssText = 'display: block'
    selecao.style.cssText = 'display: none'
    geracao = "sexta";
    escolher();
}
h27.onclick = () => {
    icon.style.cssText = 'display: block'
    selecao.style.cssText = 'display: none'
    geracao = "setima";
    escolher();
}
h28.onclick = () => {
    icon.style.cssText = 'display: block'
    selecao.style.cssText = 'display: none'
    geracao = "oitava";
    escolher();
}



