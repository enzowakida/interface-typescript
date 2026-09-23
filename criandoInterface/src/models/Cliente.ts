import { PessoaFisica } from "./PessoaFisica.js";
import { ClienteProps } from "../interfaces/PessoaProps.js";

// Passamos ClienteProps para o Generic da classe mãe
export class Cliente extends PessoaFisica<ClienteProps>{

    constructor(props: ClienteProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getClienteDesde(): string { return this.props.clienteDesde; }

    public set setClienteDesde(novaData: string) {
        if (novaData.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.clienteDesde = novaData;
    }
}