import readLine, { questionInt } from "readline-sync";
import { Cachorro } from "./src/models/Cachorro.js";
import { Gato } from "./src/models/Gato.js"

console.log("=== CADASTRO DE ANIMAL ===");

// Instanciando usando o objeto de propriedades (Interface)
const novoCachorro = new Cachorro({
    nomePaciente: "Nami",
    nomeTutor: "Enzo",
    pesoKG: 56,
    porte: "69",
    precisaTosa: false,
});


const novoGato = new Gato({
    nomePaciente: "Greg",
    nomeTutor: "Saiko",
    pesoKG: 67,
    fivFelvTestado: false,
    isIndoor: true,
});

console.log(`Cachorro cadastrado: ${novoCachorro.getNomePaciente}`);
console.log(`Nome do tutor: ${novoCachorro.getNomeTutor}`);

console.log("================================================");

console.log(`Gato cadastrado: ${novoGato.getNomePaciente}`);
console.log(`Nome do tutor: ${novoGato.getNomeTutor}`);

console.log("================================================");

// Interação via teclado utilizando herança (Os setters continuam funcionando perfeitamente)
novoCachorro.setNomePaciente = readLine.question("Digite o nome atualizado do paciente: ");
novoCachorro.setNomeTutor = readLine.question("Digite o nome atualizado do tutor: ");
novoCachorro.setPesoKG = readLine.questionInt("Digite o peso atualizado: ");
novoCachorro.setPorte = readLine.question("Digite o porte atualizado: ");
novoCachorro.setPrecisaTosa = true;

novoGato.setNomePaciente = readLine.question("Digite o nome atualizado do paciente: ");
novoGato.setNomeTutor = readLine.question("Digite o nome atualizado do tutor: ");
novoGato.setPesoKG = readLine.questionInt("Digite o peso atualizado: ");
novoGato.setFivFelvTestado = false;
novoGato.setIsIndoor = true;

// Exibindo TODOS os dados dos animais no final
console.log("\n================================================");
console.log("           DADOS COMPLETOS DOS ANIMAIS           ");
console.log("================================================");
// Dados herdados da classe Cachorro
console.log(`Nome do paciente:              ${novoCachorro.getNomePaciente}`);
console.log(`Nome do tutor:                 ${novoCachorro.getNomeTutor}`);
console.log(`Peso (KG):                     ${novoCachorro.getPesoKG}`);
console.log(`Porte:                         ${novoCachorro.getPorte}`);
console.log(`Precisa de tosa:               ${novoCachorro.getPrecisaTosa}`);
console.log("================================================");
// Dados específicos da classe Gato
console.log(`Nome do paciente:              ${novoGato.getNomePaciente}`);
console.log(`Nome do tutor:                 ${novoGato.getNomeTutor}`);
console.log(`Peso (KG):                     ${novoGato.getPesoKG}`);
console.log(`Testado (?):                   ${novoGato.getFivFelvTestado}`);
console.log(`Is indoor (?):                 ${novoGato.getIsIndoor}`);
console.log("================================================\n");