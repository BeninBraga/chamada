const Name_alunos0 = [
    "ANA CAROLINA PONTAROLO CARVALHO", 
    "ANA HELOISE MONTEIRO DA SILVA", 
    "ANA LUIZA DA SILVA NOGUEIRA", 
    "ANDRE CARDIN SOARES",
    "BEATRIZ BRANDT VIANA",
    "BHIANCA MULDENBERGER PINTO",
    "CAUÃ JUN KESHINO",
    "ELIÃ GABRIEL VIEIRA",
    "ENZO SAMUEL LISBOA ZORDENUNES",
    "GIOVANNA CALDEIRA",
    "HENRIQUE DUARTE DOS SANTOS",
    "HENRIQUE EMILIO SILVA KRUGER",
    "IAGO DANIEL CALIXTO",
    "IASMIN APARECIDA DA SILVA PEREIRA",
    "ISADORA CRISTINA SILVEIRA",
    "JHENYFER GUIMARÃES DE LARA",
    "JOAO FRANCISCO KUJIV",
    "JOÃO HENRIQUE MORAIS DE ASSIS",
    "KAUA BRAGA BOLA ERRADO",
    "LUIZ FELIPE DO ROSARIO DE PAULA",
    "LUIZ GUSTAVO BRASIL",
    "MARIA JULIA AMORIM DA SILVA",
    "MARIA LUYZA MENDES DA SILVA LEAL",
    "PAOLA RAFAELA DOS SANTOS AMARAL",
    "PEDRO HENRIQUE LOPES DE LARA",
    "RENATO GABRIEL VIANA STRAUBE",
    "RICARDO PEREIRA",
    "VICTOR DE PAULA",
    "VINICIUS BORTOLI",
    "WILLIAN NOVAES BITTENCOURT"
];
const Number_alunos0 = [1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16,
    17, 18, 66, 21,
    22, 23, 24, 26,
    27, 28, 29, 30,  
    31, 32, 33   
];

const novaListaDeChamada = [];
for (let i = 0; i < Name_alunos0.length; i++) {
    if (Number_alunos0[i] !== 66) {
        novaListaDeChamada.push({ numero: Number_alunos0[i], nome: Name_alunos0[i].split(' ').slice(0,2).join(' ') });
    } else {
        novaListaDeChamada.push({ numero: 19, nome: "LORENZO HENRIQUE BENIN" });
    }
}

novaListaDeChamada.forEach(aluno => console.log(`${aluno.numero}: ${aluno.nome}`))