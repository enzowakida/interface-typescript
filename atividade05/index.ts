import readLine from "readline-sync";
import { Termostato } from "./src/models/Termostato.js";
import { LampadaInteligente } from "./src/models/LampadaInteligente.js";

console.log("=== CADASTRO DE DISPOSITIVO ===");

// Instanciando usando o objeto de propriedades (Interface)
const novaLampadaInteligente = new LampadaInteligente({
    idLocal: "67",
    nomeLocal: "Zona Sul",
    isLigado: true,
    corHexadecimal: "#FFFFFF",
    nivelBrilho: 50
});

const novoTermostato = new Termostato({
   idLocal: "69",
   nomeLocal: "Zona Norte",
   isLigado: true,
   temperaturaAtual: 23,
   temperaturaAlvo: 32
});

console.log(`Dispositivo cadastrado: ${novaLampadaInteligente.getIdLocal}`);
console.log(`Nome do local: ${novaLampadaInteligente.getNomeLocal}`);
console.log(`Cor Hexadecimal: ${novaLampadaInteligente.getCorHexadecimal}`);
console.log(`Nivel do brilho: ${novaLampadaInteligente.getNivelBrilho}`);

console.log("================================================");

console.log(`Dispositivo cadastrado: ${novoTermostato.getIdLocal}`);
console.log(`Nome do local: ${novoTermostato.getNomeLocal}`);
console.log(`Temperatura atual: ${novoTermostato.getTemperaturaAtual}`);
console.log(`Temperatura alvo: ${novoTermostato.getTemperaturaAlvo}`);

console.log("================================================");

// Interação via teclado utilizando herança (Os setters continuam funcionando perfeitamente)
novaLampadaInteligente.setIdLocal = readLine.question("Digite o novo ID do local: ");
novaLampadaInteligente.setNomeLocal = readLine.question("Digite o novo nome do local: ");
novaLampadaInteligente.setCorHexadecimal = readLine.question("Digite a nova cor hexadecimal: ");
novaLampadaInteligente.setNivelBrilho = readLine.questionInt("Digite o novo nivel do brilho: ");

console.log("================================================");

novoTermostato.setIdLocal = readLine.question("Digite o novo ID do local: ");
novoTermostato.setNomeLocal = readLine.question("Digite o novo nome do local: ");
novoTermostato.setTemperaturaAtual = readLine.questionInt("Digite a nova temperatura atual: ");
novoTermostato.setTemperaturaAlvo = readLine.questionInt("Digite a nova temperatura alvo: ");


// Exibindo TODOS os dados dos dispositivos no final
console.log("\n================================================");
console.log("        DADOS COMPLETOS DOS DISPOSITIVOS         ");
console.log("================================================");
// Dados herdados da classe LampadaInteligente
console.log(`ID do local:                   ${novaLampadaInteligente.getIdLocal}`);
console.log(`Nome do local:                 ${novaLampadaInteligente.getNomeLocal}`);
console.log(`Está ligado?                   ${novaLampadaInteligente.getIsLigado}`);
console.log(`Cor hexadecimal:               ${novaLampadaInteligente.getCorHexadecimal}`);
console.log(`Nivel do brilho:               ${novaLampadaInteligente.getNivelBrilho}`);
// Dados específicos da classe Termostato
console.log("================================================");
console.log(`ID do local:                   ${novoTermostato.getIdLocal}`);
console.log(`Nome do local:                 ${novoTermostato.getNomeLocal}`);
console.log(`Está ligado?                   ${novoTermostato.getIsLigado}`);
console.log(`Temperatura atual:             ${novoTermostato.getTemperaturaAtual}`);
console.log(`Temperatura alvo:              ${novoTermostato.getTemperaturaAlvo}`);
console.log("================================================\n");