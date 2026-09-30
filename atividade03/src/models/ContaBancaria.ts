import { ContaBancariaProps } from "../interfaces/ContaBancariaProps.js";

// A classe recebe o Generic <T> para entender as propriedades das classes filhas
export class ContaBancaria<T extends ContaBancariaProps = ContaBancariaProps> {

    // O 'protected' permite que as filhas enxerguem o objeto 'props'
    constructor(protected props:T) {}

    public get getNumeroConta(): string { return this.props.numeroConta; }
    public get getTitular(): string { return this.props.titular; }
    public get getSaldo(): number { return this.props.saldo; }

        public set setNumeroConta(novoNumeroConta: string) {
        if (novoNumeroConta.trim().length === 0) {
            console.log("\n ERRO: O numero da conta não pode ser vazio!");
            return;
        }
        this.props.numeroConta = novoNumeroConta;
    }

        public set setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n ERRO: O titular não pode ser vazio!");
            return;
        }
        this.props.titular = novoTitular;
    }

        public set setSaldo(novoSaldo: number) {
        if (novoSaldo == 0) {
            console.log("\n ERRO: O saldo não pode ser vazio!");
            return;
        }
        this.props.saldo = novoSaldo;
    }
}