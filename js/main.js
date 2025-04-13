const labels = [
    "dvd-player",
    "cd-player",
    "radio",
    "Cassettes",
];

const data = {
    labels: labels,

    datasets:[
        {
            label: "Most used",
            data: [1000, 5000, 6000, 1000, 2000,],
            backgroundColor: ['#8F87F1', '#C68EFD','#E9A5F1', '#FED2E2' ],
        }
    ]
}



const config = {
    type: 'line',
    data: data,
  };

const config2 = {
    type: 'bar',
    data:data,
}

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);



  function getPokemon(){

    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
 ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
  ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

  const labels = ['normal', 'fighting', 'poison', 'ground', 'rock', 'bug','ghost', 'steal', 'fire','water', 'water', "grass", 'electric', 'psychic', 'ice', 'dragon','dark', 'fairy','unkown', 'shadow'];


    for (let i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * 500 +1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
                    .then(function (response){
                        return response.json();
                    })
                    .then(function(pokemon){
                        switch (pokemon.types[0].type.name){
                            case 'normal':
                                normal = normal +1;
                                break;
                            case 'fighting':
                                    fighting = fighting +1;
                                    break;
                            case 'flying':
                                flying = flying + 1;
                                break;
                                case 'poison':
                              poison = poison + 1;
                                    break;
                                case 'rock':
                                    rock = rock + 1;
                                        break;
                                case 'bug':
                                    bug = bug + 1;
                                            break;
                               case 'ghost':
                                ghost = ghost + 1;
                                   break;
        
                                 case 'steel':
                                    steel = steel + 1;
                                    break;
                                case 'fire':
                                    fire = fire + 1;
                                    break;
        
                               case 'water':
                                water = water + 1;
                                      break;
        
                               case 'grass':
                                grass = grass + 1;
                                        break;
                               case 'electric':
                                electric = electric + 1;
                                    break;
        
                                 case 'psychic':
                                    psychic = psychic + 1;
                              break;
        
                             case 'ice':
                                ice = ice + 1;
                                    break;
                                 case 'dragon':
                                    dragon = dragon + 1;
                           case 'dark':
                            dark = dark + 1;
                              break;
                              case 'fairy':
                        fairy = fairy + 1;
                            break;
                          case 'unknown':
                          unknown = unknown + 1;
                        break;
                        case 'shadow':
                          shadow = shadow + 1;
                        break;
                                                                                
                        }
                        
                    })
                }
  }

  getPokemon();