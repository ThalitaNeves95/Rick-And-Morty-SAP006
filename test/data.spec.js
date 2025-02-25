import { filtroGenero, filtroEspecie, filtroStatus, ordemAlfabetica, calcularPorcentagem, buscarNome} from '../src/data.js';

////////////////////// TESTES DOS TESTES 01 /////////////////////////
const mockPersonagens = [
   {
      "name": "Bearded Lady",
      "status": "Dead",
      "species": "Alien",
      "gender": "Female",
    },
    {
      "name": "Boobloosian",
      "status": "Dead",
      "species": "Alien",
      "gender": "unknown",
    },
    {
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    }
];


const mockNames = [
  {"name": "Bearded Lady"},
  {"name": "Rick Sanchez"},
  {"name": "Morty Smith"},
  {"name": "Boobloosian"},
]


/////////////////////TESTE PARA FILTRAR O GENERO
  describe('filtroGenero', () => {
    it('Deverá ser uma função', () => {
    expect(typeof filtroGenero).toBe('function');
  });

  it('Deverá filtrar pelo gênero Male', () => {
    const genderMale = "Male"
    const expected = filtroGenero(mockPersonagens, genderMale)
    expect (expected.length).toEqual(2)
    expect (expected[0].gender).toEqual(genderMale)
    expect (expected[1].gender).toEqual(genderMale)
  });
});


/////////////////////TESTE PARA FILTRAR A ESPÉCIE 
describe('filtroEspecie', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filtroEspecie).toBe('function');
});

it('Deverá filtrar pela espécie Alien', () => {
  const specieAlien = "Alien"
  const expected = filtroEspecie(mockPersonagens, specieAlien)
  expect (expected.length).toEqual(2)
  expect (expected[0].species).toEqual(specieAlien)
  expect (expected[1].species).toEqual(specieAlien)
  });
});


/////////////////////TESTE PARA FILTRAR O STATUS 
describe('filtroStatus', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filtroStatus).toBe('function');
});

it('Deverá filtrar pelo status Alive', () => {
  const statusAlive = "Alive"
  const expected = filtroStatus(mockPersonagens, statusAlive)
  expect (expected.length).toEqual(2)
  expect (expected[0].status).toEqual(statusAlive)
  expect (expected[1].status).toEqual(statusAlive)
  });

it('Deverá filtrar pelo status Dead', () => {
  const statusDead = "Dead"
  const expected = filtroStatus(mockPersonagens, statusDead)
  expect (expected.length).toEqual(2)
  expect (expected[0].status).toEqual(statusDead)
  expect (expected[1].status).toEqual(statusDead)
  });
});


/////////////////////TESTE PARA ORDENAÇÃO ALFABÉTICA
describe('ordemAlfabetica', () => {
  it('Deverá ser uma função', () => {
  expect(typeof ordemAlfabetica).toBe('function');
});

  it('Deverá retornar em ordem A-Z', () => {
    expect(ordemAlfabetica(mockNames, "AZ")).toStrictEqual(mockNames);
  });
  it('Deverá retornar em ordem Z-A', () => {
    expect(ordemAlfabetica(mockNames, "ZA")).toStrictEqual(mockNames.reverse());
  });
});


/////////////////////TESTE PARA CALCULAR A PORCENTAGEM
describe('calcularPorcentagem', () => {
  it('Deverá ser uma função', () => {
  expect(typeof calcularPorcentagem).toBe('function');
});

it('Deverá retornar 50% de personagens masculinos', () => {
  const expected = calcularPorcentagem(mockPersonagens.length, 2)
  expect (expected).toEqual(50)
  });
});

/////////////////////////TESTE PARA CAMPO DE BUSCA NOME
describe('buscarNome', () => {
  it('Deverá ser uma função', () => {
    expect(typeof buscarNome).toBe('function');
  });
  it('Deveverá buscar por um nome', () => {
    const expected = buscarNome(mockNames, 'banana')
    expect (expected).toEqual([])
  });
  it('Deveverá buscar por um nome', () => {
    const expected = buscarNome(mockNames, 'Rick')
    expect (expected).toEqual([{"name": "Rick Sanchez"}])
  });
});
