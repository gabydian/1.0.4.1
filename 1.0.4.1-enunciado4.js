//Enunciado IV: Utilizando o Node.js, crie uma função que irá retornar todos os filmes que possui o gênero “Ação” ou “Ficção Cientifica”. Você deve utilizar o filter. 
const filmes = [
    {
        "nome": "O Labirinto do Fauno",
        "lancamento": 2006,
        "diretores": ["Guillermo del Toro"],
        "generos": ["Fantasia"]
    },
    {
        "nome": "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
        "lancamento": 2005,
        "diretores": ["Andrew Adamson"],
        "generos": ["Fantasia", "Aventura"]
    },
    {
        "nome": "Indiana Jones e os Caçadores da Arca Perdida",
        "lancamento": 1981,
        "diretores": ["Steven Spielberg"],
        "generos": ["Aventura"]
    },
    {
        "nome": "Jurassic Park: Parque dos Dinossauros",
        "lancamento": 1993,
        "diretores": ["Steven Spielberg"],
        "generos": ["Aventura"]
    },
    {
        "nome": "Mad Max: Estrada da Fúria",
        "lancamento": 2015,
        "diretores": ["George Miller"],
        "generos": ["Ação"]
    },
    {
        "nome": "Duro de Matar",
        "lancamento": 1988,
        "diretores": ["John McTiernan"],
        "generos": ["Acao"]
    },
    {
        "nome": "Blade Runner: O Cacador de Androides",
        "lancamento": 1982,
        "diretores": ["Ridley Scott"],
        "generos": ["Ficcao Cientifica"]
    },
    {
        "nome": "Interstellar",
        "lancamento": 2014,
        "diretores": ["Christopher Nolan"],
        "generos": ["Ficcao Cientifica"]
    },
    {
        "nome": "O Senhor do Aneis: A Sociedade do Anel",
        "lancamento": 2002,
        "diretores": ["Peter Jackson"],
        "generos": ["Fantasia", "Aventura"]
    },
    {
        "nome": "Harry Potter e a Pedra Filosofal",
        "lancamento": 2001,
        "diretores": ["Chris Columbus"],
        "generos": ["Fantasia"],
    },
    {
        "nome": "Matrix",
        "lancamento": 1999,
        "diretores": ["Lana Wachowski", "Lilly Wachowski"],
        "generos": ["Acao", "Ficcao Cientifica"]
    }
]

function filtrar() {

    return filmes.filter(filme => {
        let ehFiccaoOuAcao = filme.generos.includes('Ficcao Cientifica'||'Acao');
        return ehFiccaoOuAcao;
    });
}
console.log(filtrar());