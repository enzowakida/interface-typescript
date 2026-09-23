import { PessoaFisica } from "./PessoaFisica.js";
import { FuncionarioProps } from "../interfaces/PessoaProps.js";

// Passamos FuncionarioProps para o Generic da classe mãe
export class Funcionario extends PessoaFisica<FuncionarioProps>{

    constructor(props: FuncionarioProps) {
        super(props);
    }

    public get getRegistro(): string { return this.props.registro; }
    public get getCarteiraTrabalho(): string { return this.props.carteiraTrabalho; }
    public get getPis(): string { return this.props.pis; }

    public set setRegistro(novoRegistro: string) {
        this.props.registro = novoRegistro;
    }
}