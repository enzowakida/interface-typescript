import readLine from "readline-sync";
import { Moto } from "./src/models/Moto.js";
import { Carro } from "./src/models/Carro.js";

console.log("=== CADASTRO DE VEICULO ===");

// Instanciando usando o objeto de propriedades (Interface)
const novoCarro = new Carro({
    marca: "Nissan",
    modelo: "GT-R",
    ano: 2020,
    quantidadeDePortas: 4
});

const novoMoto = new Moto({
    marca: "Honda",
    modelo: "Sahara XRE300",
    ano: 2027,
    cilindradas: 293.5
});

console.log(`Carro cadastrado: ${novoCarro.getMarca}`);
console.log(`Modelo: ${novoCarro.getModelo}`);

console.log(`Moto cadastrada: ${novoMoto.getMarca}`);
console.log(`Modelo: ${novoMoto.getModelo}`);

// Interação via teclado utilizando herança (Os setters continuam funcionando perfeitamente)
novoCarro.setMarca = readLine.question("Digite o nome atualizado da marca: ");
novoCarro.setModelo = readLine.question("Digite o novo modelo: ");

novoMoto.setMarca = readLine.question("Digite o nome atualizado da marca: ");
novoMoto.setModelo = readLine.question("Digite o novo modelo: ");

// Exibindo TODOS os dados dos veiculos no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DOS VEICULOS            ");
console.log("================================================");
// Dados herdados da classe Carro
console.log(`Marca:                  ${novoCarro.getMarca}`);
console.log(`Modelo:                 ${novoCarro.getModelo}`);
console.log(`Ano:                    ${novoCarro.getAno}`);
console.log(`Quantidade de Portas:   ${novoCarro.getQuantidadeDePortas}`);
console.log("================================================");
// Dados específicos da classe Moto
console.log(`Marca:                  ${novoMoto.getMarca}`);
console.log(`Modelo:                 ${novoMoto.getModelo}`);
console.log(`Ano:                    ${novoMoto.getAno}`);
console.log(`Cilindradas:            ${novoMoto.getCilindradas}`);
console.log("================================================\n");