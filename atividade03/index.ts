import readLine from "readline-sync";
import { Corrente } from "./src/models/Corrente.js";
import { Poupanca } from "./src/models/Poupanca.js";

console.log("=== CADASTRO DE CONTA ===");

// Instanciando usando o objeto de propriedades (Interface)
const novoCorrente = new Corrente({
    numeroConta: "67-676-767",
    titular: "Kayque Affonso",
    saldo: 4078,
    limiteChequeEspecial: 1900
});

const novoPoupanca = new Poupanca({
    numeroConta: "69-696-969",
    titular: "Kauan Affonso",
    saldo: 3678,
    taxaRendimentoMensal: 32
});

console.log(`Conta cadastrada: ${novoCorrente.getTitular}`);
console.log(`Numero da conta: ${novoCorrente.getNumeroConta}`);

console.log(`Conta cadastrada: ${novoPoupanca.getTitular}`);
console.log(`Numero da conta: ${novoPoupanca.getNumeroConta}`);

console.log("================================================");

// Interação via teclado utilizando herança (Os setters continuam funcionando perfeitamente)
novoCorrente.setTitular = readLine.question("Digite o titular atualizado da conta: ");
novoCorrente.setNumeroConta = readLine.question("Digite o numero atualizado da conta: ");

novoPoupanca.setTitular = readLine.question("Digite o titular atualizado da conta: ");
novoPoupanca.setNumeroConta = readLine.question("Digite o numero atualizado da conta: ");

// Exibindo TODOS os dados das contas no final
console.log("\n================================================");
console.log("             DADOS COMPLETOS DO CONTA            ");
console.log("================================================");
// Dados herdados da classe Corrente
console.log(`Titular:                       ${novoCorrente.getTitular}`);
console.log(`Numero da conta:               ${novoCorrente.getNumeroConta}`);
console.log(`Saldo:                         ${novoCorrente.getSaldo}`);
console.log(`Limite de Cheque Especial:     ${novoCorrente.getLimiteChequeEspecial}`);
console.log("================================================");
// Dados específicos da classe Poupanca
console.log(`Titular:                       ${novoPoupanca.getTitular}`);
console.log(`Numero da conta:               ${novoPoupanca.getNumeroConta}`);
console.log(`Saldo:                         ${novoPoupanca.getSaldo}`);
console.log(`Taxa de Rendimento Mensal:     ${novoPoupanca.getTaxaRendimentoMensal}`);
console.log("================================================\n");