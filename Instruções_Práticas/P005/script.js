  
  const fetchPokemonInfo = (pokemonName) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
    return fetch(apiUrl)
      .then((response) => response.json())
    };
  
  const fetchData = (url) => {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error('Erro na requisição:', error));
  };
  
  const noticiasSection = document.getElementById('noticiasSection');
  const quadroNoticias = noticiasSection.querySelector('#noticias');

  const servicosSection = document.getElementById('servicosSection');
  const quadroServico = servicosSection.querySelector('#servicos');

  

    fetchData('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((data) => {
        const li = document.createElement('li');
        const piada = "Eh novo por aqui? Aqui vai um conselho: " + data.joke
        li.textContent = piada;
        quadroNoticias.appendChild(li);
    });
  
    
    fetchData('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((data) => {
        const li = document.createElement('li');
        const piada = "Aqui vai uma piada: " + data.joke
        li.textContent = piada;
        quadroNoticias.appendChild(li);
    });
    
    
    fetchData('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((data) => {
    console.log(data);
    const li = document.createElement('li');
    const pokemonInfo = `Conheça mais sobre os jogos universitarios: Nome do Pokémon: ${data.name} - Altura: ${data.height} - Peso: ${data.weight}`;
    li.textContent = pokemonInfo;
    quadroNoticias.appendChild(li);
  });
        

    fetchData('https://restcountries.com/v3.1/name/france')
    .then((data) => {
        console.log(data[0].flags.alt)
        const p = document.createElement('p');
        const texto =  "Intercambio para França. Conheça mais sobre o país: " + data[0].flags.alt
        p.textContent = texto;
        quadroServico.appendChild(p);
    });
