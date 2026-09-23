import readLine from "readline-sync";
import { Funcionario } from "./src/models/Funcionario.js";

console.log("=== CADASTRO DE FUNCIONÁRIO ===");

// Instanciando usando o objeto de propriedades (Interface)
const novoFuncionario = new Funcionario({
    cpf: "111.222.333-44",
    nome: "Carlos Silva",
    telefone: "11999999999",
    email: "carlos@email.com",
    dataNascimento: "1990-05-15",
    registro: "REG-1234",
    carteiraTrabalho: "CTPS-9876",
    pis: "PIS-5555"
});

console.log(`\nFuncionário cadastrado: ${novoFuncionario.getNome}`);
console.log(`Registro: ${novoFuncionario.getRegistro}`);

// Interação via teclado utilizando herança (Os setters continuam funcionando perfeitamente)
novoFuncionario.setNome = readLine.question("\nDigite o nome atualizado do funcionario: ");
novoFuncionario.setTelefone = readLine.question("Digite o novo telefone: ");

// Exibindo TODOS os dados do funcionário no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DO FUNCIONÁRIO            ");
console.log("================================================");
// Dados herdados da classe PessoaFisica
console.log(`CPF:                  ${novoFuncionario.getCpf}`);
console.log(`Nome:                 ${novoFuncionario.getNome}`);
console.log(`Telefone:             ${novoFuncionario.getTelefone}`);
console.log(`E-mail:               ${novoFuncionario.getEmail}`);
console.log(`Data de Nascimento:   ${novoFuncionario.getDataNascimento}`);
// Dados específicos da classe Funcionario
console.log(`Registro:             ${novoFuncionario.getRegistro}`);
console.log(`Carteira de Trabalho: ${novoFuncionario.getCarteiraTrabalho}`);
console.log(`PIS:                  ${novoFuncionario.getPis}`);
console.log("================================================\n");