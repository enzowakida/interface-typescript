import { ContaBancaria } from "./ContaBancaria.js";
import { CorrenteProps } from "../interfaces/ContaBancariaProps.js";

// Passamos CorrenteProps para o Generic da classe mãe
export class Corrente extends ContaBancaria<CorrenteProps>{

    constructor(props: CorrenteProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getLimiteChequeEspecial(): number { return this.props.limiteChequeEspecial; }

    public set setLimiteChequeEspecial(novoLimiteChequeEspecial: number) {
        if (novoLimiteChequeEspecial == 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.limiteChequeEspecial = novoLimiteChequeEspecial;
    }
}